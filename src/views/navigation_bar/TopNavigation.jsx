import "./TopNavigation.scss";

function TopNavigation(){
    return (
        <nav className="top_navigation">
            <div className="site_logo">
                <span>T</span>
                <span>Trafalgar</span>
            </div>
            <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/">Find a Doctor</a></li>
                <li><a href="/">Apps</a></li>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
        </nav>
    )
}

export default TopNavigation;