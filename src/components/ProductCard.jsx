import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

export default function ProductCard( {product} ){

    const { addToCart, cartItems } = useContext( CartContext );

    const productInCart = cartItems.find((item) => item.id === product.id );

    const productQuantity = productInCart ? `(${productInCart.quantity})` : "";


    return (
        <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-card-image" />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">${product.price}</p>
            </div>
            <div className="product-card-actions">
                <Link className="btn btn-secondary" to={`products/${product.id}`}>View Details</Link>
                <button className="btn btn-primary" onClick={ () => addToCart( product.id ) } >Add to cart {productQuantity} </button>
            </div>
        </div>
    );
}