"use client"
import React, { useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const {data: session, status} = useSession()
  useEffect(() => {
    if (status === "authenticated")  {
      router.push("/")
    }
  }, [status, router])
  const router = useRouter()
  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center justify-center">
        <div className="flex flex-col mt-16 bg-gray-800 px-[200px] py-[150px] gap-[80px] rounded-xl 
        max-md:px-[100px] max-md:py-[50px] max-sm:p-8 max-sm:text-sm max-sm:gap-12">
            <div className="p-5 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-orange-600" onClick={() => signIn("google")}>Sign in with Google</div>
            <div className="p-5 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-blue-900" onClick={() => signIn("linkedin")}>Sign in with Linkedin</div>
            <div className="p-5 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-black" onClick={() => signIn("github")}>Sign in with Github</div>
        </div>

    </div>
  )
}

export default LoginPage