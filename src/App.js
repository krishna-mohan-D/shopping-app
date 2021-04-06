import React , {useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
function App() {
 const [products , setProducts] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
 
 useEffect(async () => {
      const res = await fetch("http://localhost:8000/products");
       
      const json = await res.json();
      setProducts(json);
      setFilteredProducts(json);
       console.log("fdf",filteredProducts)


 },)
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8">
            <Products  products={filteredProducts} handleAddToCart={handleAddToCart}/>
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
  );
}

export default App;
