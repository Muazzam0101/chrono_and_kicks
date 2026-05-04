import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* Dashboard has its own sidebar layout in the design, but we can put it under Layout or separately. 
            The provided Dashboard HTML didn't have the main top navbar, but for consistency we'll render it under Layout. 
            Wait, the HTML for Dashboard has its own full screen layout.
            Let's keep it under a separate route without the global Layout. */}
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
