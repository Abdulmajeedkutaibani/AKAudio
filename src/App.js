import Navbar from './components/Navbar/Navbar';
import Footer from './components/Shared/Footer';
import ProductsListPage from './components/Pages/ProductsListPage';
import Product from './components/Pages/Product';
import { CartProvider } from 'react-use-cart';
import CheckoutPage from './components/Pages/CheckoutPage';
import HomePage from './components/Pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Shared/Menu';

function App() {
  const showCartShadow = () => {
    const cartContainer = document.querySelector('.cart-container');
    const cartShadow = document.querySelector('.cart-shadow');
    const menu = document.querySelector('.menu');
    cartShadow.classList.add('hidden');
    menu.classList.add('hidden');

    if (!cartContainer.classList.contains('hidden')) {
      cartContainer.classList.add('hidden');
    }
  };
  return (
    <Router>
      <div className='App bg-milky font-manrope overflow-hidden relative '>
        <div
          className='cart-shadow hidden w-full h-full  bg-blacky opacity-30 absolute z-30'
          onClick={showCartShadow}
        ></div>
        <CartProvider>
          <Navbar />

          <Menu />
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
