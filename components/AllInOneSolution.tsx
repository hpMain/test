import Image from "next/image";
import Divider from "./divider";

const customListStyle = "list-none";
const customListItem = " ml-5 text-lg text-[#1f1f1f] tracking-wide mb-2";
export function AllInOneSolution() {

    return (<>
        <Divider marginTop="5px"/>
        <div className="flex flex-row bg-[#b3e0ff] w-full h-fit justify-center items-center pt-6" >
            <div className="flex flex-col dm:flex-row max-w-[1200px] justify-center items-center ml-5 mr-5">
                <div className="flex flex-col max-w-[700px] mb-0 gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-center dm:text-left">FULLY INTEGRATED DIY WEBSITE BUILDER</h2>
                    <p className="text-lg tracking-wide text-center dm:text-left">
                        Explore a diverse selection of over 140 designer templates tailored to every industry, easily personalize them with pre-built elements to suit your requirements - all without the need for coding (but feel free to code if you prefer).
                    </p>
                    <ul className={`${customListStyle}`}>
                        <li className={`${customListItem}`}>✔ Manage up to 100 websites.</li>
                        <li className={`${customListItem}`}>✔ Set up a professional business email address.</li>
                        <li className={`${customListItem}`}>✔ Optimize you Website speed with LSWS + LS-Cache</li>
                        <li className={`${customListItem}`}>✔ Launch websites quickly with our Sitejet Website Builder</li>
                        <li className={`${customListItem}`}>✔ Monitor all your Website Quality at one place</li>
                        <li className={`${customListItem}`}>✔ Make Daily backup so you not loose your work.</li>
                        <li className={`${customListItem}`}>✔ Get 24/7 support.</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <Image
                        src="/Images/Backgrounds/AllInOneSolution.webp" 
                        alt="All in one solution" 
                        width={500} 
                        height={500}
                        quality={100}
                            style={{
                                height: "500px",
                                width: "auto",
                                minWidth: "350px"
                            }}
                                className="hidden dm:block"
                    />
                    <Image
                        src="/Images/Backgrounds/AllInOneSolution-2.png" 
                        alt="All in one solution" 
                        width={500} 
                        height={500}
                        quality={100}
                            style={{
                                height: "250px",
                                width: "auto",
                            }}
                                className="block dm:hidden"
                    />
                </div>
            </div>
        </div>
        <Divider />
    </>)
}

