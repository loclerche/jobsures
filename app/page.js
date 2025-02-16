import Image from "next/image";
import Footer from "./components/footer/page";
import  Header from "./components/header/page"; 
import Herosexion from "./herosexion/page";
import JobPostingForm from "./jobpostinform/page";
import JobListings from "./job-listing/page";
export default function Home() {
  return (
    <div>
      <Header/>
      <Herosexion/>
      <JobPostingForm/>
      <JobListings/>
      <Footer/>
      
      
    </div>
  );
}
