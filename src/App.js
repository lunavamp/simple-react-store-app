import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" exact element={<ProductListing/>} />
        <Route path="/product/:productId" exact element={<ProductDetails/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route>404 Not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
