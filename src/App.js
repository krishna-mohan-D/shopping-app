import React , {useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import  Filter  from  './components/Filter';
function App() {
    const [products , setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sort, setSort] = useState('');
    const [size, setSize] = useState('');
    useEffect( () => {
          const res =  fetch("http://localhost:8000/products").then(res=>res.json()).then(data=>setFilteredProducts(data));
          const res2 =  fetch("http://localhost:8000/products").then(res=>res.json()).then(data=>setProducts(data));

          // const json =  res.json();
          // setProducts(json);
          // setFilteredProducts(json);
          console.log("fdf",filteredProducts)


    },[])

    const handleChangeSort =(e) => {
                setSort(e.target.value);
                listProducts()
                // console.log("sort", sort)
    }
  
    const handleChangeSize=(e)=> {
      setSize(e.target.value);
      listProducts();
     }

    const listProducts= ()=>{

          if (sort !== ''){
                products.sort((a,b)=>(sort==='lowest')? (a.price<b.price?1:-1) : (a.price<b.price?-1:1))
          }
          else{
                products.sort((a,b)=>(a.id<b.id?1:-1)); 
          }

        if (size !=='')
        {
            return setFilteredProducts(products.filter(a => a.availableSizes.indexOf(size)>=0))
        }
        console.log('ss',products)

          return setFilteredProducts(products);
    }   

    
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8">
            <Filter  size={size}  sort={sort} handleChangeSort={handleChangeSort}  count={filteredProducts.length}
                   	 	handleChangeSize={handleChangeSize}	/>
            <hr/>
            <Products  products={filteredProducts}  handleAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
  );
}

export default App;
