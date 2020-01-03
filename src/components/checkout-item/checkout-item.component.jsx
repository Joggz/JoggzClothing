import React from 'react';
import { connect } from 'react-redux';
import { delectItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.style.scss'

const CheckoutItem = ({cartItems, deleteItem}) => {
    const   { imageUrl, name, price, quantity} = cartItems
  return(
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItems)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  deleteItem: (item) => dispatch(delectItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)