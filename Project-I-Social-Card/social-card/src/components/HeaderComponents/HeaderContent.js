import React from 'react';
import './Header.css';
import moment from 'moment';

//let now = require('moment');



function HeaderContent(){
    
    return(
        <div className="header-content">       
            <div className="top-row">
                <h1>Lambda School</h1>
                <span>''''''</span>
                <p>{moment().format("MMM Do")}</p>
            </div>
            <p>Let's learn React by building simple interaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div> 
    )
}

export default HeaderContent;