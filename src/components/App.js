import React from "react";
import '../style/style.css';
import Products from "./Products";
import datas from "../data.json";
import Cart from "./Cart";
import Aside from "./Aside";
import {useState, useEffect} from "react";

function App(props){

    let [filterSize, setFilterSize] = useState([]);
    let [filterByPrice, setFilterByPrize] = useState("select");
    let [cartOpen, setCartOpen] = useState("");
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("carts")) || []);  

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(cart));
    }, [cart])
    
    //filter by price 
    const handleFilterByPrice = ({target}) => {
        console.log("testing");
       setFilterByPrize(target.value);
    }

    //filter by size
    const handleFilterBySize = ({target}) => {
        let {id} = target; 
        if(filterSize.includes(id)){
            setFilterSize(filterSize.filter(s => s !== id));
        }else {
            setFilterSize(filterSize.concat(id));
        }
    }

   //cart open
    const handleCartOpen = ({target}) => {
       setCartOpen(true);
    }

    //cart close
    const handleCartClose = () => {
       setCartOpen(false);
    }

    //get total
   const getTotal = () => {
        let newCart = [...cart]; 
        let total = newCart.reduce((acc, curr) => {
            acc += curr.product.price * curr.quantity;
            return acc;
        }, 0)
        return total;
    }

    //Add items to cart
    const handleAddCart = (e, addProduct) => {
       
        let newCart = [...cart];
        let {id} = e.target;
        if(!newCart.length){
            newCart.push({
                product: addProduct,
                quantity: 1
            }); 
        }else {
            let item = newCart.findIndex(c => c.product.id === Number(id));
            if(item === -1){
                newCart.push({
                    product: addProduct,
                    quantity: 1
                })
            }else {
               newCart[item].quantity += 1;   
            }
        }
        setCart(newCart);
        setCartOpen(true);
    }

    //reduce quantiity count
    const reduceItem = (event) => {
        let {id} = event.target;
        let newCart = [...cart];
        let item = newCart.findIndex(c => c.product.id === Number(id));
        newCart[item].quantity = newCart[item].quantity > 1 ? newCart[item].quantity -= 1 : newCart[item].quantity;
        setCart(newCart);
    }

    // remove product
    const removeItem = ({target}) => {
        let {id} = target;
        let newCart = [...cart];
        let item = newCart.findIndex(c => c.product.id === Number(id));
        newCart.splice(item, 1);
        setCart(newCart);
       
    }

    
    let totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <main className="relative px-64 pt-28 pb-20">
            <div className="w-16 h-16 bg-black fixed right-0 top-0 flex justify-center items-center cursor-pointer" onClick={handleCartOpen}>
                <img src="/static/bag-icon.png" alt="cart"/>
                <div className="w-4 h-4 rounded-full bg-yellow-500 text-black absolute text-center right-2 bottom-3 text-xs">{totalQuantity}</div>
            </div>
            {/* Sizes */}
            <section className="flex justify-between">
                < Aside products = {datas.products} handleFilterBySize={handleFilterBySize} filterSize={filterSize}/>
                <article className="flex-80">
                        < Products data = {datas.products} handleFilterByPrice = {handleFilterByPrice} handleAddCart = {handleAddCart} filterByPrice={filterByPrice} filterSize = {filterSize}/>
                </article>
                
            </section>
            {
            < Cart cart={cart} cartOpen={cartOpen} handleCartOpen = {handleCartOpen} handleCartClose = {handleCartClose} handleAddCart = {handleAddCart} reduceItem = {reduceItem} removeItem = {removeItem} totalQuantity={totalQuantity} total={getTotal()}/>
            }
            
        </main>
    )
}


export default App;