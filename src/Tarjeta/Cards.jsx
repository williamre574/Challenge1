import React from 'react';
import ReactDOM from 'react-dom';


import '../style/Card.css'


function Cards(props){
   
    return(
       
        <div className="container">

        
             <div className='card'>
                 <img  src={props.img} alt='Imagen' />
                 <h3><b>{props.title}</b></h3> 
               
            </div>

        </div>  
        

    );
}

export default Cards;
