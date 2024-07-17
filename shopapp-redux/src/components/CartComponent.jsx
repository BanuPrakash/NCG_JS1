import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList'

export default function CartComponent() {
  let { items, total, clearCart } = useContext(CartContext);
  return (
    <Container>
      {
          items.map(product => <CartList product={product} key = {product.id }/>)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button variant='success' onClick={() => clearCart()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
