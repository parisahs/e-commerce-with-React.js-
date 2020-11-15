import React from 'react'

const Order = (props) => {
    return (
        <div>
            <div className="center">
                <p>Your Orders</p>
            </div>
            <p>Number of Order: {props.count}</p>
            <p>Total Price:   {props.price}</p>
            <div className="center">
                <p>Continue?</p>
                <button className="modal-btn" onClick={props.close}>No</button>
                <button className="modal-btn" onClick={props.add}>Yes</button>
            </div>
        </div>
    )
}

export default Order