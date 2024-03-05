"use client";
import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import toast from "react-hot-toast";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
  const [preview, setPreview] = useState("");
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
      toast.success("Image uploaded successfully")
    };

    file && upload();
  }, [file]);

  const handleChange = (e) => {
    if (typeof document !== 'undefined')  
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });
    setPreview("");
    setTitle("");
    setValue("");
    setCatSlug("style");
    toast.success("Post created successfully");
    router.push("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="p-14 text-[64px] bg-transparent border-none outline-none dark:text-white"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <div className="flex flex-col gap-4 h-full relative">
        {/* <button
          onClick={toggleOpen}
          className=" w-9 h-9 rounded-[50%] bg-transparent flex items-center justify-center border-solid border-[1px] border-gray-400 cursor-pointer"
        >
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button> */}
        <ReactQuill
          className="w-full h-full pb-16"
          theme="bubble"
          value={value}
          onChange={(e) => setValue(e)}
          placeholder="Tell your story..."
        />
        <div className="flex flex-col gap-5 z-10 w-full left-14 dark:bg-[#0f172a] bg-white">
          <div className="flex flex-row gap-24">
            <div className="text-[20px] font-medium">Choose your Picture</div>

            <div className="flex items-center w-full">
              {preview && (
                <Image
                  alt="preview image"
                  src={preview}
                  width={0}
                  height={0}
                  className="w-auto h-auto items-start"
                />
              )}
              {!preview && (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 justify-center text-center">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
              )}
            </div>
          </div>

          {!preview && (
            <div className="flex flex-row gap-[130px] max-2xl:gap-[127px] max-xl:gap-[117px] max-lg:gap-[106px] max-md:gap-[95px] max-sm:gap-[77px]">
              <div className="text-[20px] font-medium">
                Choose your <br /> Category
              </div>

              <select
                className="px-8 p-2 w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCatSlug(e.target.value)}
              >
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
              </select>
            </div>
          )}

          {preview && (
            <div className="flex flex-row pt-10 gap-[130px] max-2xl:gap-[127px] max-xl:gap-[117px] max-lg:gap-[106px] max-md:gap-[95px] max-sm:gap-[77px]">
              <div className="text-[20px] font-medium">
                Choose your <br /> Category
              </div>

              <select
                className=" appearance-none px-8 p-2 w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCatSlug(e.target.value)}
              >
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <button
        className="bg-[#1a8917] text-white px-5 py-2 rounded-lg mt-20"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
