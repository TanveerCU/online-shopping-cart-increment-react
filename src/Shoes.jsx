import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { shoesdata } from './data';
import HeadingTitle from './HeadinTitle';
import Nav from './Nav';


export default function Shoes (){
    let num = Number(localStorage.getItem("cart"));
    let numval=0;
    const [cartitem, setcartitem] = useState(num);
    const [del, setdel] = useState(0);
    const location  = useLocation();
    const buy= ()=>{
        console.log("buy");
        localStorage.setItem("cart", 0);
        setcartitem(0);
        setdel(1);
    }
    const cart= ()=>{
        setcartitem(cartitem+1);
        let strval = localStorage.getItem("cart");
        numval =Number(strval)+1;
        localStorage.setItem("cart", numval);
        setdel(0);
      
    }
    return(
    <>
    <Nav itemnumber={cartitem} del={del}/>
        <HeadingTitle title ={location.pathname} />
        <div className="container d-flex justify-content-start align-items-center mt-3 flex-wrap product-container">
        { shoesdata.map((element,index)=>{
            return(
                <Card src={element.src} title={element.title} info={element.info} code={element.code} price={element.price} buy={buy} cart={cart} key={index}/>
            )
        })}
        </div>
        </>
    );
}