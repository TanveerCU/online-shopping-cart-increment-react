import React from 'react';

export default function NavButton(props){

    return(<li className="btn btn-secondary  px-5 mr-3 mt-1 font-weight-bolder"  style={{textTransform: "capitalize"}}>{props.name}</li>)
}