import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  h-screen">
      <Header />
      <Nav />
      <Body/>
      <Footer/>
    </div>
  );
}
