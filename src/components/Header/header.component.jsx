import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import  CartIcon  from '../cart-icon/cart-icons.component'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser } from '../../redux/user/user.selector'
import {selectCartHidden } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux';
import { auth } from '../../Firebase/Firebase.utils';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser)
  return(
    <div className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo'/> 
         </Link>

         <div className="options">
             <Link className='option' to='/shop'> 
                SHOP
             </Link>
             <Link className='option' to='/contact'> 
               CONTACT
             </Link>
             {
               currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>  : 
               <Link  className='option' to='/signin'>SIGN IN</Link>
             }
             <CartIcon />
         </div>
         { hidden ? null :
          <CartDropdown />
          }    
    </div>
);
        }

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStatetoProps)(Header)