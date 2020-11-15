import React from 'react'

import './Builder.css'

const Builder = (props) => {
    return (
        <div className="col">
            <div className="card">
                <div className="main-img">
                    <img src={props.photo} className="img" />
                </div>
                <p className="price">Price: {props.price}$</p>
                <button className="cart-btn" onClick={props.show}>Add Product</button>
            </div>
        </div>
    )
}

export default Builder