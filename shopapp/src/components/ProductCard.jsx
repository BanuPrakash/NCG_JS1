import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
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
              <FontAwesomeIcon icon={faShoppingCart} color='blue' />
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  )
}
