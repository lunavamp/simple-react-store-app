import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/productActions";

const Cart = ({ products, addToCart, removeFromCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const getTotalPrice = () => {
    return products.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };
  

  return (
    <div className="ui container segment"  style={{marginTop: '130px'}}>
    <h2>Cart</h2>
    <div>
        {products.map((item) => (
          <div key={item.id} className="ui middle aligned divided list">
            <div className="ui segment item">
                <div className="right floated content">
                    <button className="ui orange button" onClick={() => handleAddToCart(item)}>Add</button>
                    <button className="ui button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
                <div className="content">{item.title}  - Quantity: {item.quantity} - Price: {item.price * item.quantity}$</div>
            </div>
          </div>
        ))}
    </div>
    <div className="ui fluid container segment" style={{height: '100px'}}>
    <h3 style={{textAlign: 'right'}}>Total Price: ${getTotalPrice()}</h3>
    <button className="ui right floated black button">Checkout</button>
    <Link to='/'>
    <button className="ui left floated black button">Continue Shopping</button>
    </Link>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
