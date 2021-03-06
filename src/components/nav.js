import React, {useEffect, useState} from 'react';
import "./nav.css";

function Nav(props) {

    const[show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`} >
            <img 
            className="nav-logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" 
            alt="Netflix.png" />
            
            <img 
            className="nav-avatar" 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" 
            alt="avatar.png" />
            
        </div>
    );
}

export default Nav;