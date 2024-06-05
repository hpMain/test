import { AllInOneSolution } from "@/components/AllInOneSolution";
import { Footer } from "@/components/Footer";
import { ImageStack } from "@/components/ImageStack";
import { ProductSection } from "@/components/ProductSection";
import SiteJetBuilder from "@/components/SiteJetBuilder";
import { TrustPilotReviews } from "@/components/TrustPilotReviews";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Divider from "@/components/divider";

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
    </>
  );
}

