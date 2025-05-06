import NavBar from "../components/NavBar";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import ReasonForChoosing from "./sections/ReasonForChoosing";
import Testimonial from "./sections/Testimonial";
import WorkFlow from "./sections/WorkFlow";
import PriceList from "./sections/PriceList";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempa Kode | Joki Coding Cepat & Tuntas</title>
        <meta name="description" content="Layanan joki coding cepat dan tuntas untuk mahasiswa dan profesional." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <Hero/>
        <Service/>
        <ReasonForChoosing/>
        <Testimonial/>
        <WorkFlow/>
        <PriceList/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
