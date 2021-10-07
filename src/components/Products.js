import React from "react";
import OrderBy from './OrderBy';

function Products(props) {
   
    //get all products
   const getAllProducts = (order, sizes, products) => {
       let allProducts = [...products];
      
       if(sizes.length){
            allProducts = allProducts.filter(p => {
                for(const size of sizes){
                    if(p.availableSizes.includes(size)){
                        return true;
                    }
                }
                return false;
            });
            console.log(allProducts, "allProducts");
       }
       if(order === "high"){
            allProducts = allProducts.sort((a, b) => b.price - a.price);
        }else if(order === "low"){
            allProducts = allProducts.sort((a, b) => a.price - b.price);
        }else {
            allProducts = allProducts.sort((a, b) => a.id - b.id);
    } 
        return allProducts;
    }

        let allProducts = getAllProducts(props.filterByPrice, props.filterSize, props.data);
        return (
            <> 
            {/* sorting (Highest to lowest) */}
                < OrderBy allProducts = {allProducts} filterByPrize = {props.filterByPrize} handleFilterByPrice={props.handleFilterByPrice}/>
                <div className="flex flex-wrap mt-4">
                    {
                        allProducts.map((product, i)  => (
                            <div className="relative flex-25 border-2 border-gray-100  mb-4 p-2" key={product.id}>
                                <div className="min-h-custom">
                                    <img className="object-contain w-full h-full" src={product.imgBig} alt={product.title}/>
                                </div>
                                <h4 className="text-center my-2 text-lg">{product.title}</h4>
                                <div className="flex justify-center my-3">
                                    <hr className="w-6 h-1 bg-yellow-400"></hr>
                                </div>

                               <h5 className="text-center mb-4">{product.currencyFormat}<span className="ml-2 text-3xl font-bold">{String(product.price).split(".")[0]}<span className="text-lg font-normal">.{!String(product.price).split(".")[1] ? "00" : String(product.price).split(".")[1].length === 2 ? String(product.price).split(".")[1] : String(product.price).split(".")[1]+"0"}</span></span></h5>

                                <button className="block text-center bg-gray-900 w-full py-3 font-bold text-white hover:bg-yellow-400" id={product.id} onClick={(e) => {props.handleAddCart(e, product)}}>Add to Cart</button>

                                <span className={product.isFreeShipping ? "bg-black text-white p-1 text-xs absolute right-2 top-3": ""}>{product.isFreeShipping ? "Free Shipping": ""}</span>
                            </div>
                        ))
                    }
                </div>
            </>
           
        )
    }


export default Products;