import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
const num = Number(localStorage.getItem("cart"));
if(num !== 0){
    localStorage.setItem("cart",num );
}else{
    localStorage.setItem("cart", 0);
}

ReactDOM.render(
<Router>
<App />
</Router>
,document.getElementById('root'));

