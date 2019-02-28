import React from 'react';
import './Card.css';

function CardContent(){
    return(
        <div class="card-content">
            <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" className="favico"/>
            <div>
                <h2>Get started with React</h2>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <address>reactjs.org</address> 
            </div>
                   
        </div>
    )
}

export default CardContent;
