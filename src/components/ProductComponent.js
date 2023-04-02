import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  const {title, id, image, price, category} = product;
    return (    
    <div className='four wide column' key={id} id="product-component">
<Link to={`/product/${id}`}>
  <div className='ui link cards'>
    <div className='card'>
      <div className='ui image' id="item-container">
        <img src={image} alt={title} style={{ maxHeight: '320px', margin: '0 auto' }} />
      </div>
      <div className='content center aligned' id="card-description">
        <div className='ui tiny header'>{title}</div>
        <div className='meta price'>$ {price}</div>
        <div className='meta'>{category}</div>
      </div>
    </div>
  </div>
    </Link>
  </div>);
  })

  return <>{renderList}</>
}

export default ProductComponent;