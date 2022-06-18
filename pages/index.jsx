import Hero from "../components/Hero"
import Doctors from "../components/Doctors"
import Tools from "../components/Tools"
import Author from "../components/Author"
import Contact from "../components/Contact"
import Script from "next/script"
export default function Home() {
  return (
    <div className="bg-primary text-white">
       <Hero />
       <Doctors />
       <Tools />
       <Contact />
       <Author />
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  )
}
