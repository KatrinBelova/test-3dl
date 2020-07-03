import React from 'react';
import Empty from '../../common/Empty';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { addToCart } from '../../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const ProductContent = ({product}) => {
    const dispatch = useDispatch();
    
    const {
        id,
        name, 
        picture,
        category,
        brand,
        description,
        model,
        details,
        color,
        material,
        care,
        code,
        price
    } = product;

    const imgUrl = (url) => {
        return require(`../../../images/${url}`)
    }

    const pictureStyle = {
        backgroundImage: 'url(' + imgUrl(picture) + ')',
    };

    const cartValue = {
        "id": id,
        "name": name,
        "picture": picture,
        "price": price,
    }

    return (
        <div className="product__content">
            {Object.keys(product)?.length > 0 
                ? (
                    <>
                        <div className="product__img" style={picture ? pictureStyle : null}/>
                        <div className="product__desc">
                            <Link to={'/'} className="product__link-back">Назад</Link>
                            <div className="product__category">{category}</div>
                            <div className="product__name">{name}</div>
                            <div className="product__btns">
                                <Button
                                    text={"В корзину"}
                                    size={"lg"}
                                    disabled={false}
                                    onClick={() => dispatch( addToCart(cartValue) )}/>
                            </div>
                            <div className="product__info">
                                <div className="product__text">
                                    <p>{name} <b>{brand?.en ? `oт ${brand?.en}`: ''}</b> {brand?.ua ? `(${brand?.ua})`: ''}. {description} </p>
                                    <p>Рост модели {model?.height}м,  надет размер {model?.size} </p>
                                    <p>Образ модели дополнен: {details?.map(item => <>{item}</>)}</p>
                                </div>
                                <div className="product__properties">
                                    <div className="product__properties__item"><span>Цвет:</span> {color}</div>
                                    <div className="product__properties__item"><span>Состав:</span> {material}</div>
                                    <div className="product__properties__item"><span>Уход:</span> {care}</div>
                                    <div className="product__properties__item"><span>Артикул:</span> {code}</div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <Empty title={"Продукт не найден"}/>
            }
        </div>
    );
}

export default ProductContent;
