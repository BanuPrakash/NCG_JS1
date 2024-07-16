import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartProvider';

export default function ProductCard({ product }) {
  let { addToCart } = useContext(CartContext); // Consumer

  let { id, title, price, description, image } = product

  return (
    <div className='col-sm-12 col-md-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Footer>
            <span>Rs. {price} </span>
            <span className='float-right'>
              <FontAwesomeIcon icon={faHeart} color='red' />
              <FontAwesomeIcon
                onClick={() => addToCart({
                  id,
                  title,
                  price,
                  image,
                  amount: price,
                  quantity: 1
                })}
                icon={faShoppingCart}
                color='blue' />
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  )
}
