import React from 'react';
import './card.css';

export default function Card(props){

    return(
        <>
       
        <div className="card ml-5 mt-3" style={{width: "18rem"}}>
            <img style={{height: "12rem"}} src={props.src} className="card-img-top " alt={props.title}/>
            <div className="card-body py-1">
                <h5 className="card-title " style={{textTransform: "capitalize"}}>{props.title}</h5>
                <p className="card-text " style={{textTransform: "capitalize"}}>Type: {props.info}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item py-1">Price: {props.price}</li>
                <li className="list-group-item py-1">Code: {props.code}</li>
            </ul>
            <div className="card-body py-1 text-right">
                <button className="btn btn-sm btn-warning mx-1 px-4" onClick={props.buy}>Buy It</button>
                <button className="btn btn-sm btn-warning px-3" onClick={props.cart}>Cart It</button>
            </div>
        </div>
        </>
    );
    
}