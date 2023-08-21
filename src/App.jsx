import "./assets/scss/App.scss";
import TopNavigation from "./views/navigation_bar/TopNavigation";
import Headline from "./views/headline/Headline";
import Services from "./views/main/Services";
import Feature from "./views/main/Feature";

function App() {
    return (
        <>
            <div className="app">
                <TopNavigation/> 
                <Headline/>
                <Services/>
                <Feature/>
            </div>
            
        </>
    )
}

export default App
