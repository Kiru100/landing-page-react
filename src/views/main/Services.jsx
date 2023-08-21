import "./Services.scss";
import ServicesCard from "../components/services_cards/ServicesCard";
import LearnMoreButton from "../components/services_cards/LearnMoreButton";

function Services(){
    let services = [
        {
            title: "Search doctor",
            description: "Free consultation with our trusted doctors and get the best recomendations",
            icon: "doctor"
        },
        {
            title: "Online pharmacy",
            description: "Buy  your medicines with our mobile application with a simple delivery system",
            icon: "pharmacy"
        },
        {
            title: "Consultation",
            description: "Free consultation with our trusted doctors and get the best recomendations",
            icon: "consultation"
        },
        {
            title: "Details info",
            description: "Free consultation with our trusted doctors and get the best recomendations",
            icon: "details_info"
        },
        {
            title: "Emergency care",
            description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
            icon: "emergency_care"
        },
        {
            title: "Tracking",
            description: "Track and save your medical history and health data",
            icon: "tracking"
        }
    ];

    const services_list = services
        .map( service_item => 
                <ServicesCard 
                    icon={service_item.icon}
                    title={service_item.title} 
                    description={service_item.description}/>);

    return(
        <>
            <div className="services">
                <h2>Our Services</h2>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.</p>
                <div className="services_card_container">{services_list}</div>
                <LearnMoreButton/>
            </div>
        </>
    )
}

export default Services;