import React from 'react';
import { ReactComponent as CartIcon } from '../../../images/icons/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleCart } from '../../../redux/actions/cartActions';

const Header = () => {
    const dispatch = useDispatch();
    const cartLength = useSelector( state => state?.cart?.data?.length);

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={require('../../../images/logo.png')}  alt="logo"/>
            </Link>
            <div className="header__cart" onClick={() => dispatch( handleCart(true) )}>
                <CartIcon/>
                {cartLength > 0 &&
                    <div className="header__product-counter">{cartLength}</div>
                }
            </div>
        </div>
    );
}

export default Header;
