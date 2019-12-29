import React from 'react';
import CartItem from '../cartItems/cartItem.component';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';
import CustomButton from '../customButton/customButton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    
    <div className='cart-dropdown' >
        <div className="cart-items" >
            {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} items={cartItem} />
            ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
})

export default connect(mapStateToProps)(CartDropdown);   