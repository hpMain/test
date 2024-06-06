import Image from "next/image";
import Divider from "./divider";

export function MaxWebsiteSpeed() {
    return (<>
        <div className="flex items-center justify-center p-0 ml-5 mr-5">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] gap-5">
                <div className="">
                    <Image
                        src={"/Images/Logo/Comparision/LiteSpeedCache.png"}
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
                <div className="flex flex-col items-start justify-between gap-2">
                    <span className="lg:text-4xl ms:text-2xl tracking-wide lg:text-left text-center w-full">Maximize Website Speed</span>
                    <span>
                        <ul>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Maximize website loading speed with LiteSpeed Web Server technology.</li>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Enjoy optimized performance with advanced cache solutions.</li>
                            <li className="ml-2 mb-3 md:text-base text-sm"><span className="mr-2 ml-2">✔</span> Reduce website response times up to 3 times with Object Cache for WordPress.</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    </>);
}

