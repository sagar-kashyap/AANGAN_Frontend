import NavbarComponent from "./Navbar";
import CoverImageComponent from "./CoverImage";
import './layout.css'
function LayoutComponent(){
    return(
        <div>
            <NavbarComponent />
            <div className="coverImage">
            <CoverImageComponent />
            </div>
        </div>
    )
}

export default LayoutComponent;