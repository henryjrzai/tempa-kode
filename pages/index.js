import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import ReasonForChoosing from "./sections/ReasonForChoosing";
import Testimonial from "./sections/Testimonial";
import WorkFlow from "./sections/WorkFlow";
import PriceList from "./sections/PriceList";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Service/>
      <ReasonForChoosing/>
      <Testimonial/>
      <WorkFlow/>
      <PriceList/>
      <Contact/>
      <Footer/>
    </>
  )
}
