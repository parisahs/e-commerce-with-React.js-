import React from 'react'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './Navbar.css'

const Navbar = (props) => {
    return (
        <header className="header">

            <nav>
                <ul className="nav-items">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/">Products</a></li>
                    <li className="nav-item"><a href="/">Contact Us</a></li>
                </ul>
            </nav>



            <FontAwesomeIcon
                className="shopping-cart "
                onClick={props.showModal}
                icon={faShoppingCart}
            />

            <span className="counter">{props.counter}</span>

        </header>
    )
}

export default Navbar