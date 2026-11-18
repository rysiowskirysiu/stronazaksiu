import { Footer } from "@/components/Footer";
import { Giveaways } from "@/components/Giveaways";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Partners } from "@/components/Partners";
import { SpotlightRoot } from "@/components/SpotlightRoot";

export default function Home() {
  return (
    <>
      <Loader />
      <SpotlightRoot>
        <main className="relative z-[2] mx-auto flex max-w-[1080px] flex-col gap-14 px-5 pt-[72px] pb-12">
          <Hero />
          <Giveaways />
          <Partners />
          <Footer />
        </main>
      </SpotlightRoot>
    </>
  );
}
