import React from 'react';
import '../style/style.css';

function Cart(props){

    let cart = props.cart;
    return (
        // Cart
        <section className={props.cartOpen === "" ? "hidden": props.cartOpen ? "cartOpen relative": "cartClose relative "}>
            <span className="absolute py-3 px-5 text-white -left-12 text-xl bg-custom cursor-pointer" onClick={props.handleCartClose}>x</span>
            <div className="py-12 flex items-center justify-center relative">
                <img src="/static/bag-icon.png" alt="cartBasket" className="h-10 w-10 object-cover"/>
                <h4 className="text-white ml-4 text-xl font-bold">Cart</h4>
                <div className="w-4 h-4 rounded-full bg-yellow-500 text-black absolute text-center text-xs bottom-12 left-52">{props.totalQuantity}</div>
            </div>
            <article className="px-6 h-vertical overflow-y-scroll scroll-bar">
                {
                    cart.map(c => (
                        <div key={c.product.id}>
                            <hr className="border-.5 border-black"></hr>
                            <div className="flex mb-8 justify-between my-4">
                                    <div  className="flex-10"> 
                                        <img src={c.product.imgSmall} alt={c.product.title} className="h-24 object-cover"/>
                                    </div>
                                    <div className="flex flex-col justify-center flex-70 p-2">
                                        <h4 className="text-white">{c.product.title}</h4>
                                        <h5 className="text-gray-500">Quantity: {c.quantity}</h5>
                                    </div>
                                    <div className="flex-10 text-center">
                                        <span><i className="fas fa-times cursor-pointer hover:text-white" id={c.product.id} onClick={props.removeItem}></i></span>
                                        <h4 className="my-2 text-yellow-300 text-lg">{c.product.currencyFormat +" " +c.product.price.toFixed(2)}</h4>
                                        <div className="flex justify-center">
                                            <button className={c.quantity > 1 ? "cursor-pointer bg-black w-6 text-white" : "w-6 bg-gray-700 cursor-auto"} id={c.product.id} onClick={props.reduceItem}>-</button>
                                            <button id={c.product.id} className="bg-black cursor-pointer w-6 text-white" onClick={(e) => props.handleAddCart(e, c.product)}>+</button>
                                        </div>
                                    </div>
                            </div>

                            
                        </div>
                    ))
                }
            <h4 className="text-white text-center">{cart.length ? "": "The cart is Empty"}</h4>   
            </article>
            <div className="fixed bg-custom w-custom bottom-0 z-10 p-4 shadow-custom">
                <div className="flex justify-between my-2">
                    <h5 className="uppercase text-gray-500">Subtotal</h5>
                    <h5 className="text-yellow-300 text-2xl">$ {cart.length ? props.total.toFixed(2): "0.00"}</h5>
                </div>   
                <button className="uppercase bg-black text-white w-full my-6 px-3 py-3 hover:bg-button" onClick={() => {cart.length ? alert(`subtotal: $ ${props.total.toFixed(2)}`) : alert(`No items in the cart`)}}>Checkout</button>     
            </div>
        </section>
    )
}

export default Cart;