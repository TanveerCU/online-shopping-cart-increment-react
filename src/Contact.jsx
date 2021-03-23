import React, { useState } from 'react';
import HeadingTitle from './HeadinTitle';
import Nav from './Nav';

export default function Contact (){
    const [cartitem] = useState(0);
    return (
        <>
        <Nav itemnumber={cartitem}/>
        <HeadingTitle title ="Contact us phone 0125486541"/>
        </>
        );
}