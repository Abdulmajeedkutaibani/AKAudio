import Btn1 from './components/Buttons/Btn1';
import Btn2 from './components/Buttons/Btn2';
import Btn3 from './components/Buttons/Btn3';
import Categories from './components/Shared/Categories';
import Hero from './components/Home/Hero';
import HomeEarphones from './components/Home/HomeEarphones';
import HomeSpeaker1 from './components/Home/HomeSpeaker1';
import HomeSpeaker2 from './components/Home/HomeSpeaker2';
import BestGear from './components/Shared/BestGear';
import Navbar from './components/Navbar/Navbar';
import ProductBrief from './components/Products/ProductBrief';
import ProductBriefWhite from './components/Products/ProductBriefWhite';
import heroImage from './photoes/heroImage.png';
import Footer from './components/Shared/Footer';
import ProductsListPage from './components/Products/ProductsListPage';
import Product from './components/Products/Product';
import Form from './components/Form/Form';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Cart/Cart';
import Summary from './components/Form/Summary';
import CheckoutPage from './components/Pages/CheckoutPage';
import HomePage from './components/Pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <div className='App bg-milky font-manrope'>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/headphones'>
              <ProductsListPage category='headphones' />
            </Route>
            <Route path='/speakers'>
              <ProductsListPage category='speakers' />
            </Route>
            <Route path='/earphones'>
              <ProductsListPage category='earphones' />
            </Route>
            <Route path='/yx1-earphones'>
              <Product itemId='0' />
            </Route>
            <Route path='/xx59-headphones'>
              <Product itemId='1' />
            </Route>
            <Route path='/xx99-mark-one-headphones'>
              <Product itemId='2' />
            </Route>
            <Route path='/xx99-mark-two-headphones'>
              <Product itemId='3' />
            </Route>
            <Route path='/zx7-speaker'>
              <Product itemId='4' />
            </Route>
            <Route path='/zx9-speaker'>
              <Product itemId='5' />
            </Route>
            <Route path='/checkout'>
              <CheckoutPage />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
