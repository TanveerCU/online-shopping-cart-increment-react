import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import './nav.css';
import NavButton from './NavButton';

export default function Nav(props){

    return(
    <>
    <div className="container d-flex justify-content-start align-items-center flex-wrap mt-3 ">
    <nav className="navbar ">
        <ul>
            <Link to ="/jeans" ><NavButton name="jeans"/></Link>
            <Link to ="/t-shirt"><NavButton name="t-shirt"/></Link>
            <Link to ="/shoes" ><NavButton name="shoes"/></Link>
            <Link to ="/contact"><NavButton name="contact"/></Link>
        </ul>
    </nav>
    <Cart cartitem={props.itemnumber} del={props.del}/>
    </div>
    </>
    )
}