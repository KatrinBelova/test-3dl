import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/layout/PageLayout/index';
import {
    useParams
  } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProductContent from '../../components/product/ProductContent';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    let params = useParams();
    let productId = +params?.id;
    const productsData = useSelector( state => state?.products?.data);

    
    useEffect(() => {
        let current = productsData?.filter( item => item?.id === productId);
        let storage = JSON.parse(localStorage.getItem("product"));
        
        if(current?.length > 0) {
            localStorage.setItem("product", JSON.stringify(current[0]));
            setProduct(current[0])
        } else {
            setProduct(storage)
        }
        setisLoading(false)

        return () => {
            localStorage.removeItem("product");
        };
    }, [productId, productsData]);

    return (
        <PageLayout>
            <>
                {!isLoading
                    ? <ProductContent product={product}/>
                    : <>...Loading</>
                }
            </>
        </PageLayout>
    );
}

export default Product;
