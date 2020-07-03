import React, {useEffect} from 'react';
import ProductItem from '../ProductItem/index';
import Empty from '../../common/Empty';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/productsActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const productData = useSelector( state => state?.products?.data);
    const productDataFiltered = useSelector( state => state?.products?.filtered);
    const isProductLoading = useSelector( state => state?.products?.loading);

    const data = (productDataFiltered?.length > 0 && productDataFiltered) ||  (productData?.length > 0 && productData);

    useEffect(() => {
        dispatch( getProducts() )
	}, [dispatch]);
	

    return (
		<div className="product-list-container">
			{isProductLoading 
				? <>...Loading</>
				:  <div className="product-list">
					{data?.length > 0 ? (

						data.map( product => {
								return <ProductItem key={product?.id} product={product}/>
							})
						
					) : (
						<Empty title={"ОЙ!"} text={"К сожалению, продуктов не найдено"}/>
					)}
				</div>
			}
        </div>
    );
}

export default ProductList;
