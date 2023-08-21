import "./ServiceCard.scss";

function ServicesCard({title, description, icon}){
    return(
        <div className="service_card">
            <span className={icon}></span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCard;