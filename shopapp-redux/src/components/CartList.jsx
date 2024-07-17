import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'


export default function CartList({ product }) {

  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={product.image} style={{ "width": "50px" }} />
      </div>
      <div className='col-md-2'>
        {product.title}
      </div>
      <div className='col-md-4'>
        <Button>-</Button>
        QTY: {product.quantity}
        <Button >+</Button>
      </div>
      <div className='col-md-2'>
        Price : {product.price} &nbsp;
      </div>
      <div className='col-md-2'>
        Amount: {product.amount}
      </div>
    </div>
  )
}
