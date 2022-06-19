import Tilt from 'react-parallax-tilt'
const Contact = () => {
    return (
        <section className="container section">
            <div className="text-center display-3 title">
                Contact or Visit Us Today
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <Tilt>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8330.788784224478!2d77.19885788066247!3d28.60981654702763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sRashtrapati%20Bhavan!5e0!3m2!1sen!2sin!4v1655620260908!5m2!1sen!2sin" width="600" height="450" style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </Tilt>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                        <div className="h5">
                            Call us @
                        </div>
                        <div className="title display-6">
                            +91 9999999999
                        </div>

                        <div className="h5 mt-4">
                            Visit Us @

                        </div>
                        <div className="title display-6">
                            Rashtrapati Bhawan, President Estate, New Delhi, Delhi 110004
                        </div>
                        <div className="mt-4 h5 ">
                            Email us @
                        </div>

                        <div className="title display-6">
                            ramanath@kovind.com
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;