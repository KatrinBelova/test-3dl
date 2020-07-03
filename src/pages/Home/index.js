import React from 'react';
import ProductList from '../../components/home/ProductList/index';
import SideFilter from '../../components/home/SideFilter/index';
import PageLayout from '../../components/layout/PageLayout/index';

const Home = () => {
    return (
        <PageLayout>
            <>
                <main className="home-layout">
                    <SideFilter/>
                    <ProductList/>
                </main>
            </>
        </PageLayout>
    );
}

export default Home;
