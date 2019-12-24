import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import  CartIcon  from '../cart-icon/cart-icons.component'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { connect } from 'react-redux';
import { auth } from '../../Firebase/Firebase.utils';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
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

const mapStatetoProps = ({user: {currentUser},  cart: {hidden} }) => ({
    currentUser,
    hidden
})


export default connect(mapStatetoProps)(Header)