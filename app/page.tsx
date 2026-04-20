import Header from "@/app/components/Header";
import Visual from "@/app/components/Visual";
import Summary from "@/app/components/Summary";
import About from "@/app/components/About";
import Work from "@/app/components/Work";
import Career from "@/app/components/Career";
import Stack from "@/app/components/Stack";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import FloatingButton from "@/app/components/FloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Visual />
        <Summary />
        <About />
        <Career />
        <Stack />
        <Work />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
