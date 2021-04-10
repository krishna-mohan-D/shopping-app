import React from 'react'
import util from '../util'

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
                                   {/* {console.log('pro',item)} */}
                                    x{item.count} = {item.product.price * item.count}
                                <button className="btn btn-danger" onClick={(e)=>props.handleRemoveFromCart(e,item)}>X</button>
                            </li>

                        )

                        }
                    </ul>
                    Total :  { util.formatCurrency(props.cartItems.reduce((a,c) => a + c.product.price*c.count,0))}
                    {/* Total :  {  props.cartItems.reduce((a,c) => console.log('a',c.product.price),0)} */}

                </div>      
            } 
        </div>
    )
}
