const Contact = ()=>{
    return (
        <section className="container section">
        <div className="text-center display-3 title">
            Contact or Visit Us Today
        </div>
        <div className="mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <iframe className="rounded-3"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9448859177196!2d85.34121481482703!3d23.390211008357443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c4b6558737%3A0xaddc93620d44688a!2sDENTAL%20SMILE%20(%20near%20RIMS%20medical%20college%20bariatu%20road))!5e0!3m2!1sen!2sin!4v1655301742410!5m2!1sen!2sin"
                        width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                        <div className="h5">
                              Call us @ 
                        </div>
                        <div className="title display-6">
                            +91 8983898283  
                        </div>
                    
                        <div className="h5 mt-4">
                            Visit Us @ 

                        </div>
                        <div className="title display-6">
                            98RV+39J, Bariatu Rd, Bariatu, Ranchi, Jharkhand 834009
                        </div>
                        <div className="mt-4 h5 ">
                            Email us @ 
                      </div>

                      <div className="title display-6">
                         smile@dentalclinic@gmail.com  
                      </div>

                </div>
            </div>
        </div>
    </section>
    );
}
export default Contact;