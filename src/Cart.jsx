import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import './notification.css';

export default function Cart(props){
    let number = props.cartitem;
    let style = {display:"none"};
    if(number!==0 && props.del===0){
        style.display="inline-block";
    }
    return(
        <button type="button" className="icon-button">
            <AddShoppingCartIcon />
            <span className="icon-button__badge" style={style}>{number}</span>
        </button>
        );
}
