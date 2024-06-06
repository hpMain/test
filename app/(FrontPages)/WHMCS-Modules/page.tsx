import { ImageStack } from "@/components/ImageStack";
import { ProductSection } from "@/components/ProductSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import WhyOurModules from "@/components/WhyOurModules";
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
    <Divider marginTop="-20px" marginBottom="0" />
    <ImageStack />
    <ProductSection />
    <WhyOurModules />
    <div className="flex flex-row w-full justify-center items-center">
      <div className="flex flex-col max-w-[1000px] pl-10 pr-10 pt-10 gap-4 items-center">
        <h1 className="text-4xl font-base tracking-wider text-center">Payment Gateway Modules</h1>
        <p className="text-base text-center">Our services provide fully featured modules to add extra functionalities to your WHMCS easily. Our team has also work experience creating customized WHMCS Services such as modules and themes as per the particular business requirements. We work continuously on the updating and refining of the modules. Browse through our high-quality modules which also provides a support of 24/7.</p>
        <span className="border-b-2 border-[#212faf] w-[50px] transition-all hover:w-[100px] p-2" />
      </div>
    </div>
    <div>{/* Price Section */}

    </div>
    <div className="flex flex-row w-full justify-center items-center">
      <div className="flex flex-row max-w-[1200px] w-full justify-center items-center">
        <div className="flex-1 flex-row gap-7 ">
          <h1 className="text-3xl font-bold tracking-wider">ENHANCE YOUR BILLING WITH OUR WHMCS MODULES</h1>
          {/* <span className="border-b-2 border-[#212faf] w-[150px] transition-all hover:w-[160px] p-2" /> */}
          <p className="text-base text-left flex gap-4">Our aim to provide quality and reasonable price based Module/Addons for WHMCS.
            <br />
            Our goal is to develop innovate and advanced, quality products and solutions, to our end users. We also aim to provide value for money packages to the price conscious consumer.
            <br />
            Our aim is to always listen our customer’s request in improving our modules and limit their waiting time so that we can able to deliver our product before the time frame.</p>
        </div>
        <div className="flex-1 rounded-lg items-center justify-center flex">
          <Image
            src="/Images/Backgrounds/WHMCS-Integration.png"
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
  </>);
}