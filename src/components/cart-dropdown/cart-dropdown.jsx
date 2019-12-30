import React from 'react';
import CartItem from '../cartItems/cartItem.component';
import CustomButton from '../customButton/customButton.component';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown' >
        <div className="cart-items" >
            {
                cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} items={cartItem} />
            )) :
            <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick={ () => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));   