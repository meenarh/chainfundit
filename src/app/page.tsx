import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Updates from "@/components/Updates";

export default function Home() {
  return (

    <div className="">
      <Navbar />
      <div className="md:ml-24 md:mr-14 py-2">
      <Main />
      <Gallery />
      <Updates />
    </div>
    <Footer />
    </div>
  );
}
