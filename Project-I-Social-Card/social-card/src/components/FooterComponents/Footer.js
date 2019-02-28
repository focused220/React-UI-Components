import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import heart from './heart.png';
import mail from './mail.png';
import refresh from './refresh.png';
import speech from './speech.png';

function Footer(){
    return(
        <footer>
            <div className="icons">
               <img onClick={handleClicks} id="speech" src={speech} alt=""/>
               <img onClick={handleClicks} id="refresh" src={refresh} alt=""/>
               <img onClick={handleClicks} id="heart" src={heart} alt=""/>
               <img onClick={handleClicks} id="mail" src={mail} alt=""/>
            </div>
        </footer>
    );   
    
}

function handleClicks(){
    alert('button clicked');
}



export default Footer;