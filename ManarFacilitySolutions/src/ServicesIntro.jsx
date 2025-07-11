import "./Components/ServicesPageSections/ServicesIntroSection/ServicesIntro.css";

function ServicesIntroSection() {
    return (
        <>
            <div className="services-intro">
                <h1>Our Services</h1>
                <p>
                    At Manar Facility Solutions, we offer a wide variety of services that <br />
                    range from commercial and residential to specialized cleaning.
                </p>
            </div>

            <div className="services-types">
                <div className="service-card">
                    <img src="/Images/Icons/commercial_vector.png" />
                    <h2>Commercial Cleaning</h2>
                    <p>This includes business-operating <br></br> spaces such as offices, retail spaces <br></br> and more.</p>
                </div>

                <div className="service-card">
                    <img src="/Images/Icons/residential_frame.png"/>
                    <h2>Residential Cleaning</h2>
                    <p>We clean all types of homes, from <br></br> semi-detached homes and <br></br> apartments to condos and houses.</p>
                </div>

                <div className="service-card">
                    <img src="/Images/Icons/specialized_frame.png"/>
                    <h2>Specialized Cleaning</h2>
                    <p>Upon request, we offer specialized <br></br> cleaning services such as carpet <br></br> cleaning, window washing, etc.</p>
                </div>
            </div>
        </>
    );
}

export default ServicesIntroSection;
