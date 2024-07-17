import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  let {id} = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(response => {
      setProduct(response.data);
    })
  }, [id]);

  return (
    <div>
      <h1>Details</h1>
      {
      product &&  <div>
          <img src={product.image} />
          Title: {product.title}
      </div> 
      }
    </div>
  )
}
