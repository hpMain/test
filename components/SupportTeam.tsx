import Image from "next/image";
import Divider from "./divider";

export function SupportTeam() {
    return (<>
        <Divider marginTop='20px' marginBottom='-20px' />
        <div className="flex items-center justify-center p-0 bg-[#b3e0ff] py-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-[1200px] gap-5  ml-5 mr-5">
                <div className="flex flex-col items-start justify-between gap-2">
                    <span className="lg:text-4xl ms:text-2xl tracking-wide lg:text-left text-center w-full">Our Team is Here to Help You <br />
                        <h1 className="text-[red] font-bold text-5xl pt-3 pb-3">24/7/365</h1>
                    </span>
                    <span>
                        <ul>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Get help directly from the editor, thanks to our 24/7 live chat support.</li>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Troubleshoot by yourself with our video walkthroughs and guides.</li>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Become a pro webmaster with our in-depth tutorials.</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <Image
                        src={"/Images/Logo/Comparision/Contact.webp"}
                        height={1000}
                        width={1000}
                        quality={100}
                        alt={"LiteSpeed Cache by Hosting Provider"}
                        style={{
                            width: "auto",
                            height: "200px",
                            backgroundColor: "white"
                        }}
                        className="shadow-lg rounded-lg"
                    />
                </div>
            </div>
        </div>
        <Divider marginTop='-20px' marginBottom='0px' />
    </>);
}

