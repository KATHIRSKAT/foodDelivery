import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'


const Cart = () => {

  const{cartItems,food_list,removeFromCart}=useContext(StoreContext)

  return (
    
     <div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return(
                <div>
                   <div className='cart-items-title cart-items-item'>
                  <img src={item.image}/>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
                </div>
                <hr/>
                </div>
               
              )
            }
          })
        }
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>
            Cart totals
          </h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>{0}</b>
          </div>
        </div>
        <button>Proceed to checkout</button>
      </div>
     </div>
  )
}

export default Cart
