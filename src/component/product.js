import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from '@mui/material/Skeleton';
import '../css/product.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await axios.get(`https://fakestoreapi.com/products`).then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log(error.message);
    });
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="product__container">
      <h2 className='product__content-title'>Product List</h2>
      <Row className="g-4 w-100 justify-content-center">
        {!loading ? (
          products.map((product, index) => (
            <Col lg={3}>
              <div key={index} className="product__item">
                <div className="product__item-image">
                  <img src={product.image} />
                </div>
                <div className='product__item-content'>
                  <div className='product__item-title fw-bold'>
                    {product.title}
                  </div>
                  <div className='product__price'>
                     {`$ ${product.price}`}
                  </div>
                </div>
              </div>
            </Col>

          ))
        ) : <>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
          <Col lg={3}>
            <Skeleton height={280} style={{
              transform: 'scale(1)'
            }} />
            <div className='mt-3'>
              <Skeleton height={20} style={{
                transform: 'scale(1)'
              }} />

            </div>
          </Col>
        </>}
      </Row>

    </div>
  );
}

export default ProductList;
