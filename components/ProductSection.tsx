import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGlobe, FaUserShield, FaStore, FaHdd, FaWhmcs } from 'react-icons/fa';

const ProductItem = ({ Icon, title, description, href }: { Icon: IconType, title: string, description: string, href: string }) => (
    <div className="bg-white p-4 w-full min-w-[250px] max-w-[250px] text-center flex flex-col items-center justify-center mt-5 mb-5 rounded-sm border-2 border-[#686868] hover:border-t-[red] transition-all duration-300">
        <span className="flex rounded-full p-3 bg-[red] w-fit text-white mt-[-55px] border-4 border-[#fbfbfb] mb-2">
            <Icon style={{ width: "40px", height: "40px" }} />
        </span>
        <h2 className="text-xl mb-2">{title}</h2>
        <p className="mb-4 h-[110px]">{description}</p>
        <Link href={href} className="bg-black text-white px-10 py-2 rounded-sm w-full border-2 border-black hover:bg-white hover:text-[#383838] hover:border-black transition-all duration-300">
            EXPLORE NOW
        </Link>
    </div>
);

export function ProductSection() {
    const products = [
        {
            Icon: FaWhmcs,
            title: "WHMCS MODULES",
            description: "Top ranking WHMCS Module with live testing option and 24/7 installation support at cheapest price in market.",
            href: "/whmcs-modules"
        },
        {
            Icon: FaUserShield,
            title: "SHARED LICENSES",
            description: "Get your favorite hosting panel license at the cheapest price in market with 100% safety guarantee.",
            href: "/shared-licenses"
        },
        {
            Icon: FaGlobe,
            title: "SHARED HOSTING",
            description: "We guarantee 99% uptime for your website with our 100% Pure SSD Storage Hosting packages.",
            href: "/shared-hosting"
        },
        {
            Icon: FaHdd,
            title: "RESELLER HOSTING",
            description: "100% White label Reseller Hosting with unlimited NVMe SSD Storage with LiteSpeed Webserver.",
            href: "/reseller-hosting"
        }
    ];

    return (
        <div className="flex w-full justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1200px] p-2 w-full justify-items-center">
                {products.map(product => (
                    <ProductItem key={product.title} {...product} />
                ))}
            </div>
        </div>
    );
}