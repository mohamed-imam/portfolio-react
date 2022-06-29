import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const urlParams = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [product, setProduct] = useState([]);

  return (
    <div className='product d-flex justify-content-center'>
      <Card className='my-5' style={{ width: "18rem" }}>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant='primary'>{product.price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
