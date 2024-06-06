import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
export default function WhyOurModules() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col">
                <p className="text-[#212faf] font-extrabold text-center p-4">Best WHMCS Modules</p>
                <h1 className="text-5xl ">WHY CHOOSE US</h1>
                <span className="border-b-2 border-[#212faf] w-[50px] mx-auto p-4 transition-all hover:w-[100px]" />
            </div>
            <div className="flex flex-row gap-10 max-w-[1200px] w-full flex-wrap justify-center items-center p-5">
                <div className="bg-white hover:-translate-y-2 transition-all shadow-lg flex-1 flex flex-col justify-between items-center border-2 border-[#ff6b81] min-w-[350px] max-w-[350px] min-h-[240px] max-h-[240px] pl-5 pr-5 rounded-tl-[50px] rounded-br-[50px] overflow-hidden pb-2">
                    <span className="bg-[#ff6b81] h-[80px] w-[130px] flex justify-center items-center rounded-bl-[25px] rounded-br-[25px]">
                        <IoSettingsOutline size={50} color="white" />
                    </span>
                    <span className="h-[20px]">
                        <h1 className="text-xl font-bold text-[#ff6b81] tracking-wide">INTEGRATION SERVICE</h1>
                    </span>
                    <span className="text-center h-[100px]">
                        <p>We will make your billing system as look as your main website! Which will add your billing system a professional look.</p>
                    </span>
                </div>
                <div className="bg-white hover:-translate-y-2 transition-all shadow-lg flex-1 flex flex-col justify-between items-center border-2 border-[#ff8d22] min-w-[350px] max-w-[350px] min-h-[240px] max-h-[240px] pl-5 pr-5 rounded-tl-[50px] rounded-br-[50px] overflow-hidden pb-2">
                    <span className="bg-[#ff8d22] h-[80px] w-[130px] flex justify-center items-center rounded-bl-[25px] rounded-br-[25px]">
                        <FaCubesStacked size={50} color="white" />
                    </span>
                    <span className="h-[20px]">
                        <h1 className="text-xl font-bold text-[#ff8d22] tracking-wide">ADDONS/MODULES</h1>
                    </span>
                    <span className="text-center h-[100px]">
                        <p>We provides all major required modules / addons that will be usable for your business needs in day to day.</p>
                    </span>
                </div>
                <div className="bg-white hover:-translate-y-2 transition-all shadow-lg flex-1 flex flex-col justify-between items-center border-2 border-[#7061c4] min-w-[350px] max-w-[350px] min-h-[240px] max-h-[240px] pl-5 pr-5 rounded-tl-[50px] rounded-br-[50px] overflow-hidden pb-2">
                    <span className="bg-[#7061c4] h-[80px] w-[130px] flex justify-center items-center rounded-bl-[25px] rounded-br-[25px]">
                        <MdOutlineIntegrationInstructions size={50} color="white" />
                    </span>
                    <span className="h-[20px]">
                        <h1 className="text-xl font-bold text-[#7061c4] tracking-wide">CUSTOM DEVELOPMENT</h1>
                    </span>
                    <span className="text-center h-[100px]">
                        <p>Our experienced team who can satisfy your requirements in developing server modules, gateway modules, addon modules etc.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

