// import NavbarComponent from "./Navbar";
import CoverImageComponent from "./CoverImage";
import './layout.css';
import CardComponent from "./Cards";

function LayoutComponent(){

    
    return(
        <div>
            <div className="coverImage">
            <CoverImageComponent />
            </div>
            <div className="cards">

            <CardComponent />
            </div>
        </div>
    )
}

export default LayoutComponent;