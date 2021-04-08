import React from 'react'

export default function Backet(props) {
    return (
        <div className="alert alert-info">
            {props.cartItems.length===0 ? "Basket is empty": <div>you have {props.cartItems.length} products </div>}
            {props.cartItems.length >0  &&
                <div>
                    <ul>
                        {props.cartItems.map(item =>  
                             <li key={item.product.id}>

                                    {/* {console.log('backet',item.product.title)} */}
                                <b>{item.product.title}</b>
                                    x{item.count}
                                <button className="btn btn-danger" onClick={(e)=>props.handleRemoveFromCart(e,item)}>X</button>
                            </li>

                        )

                        }
                    </ul>
                </div>      
            } 
        </div>
    )
}
