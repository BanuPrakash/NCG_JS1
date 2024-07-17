import React from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList'
import { useSelector } from 'react-redux';

export default function CartComponent() {
  let items = useSelector(state => state.cart.items);
  let total = useSelector(state => state.cart.total)
  return (
    <Container>
      {
        items.map(product => <CartList product={product} key={product.id} />)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total: {total} </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button variant='success'>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
