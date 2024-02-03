import React from 'react';
import payment from "../../images/payment (1).png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Woman</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrival</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore pariatur suscipit ullam! Voluptatem minima reprehenderit eos quibusdam labore? Dicta officia non repellat aut voluptas facere animi, nihil eveniet eaque est?
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis consequuntur veritatis optio minus aperiam exercitationem repudiandae. Officia reprehenderit itaque explicabo. Officiis error id aliquid provident quia enim excepturi soluta.
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">Lamastore</span>
                <span className="copyright">
                    @ Copyright 2024, All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src={payment} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer