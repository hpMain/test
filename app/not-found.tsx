import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found - Hosting Provider",
  description: "The page you are looking for does not exist."
}

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[80dvh] gap-2">
      <Image
        src="/Images/Backgrounds/404-Monkey.png"
        alt="404 Page Not Found Hosting Provider"
        width={500}
        height={500}
        quality={100}
        style={{
          width: "174px",
          height: "auto"
        }}
      />
      <p className="text-center">This page isn't available. Sorry about that.
        <br />
        Try searching for something else.</p>
      {/* <Link href="/" className="px-5 py-2 bg-[#1f2937] rounded-sm text-white">Go to the home page</Link> */}
    </div>
  )
}

