import Image from "next/image";

export function SiteJetBuilder() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto mt-5">
            <div className="p-10 flex flex-col lg:flex-row ms:flex-col-reverse items-center justify-between max-w-[1000px] gap-5 bg-white shadow-md rounded-lg border-double border-l-8 border-[red] ml-10 mr-10">
                <div className="flex flex-col items-start justify-center w-fit max-w-[700px]">
                    <h2 className="text-2xl md:text-3xl font-bold lg:text-left sm:text-center mb-4 w-full">FULLY INTEGRATED DIY WEBSITE BUILDER</h2>
                    <p className="text-lg text-justify">
                        Explore a diverse selection of over 140 designer templates tailored to every industry, easily personalize them with pre-built elements to suit your requirements - all without the need for coding (but feel free to code if you prefer).
                    </p>
                </div>
                <div className="flex items-center justify-center min-w-[200px] max-w-[200px]">
                    <Image src="/Images/Logo/BrandLogo/SiteJetBuilder.svg" alt="SiteJet Website Builder" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}