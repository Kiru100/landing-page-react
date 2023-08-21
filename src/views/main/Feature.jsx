import "./Feature.scss";
import LearnMoreButton from "../components/services_cards/LearnMoreButton";

function Feature(){
    return(
        <>
            <div className="feature">
                <section className="leading_healthcare">
                    <span className="leading_healthcare_icon" ></span>
                    <div className="feature_text">
                        <h2>Leading healthcare providers</h2>
                        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                        in the solutions we deliver</p>
                        <LearnMoreButton/>
                    </div>
                </section>
                <section className="download_mobile">
                    <div className="feature_text">
                        <h2>Download our mobile apps</h2>
                        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                        {/* <LearnMoreButton/>. */}
                    </div>
                    <span className="download_mobile_icon"></span>
                </section>
                <section className="testimonials">
                    <h2>What our customer are saying</h2>
                </section>
            </div>
        </>
    )
}

export default Feature;