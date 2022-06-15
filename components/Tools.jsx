const Tools = ()=>
{
    return (
        <section className="container section px-5">
        <div className="text-center display-3 title">
            We offer quality treatements with latest technology
        </div>
        <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row  bg-white bg-opacity-25 rounded-3 ">
                        <div className="col-lg-4 ">
                            <img className="img-fluid tech_image " src="https://i.ibb.co/Cv9pMQF/implant.jpg" alt="implant"
                                border="0" />
                        </div>
                        <div className="col-lg-8 d-flex flex-column justify-content-center">
                            <div className="title display-5 text-lg-start text-center">
                                Dental Implant
                            </div>
                            <div className="mt-3 h4  text-lg-start text-center">
                                Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike
                                posts and replaces damaged or missing teeth with artificial teeth that look and function
                                much like real ones
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row  bg-white bg-opacity-25 rounded-3 ">
                        <div className="col-lg-4 ">
                            <img className="img-fluid tech_image " src="https://i.ibb.co/Cv9pMQF/implant.jpg" alt="implant"
                                border="0" />
                        </div>
                        <div className="col-lg-8 d-flex flex-column justify-content-center">
                            <div className="title display-5">
                                Dental Implant
                            </div>
                            <div className="mt-3 h4">
                                Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike
                                posts and replaces damaged or missing teeth with artificial teeth that look and function
                                much like real ones
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row  bg-white bg-opacity-25 rounded-3 ">
                        <div className="col-lg-4 ">
                            <img className="img-fluid tech_image " src="https://i.ibb.co/Cv9pMQF/implant.jpg" alt="implant"
                                border="0" />
                        </div>
                        <div className="col-lg-8 d-flex flex-column justify-content-center">
                            <div className="title display-5">
                                Dental Implant
                            </div>
                            <div className="mt-3 h4">
                                Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike
                                posts and replaces damaged or missing teeth with artificial teeth that look and function
                                much like real ones
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>


    );
}   

export default Tools;