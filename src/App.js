import React , {useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import  Filter  from  './components/Filter';
import Backet from './components/Backet';
import store from './store';
import {Provider} from 'react-redux';

function App() {
    const [products , setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sort, setSort] = useState('');
    const [size, setSize] = useState('');
    const [cartItems, setCartItems] = useState([]);
    
    useEffect( () => {
          // const res =  fetch("http://localhost:8000/products").then(res=>res.json()).then(data=>setFilteredProducts(data));
          // const res2 =  fetch("http://localhost:8000/products").then(res=>res.json()).then(data=>setProducts(data));

          // const json =  res.json();
          // setProducts(json);
          // setFilteredProducts(json);
          // console.log("fdf",filteredProducts)
            if(localStorage.getItem('cartItems')){
              setCartItems(JSON.parse(localStorage.getItem('cartItems')))
            }

    },[])

    const handleChangeSort =(e) => {
                setSort(e.target.value);
                listProducts();
                // console.log("sort", sort)
    }
  
    const handleChangeSize=(e)=> {
      setSize(e.target.value);
      listProducts();
     }

    const listProducts= ()=>{

          if (sort !== ''){
                products.sort((a,b)=>(sort==='highest')? (a.price>b.price?1:-1) : (a.price<b.price?1:-1))
          }
          else{
                products.sort((a,b)=>(a.id<b.id?1:-1)); 
          }

        if (size !=='')
        {
            return setFilteredProducts(products.filter(a => a.availableSizes.indexOf(size)>=0))
        }
        // console.log('ss',products)

          return setFilteredProducts(products);
    }   

    const handleAddToCart = (e,product) => {
        
      let productAlreadyInCart =false;
      cartItems.forEach(item => {
        // console.log('id',item);
        if (item.product.id === product.id){
          productAlreadyInCart = true;
          item.count++;
          // console.log('checking',item)

        }
      });
      
      if (!productAlreadyInCart){  
        setCartItems([...cartItems,{product, count: 1}]);
        //  setCartItems([{...product, count: 1}]);

      }
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
      return cartItems;
    }


  // console.log('ch', !productAlreadyInCart);
   const  handleRemoveFromCart = (e,item) => {
    //  console.log("handleRemoveFromCart",item.product.id);
    //  console.log('handleRemoveFr',cartItems);
    
        const  cartItems = cartItems.filter(fil => fil.id !== item.product.id)
        localStorage.setItem('cartItems',cartItems)
        return cartItems
  }

  return (
      <Provider store={store}>
        <div className="App">
          <div className="row">
            <div className="col-md-8">
                <Filter  size={size}  sort={sort} handleChangeSort={handleChangeSort}  count={filteredProducts.length}
                          handleChangeSize={handleChangeSize}	/>
                <hr/>
                <Products  products={filteredProducts}  handleAddToCart={handleAddToCart} />
            </div>
            <div className="col-md-4">
                  <Backet cartItems={cartItems}  handleRemoveFromCart={handleRemoveFromCart}/>   
            </div>
          </div>
        </div>
      </Provider>  
  );
}

export default App;
