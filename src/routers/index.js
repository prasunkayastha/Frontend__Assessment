import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginform from '../component/Loginform';
import ProductList from '../component/product';

const PublicRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Loginform />} />
                <Route path='/products' element={<ProductList />} />
            </Routes>
        </>
    )
}

export default PublicRouter;