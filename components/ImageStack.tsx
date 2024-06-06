import Image from "next/image";

const imageStyle = {
    width: "70px",
    height: "70px",
    padding: "5px",
    borderRadius: "50%",
    border: "1px solid red",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 0px rgba(255, 255, 255, 0.5)",
};

const images = [
    { src: "/Images/Logo/BrandLogo/Shared cPanel License.png", alt: "Shared cPanel License" },
    { src: "/Images/Logo/BrandLogo/Shared CloudLinux License.webp", alt: "Shared CloudLinux License" },
    { src: "/Images/Logo/BrandLogo/Shared LiteSpeed License.webp", alt: "Shared LiteSpeed License" },
    { src: "/Images/Logo/BrandLogo/Shared Imunify360 license.webp", alt: "Shared Imunify360 License" },
    { src: "/Images/Logo/BrandLogo/Shared Plesk License.webp", alt: "Shared Plesk License" }
];
export function ImageStack() {
    return (
        <div className="flex flex-row justify-center align-middle items-center">
            <div className="flex flex-col dm:flex-row w-full max-w-[1100px] p-2">
                <div className="flex flex-1 justify-center align-middle items-center text-white">
                    <h1 className="text-md sm:text-2xl text-center font-bold text-nowrap text-[#1f1f1f]">Explore Our <span className="text-red-600"><strong>Shared Licenses</strong></span> Comprehensive <br /> Solutions for All Your Server Needs!</h1>
                </div>
                <div className="flex flex-1 flex-row justify-center align-middle items-center text-[#383838]">
                    <span className="flex flex-row group w-fit">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                width={500}
                                height={500}
                                quality={100}
                                alt={image.alt}
                                style={imageStyle}
                                className="group-hover:ml-1.5 transition-all duration-300 ml-[-35px]"
                            />
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}