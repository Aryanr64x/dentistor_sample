import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Hero = ()=>{
    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <section className="">
            <div className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="display-6 text-white title ">
                        JYOTI DENTAL CLINIC
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
                            <path
                                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto">
                        
    
    
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row ms-lg-5 mt-5 mt-lg-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center ">
                    <div className="display-3 title fw-bold text-center text-lg-start" data-aos="flip-down">
                        <span className="text-secondary ">
                        Say GoodBye!
                            </span> To All your dental Problems
                    </div>
                    <div className="h4 mt-2  text-center text-lg-start "  data-aos="fade-down">
                        Our Dental Clinic equipped w ith the latest
                        Tech will provide you the most wholesome dental care experience
                    </div>
                    <div className="mt-3 mt-lg-5 d-flex justify-content-lg-start justify-content-center">
                        <button className="btn btn-light text-primary fw-bold"> Find Us </button>
                        <button className="btn btn-outline-light  fw-bold ms-3"> Book Appointment </button>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
    
                    <img className="img-fluid hero-image" src="https://i.ibb.co/161MQQt/model.png"
                        alt="Dental Model with braces" />
                </div>
            </div>
        </section>
    
    
    )
}

export default Hero; 