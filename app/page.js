import Image from "next/image";
import Footer from "./components/footer/page";
import  Header from "./components/header/page"; 
import Herosexion from "./herosexion/page";
export default function Home() {
  return (
    <div>
      <Header/>
      <Herosexion/>
      <Footer/>
      
    </div>
  );
}
