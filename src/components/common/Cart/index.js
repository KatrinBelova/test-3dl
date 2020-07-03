import React from 'react';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as CrossIcon } from '../../../images/icons/cross.svg';
import { handleCart } from '../../../redux/actions/cartActions';


const Cart = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector( state => state?.cart?.isOpen);

    return (
        <div className={`cart ${isOpen ? 'cart--open' : ''}`}>
            <CrossIcon
                className="cart__icon--close"
                onClick={() => dispatch( handleCart(false) )}
                />
            <div>
                <ul>
                    <li>1</li>
                </ul>
            </div>
            <Button className="cart__btn" text={"Купить"} size={"lg"} isWhite={true}/>
        </div>
    );
}

export default Cart;
