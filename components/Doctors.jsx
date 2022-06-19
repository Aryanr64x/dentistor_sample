import Tilt from "react-parallax-tilt";
const Doctors = () => {
    return (
        <section className="container section">
            <div className="text-center display-3 title">
                Our Specialised Doctors
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 px-5">
                    <Tilt>
                        <div className="rounded-3 d-flex align-items-center flex-column bg-white bg-opacity-25 p-5 doctor_card" data-aos="fade-right">
                            <img className="img-fluid rounded-circle doctor_image" src="https://i.ibb.co/JnYwgrs/doctor1-square.jpg"
                                alt="doctor1-square" border="0" />
                            <div className="title h4 mt-3">
                                Dr One Name
                            </div>
                            <div className="mt-3 h4 text-center">
                                Qualification 1
                                Qualification 2
                                Other Specialisations
                            </div>
                        </div>

                    </Tilt>
                </div>
                <div className="col-lg-6 px-5 mt-4 mt-lg-0">
                    <Tilt>
                        <div className="rounded-3 d-flex align-items-center flex-column bg-white bg-opacity-25 p-5 doctor_card" data-aos="fade-left">
                            <img className="img-fluid rounded-circle doctor_image"
                                src="https://i.ibb.co/vJmtkY2/doctor-2-square.jpg" alt="doctor-2-square" border="0 " />
                            <div className="title h4 mt-3">
                                Dr Two Name
                            </div>
                            <div className="mt-3 h4 text-center">
                                Qualification 1
                                Qualification 2
                                Other Specialisations
                            </div>
                        </div>

                    </Tilt>
                </div>
            </div>
        </section>

    );
}

export default Doctors; 