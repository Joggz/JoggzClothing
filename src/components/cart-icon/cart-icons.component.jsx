import React from 'react';

import { connect } from 'react-redux';
import  {toggleCartHidden }  from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch =>( {
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);