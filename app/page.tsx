import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import VideoSection from "@/components/landing/VideoSection";

export default function Home() {
  return (
    <div>
      <VideoSection />
      <About />
      <Services />
    </div>
  );
}
