import React from 'react';
import { connect } from 'react-redux';
import { delectItemFromCart, addItem, removeItemFromCart} from '../../redux/cart/cart.actions';
import './checkout-item.style.scss'

const CheckoutItem = ({cartItems, deleteItem, addItem, removeItemFromCart}) => {
    const   { imageUrl, name, price, quantity} = cartItems
  return(
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItems)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>&#10095;</div>
        </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItems)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  deleteItem: (item) => dispatch(delectItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)