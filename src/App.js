import Btn1 from './components/Buttons/Btn1';
import Btn2 from './components/Buttons/Btn2';
import Btn3 from './components/Buttons/Btn3';
import Categories from './components/Home/Categories';
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
import ProductsList from './components/Products/ProductsList';
import Product from './components/Products/Product';
import Form from './components/Form/Form';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='App bg-milky font-manrope space-y-40'>
      <CartProvider>
        <Product itemId='3' />
        <Product itemId='1' />
      </CartProvider>
    </div>
  );
}

export default App;
