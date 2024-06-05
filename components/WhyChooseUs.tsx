import Image from "next/image";
import Divider from "./divider";

export function WhyChooseUs() {
  const whyChooseUs = '/Images/Backgrounds/WhyChooseUs.jpeg';
  const features = [
    {
      icon: '/Images/Logo/WhyChooseUs/LiteSpeedIcon.svg', 
      title: 'LITESPEED WEB SERVER',
      description: 'We are Using LiteSpeed Technology to Speed Up your Websites.'
    },
    {
      icon: '/Images/Logo/WhyChooseUs/SafeSecureIcon.svg', 
      title: 'SAFE AND SECURED',
      description: 'Our team assured your web site is always safe and secure.'
    },
    {
      icon: '/Images/Logo/WhyChooseUs/DedicatedSupportIcon.svg', 
      title: 'DEDICATED SUPPORT',
      description: 'We are always available for you 24/7/365. We have Chat support on Whatsapp.'
    }
  ];

  return (
    <>
      <Divider />
      <div className="flex flex-col items-center justify-start w-full h-fit pt-7 pb-7" style={{
        backgroundImage: `url(${whyChooseUs})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <h1 className="text-4xl text-white tracking-[5px]">WHY CHOOSE US</h1>
      <div className="flex justify-center gap-10 w-full py-5 flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md w-1/4 mx-2 min-w-[300px] max-w-[300px]">
            <span className="flex justify-center items-center w-1/4 h-[100px] "><Image src={feature.icon} alt={feature.title} width={75} height={75} /></span>
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
      <Divider />
    </>
  );
}