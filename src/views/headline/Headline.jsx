import "./Headline.scss";

function Headline(){
    return(
        <>
            <div className="headline">
                <div className="headline_text">
                    <span className="vector"></span>
                    <h1><span>Virtual healthcare</span><span>for you</span></h1>
                    <p>Trafalgar provides progressive, and affordable healthcare accessible on mobile and online for everyone.</p>
                    <input type="button" value="Consult today"/>
                </div>
                <div className="headline_image"></div>
            </div>
        </>
    )
}

export default Headline;