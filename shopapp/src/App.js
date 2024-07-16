import './App.css';
import { Router, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartComponent from './components/CartComponent'
import Details from './components/Details'
import ProductForm from './components/ProductForm'
import Default from './components/Default'

function App() {
  return (
    <div className='container'>
      <Router>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />

      </Router>
    </div>
  );
}

export default App;
