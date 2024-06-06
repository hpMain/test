import Image from "next/image";
import Divider from "./divider";

export function WhySharedLicenses() {
  const whyChooseUs = '/Images/Backgrounds/WhyChooseUs.jpeg';
  const features = [
    {
      icon: '/Images/Logo/WhySharedLicense/drivers.png', 
      title: 'EASY INSTALLATION',
      description: 'Very easy to install with a few simple commands'
    },
    {
      icon: '/Images/Logo/WhySharedLicense/InstantActivate.png', 
      title: 'INSTANT ACTIVATION',
      description: 'Instant activation after payment automatically'
    },
    {
      icon: '/Images/Logo/WhySharedLicense/FreeSupport.png', 
      title: 'FREE SUPPORT',
      description: 'Configure the server for free by any of the products.'
    },
    {
      icon: '/Images/Logo/WhySharedLicense/24_7_Support.png', 
      title: '24/7 SUPPORT',
      description: 'We will solve your problem as soon as possible'
    }
  ];

  return (
    <>
      <Divider marginTop="0"/>
      <div className="flex flex-col items-center justify-start w-full h-fit pt-7 pb-7" style={{
        backgroundImage: `url(${whyChooseUs})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <h1 className="text-4xl text-white tracking-[5px]">WHY SHARED LICENSES</h1>
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
      <Divider marginTop="-20px" marginBottom="0"/>
    </>
  );
}