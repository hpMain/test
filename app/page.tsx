import { AllInOneSolution } from "@/components/AllInOneSolution";
import { Footer } from "@/components/Footer";
import { HostingYouGet } from "@/components/HostingYouGet";
import { ImageStack } from "@/components/ImageStack";
import { MaxWebsiteSpeed } from "@/components/MaxWebsiteSpeed";
import { ProductSection } from "@/components/ProductSection";
import { SiteJetBuilder } from "@/components/SiteJetBuilder";
import { TrustPilotReviews } from "@/components/TrustPilotReviews";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SupportTeam } from "@/components/SupportTeam";
import Divider from "@/components/divider";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function Home() {
  return (
    <>
    <ImageStack />
    <ProductSection />
    <Divider />
    <WhyChooseUs />
    <SiteJetBuilder />
    <AllInOneSolution />
    <TrustPilotReviews />
    <HostingYouGet />
    <MaxWebsiteSpeed />
    <SupportTeam />
    <GoogleReviews />
    </>
  );
}

