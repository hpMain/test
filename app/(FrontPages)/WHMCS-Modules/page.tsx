import { ImageStack } from "@/components/ImageStack";
import { ProductSection } from "@/components/ProductSection";
import Divider from "@/components/divider";
import Image from "next/image";

export default function WHMCSModules() {
  return (<>
        <div className="flex flex-row  justify-center items-center w-full h-fit bg-[url('/Images/Backgrounds/WHMCS-Background.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col md:flex-row max-w-[1000px] w-full justify-center items-center h-fit pl-10 pr-10">
              <div className="flex-1 flex flex-col gap-2 w-full  pt-5 pb-5">
                <h1 className="text-4xl font-bold text-white tracking-wider text-center dm:text-5xl md:tracking-wide">WHMCS Modules</h1>
                <p className="text-white text-base text-center dm:text-cxl">We have experience in developing various modules for WHMCS that includes provisioning modules, addon modules, Payment Gateway, hooks and many more</p>
              </div>
              <div className="flex-1">
                <Image 
                  src="/Images/Backgrounds/WHMCS-Banner.webp"
                  width={500}
                  height={500}
                  quality={100}
                  alt="WHMCS Modules by Hosting Provider"
                    style={{
                      width: "500px",
                      height: "auto",
                    }}  
                />
              </div>
          </div>
        </div>
        <Divider marginTop="-20px" marginBottom="0"/>
        <ImageStack />
        <ProductSection />

  </>);
}