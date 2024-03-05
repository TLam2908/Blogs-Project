import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/providers/ThemeProviders";
import AuthProvider from "@/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Blog App",
  description: "My first project with Next.js",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden w-screen dark:bg-[#0f172a] dark:text-[#ddd]">
        <Toaster />
        <AuthProvider>
          <Provider>
            <div className="min-h-screen">
              <div
                className="max-w-[1536px] mx-auto px-20
            max-2xl:max-w-7xl max-xl:max-w-5xl max-xl:px-10 max-lg:max-w-3xl max-md:max-w-[640px] max-[640px]:max-w-[475px]"
              >
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
