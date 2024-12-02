// import NavbarComponent from "./Navbar";
import CoverImageComponent from "./CoverImage";
import './layout.css';
import CardComponent from "./Cards";
import FooterComponent from "./Footer";
import { useState,useEffect } from "react";


function LayoutComponent(){

    
    return(
        <div>
            <div className="coverImage">
            <CoverImageComponent />
            </div>
            <div className="cards">

            <CardComponent />
            </div>
            <div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default LayoutComponent;