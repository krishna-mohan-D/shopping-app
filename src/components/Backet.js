import React from 'react'

export default function Backet(props) {
    return (
        <div className="alert alert-info">
            {props.cartItems.length===0 ? "Basket is empty": <div>you have {props.cartItems.length} products </div>}
        </div>
    )
}
