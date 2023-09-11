import React from "react";
import './Home.css'
import shoes from "../../Images/shoes.png"
function Home(){
    return(
        <div className="wrapper">
                <div className="wrapper-left">
                    <h1>do it<span className="highlight">right</span></h1>
                    <p>Discover Limited Editions Without <br/>any  Limition</p>
                        <p className="content">Making this site to help <br/>you find
                            your favourite and limited<br/> editions without any problem
                        </p>
                        <a href="#"><button className="btn">Shop Now</button></a>
                </div>
                <div className="wrapper-right">
                        <img src={shoes} alt="shoes" className="shoes"/>
                </div>
        </div>
    )
}
export default Home