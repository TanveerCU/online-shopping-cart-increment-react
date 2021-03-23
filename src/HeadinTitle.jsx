import React from 'react';
export default function HeadingTitle(props){

    let str=props.title;
    let res = str.slice(1,str.lenght);
  
    return(
    <>
    <div className="container">
    <h3 className="text-dark pt-5 px-5 " style={{textTransform: "capitalize"}}>{res} products</h3>
    </div>
    <hr/>
    </>
    );
}