import React,{useEffect} from 'react'
import util from  '../util'
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions'
function Products(props) {
    useEffect(()=> {
        props.fetchProducts()  
    },[])
    const productItems = props.products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="thumbnail text-center">
            <a
              href={`#${product.id}`}
              onClick={(e) => props.handleAddToCart(e, product)}
            >
              <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
              <p>{product.title}</p>
            </a>
            <b>{util.formatCurrency(product.price)}</b> 
             <button
              className="btn btn-primary"
              onClick={(e) => props.handleAddToCart(e, product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))      

    return (
        <div>
         {productItems}  
        </div>
    )
}

const mapStateToProps = state => ({products: state.products.items});

export default connect(mapStateToProps , {fetchProducts})(Products);