import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import Details from './components/Details'
import ProductForm from './components/ProductForm'
import Default from './components/Default'
import NavbarComponent from './components/NavbarComponent';
import { lazy, Suspense } from 'react';

const CartComponent = lazy(() => import('./components/CartComponent'));

function App() {
  return (
    <div className='container'>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart....</h1>}>
              <CartComponent />
          </Suspense>
        } />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
