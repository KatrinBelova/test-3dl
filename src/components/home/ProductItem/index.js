import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({product}) => {
    const imgUrl = (url) => {
        return require(`../../../images/${url}`)
    }
    const productId = product?.id;
    const divStyle = {
        backgroundImage: 'url(' + imgUrl(product?.picture) + ')',
    };

    return (
        <div className="product-item-wrapper">
            <Link to={`/product/${productId}`} className="product-item">
                <div className="product-item__img" style={divStyle}>
                    {/* <img src={imgUrl(product?.picture)} alt={product?.name}/> */}
                </div>
                <div>
                    <div className="product-item__desc">
                        <div className="product-item__category">{product?.category}</div>
                        <div  className="product-item__name">{product?.name}</div>
                        <div  className="product-item__price">{product?.price?.currency}{product?.price?.sum}</div>
                        <div  className="product-item__available">на складе: {product?.available}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
