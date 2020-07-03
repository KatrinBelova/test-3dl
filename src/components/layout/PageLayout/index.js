import React from 'react';
import Cart from '../../common/Cart';
import Header from '../Header';

const withCart = ({ children }) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Cart/>
        </>
    );
}

export default withCart;
