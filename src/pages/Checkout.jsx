import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout(){

    const { getCartItemsWithProducts, updateQuantityValue } = useContext( CartContext );
    
    const cartItems = getCartItemsWithProducts();

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">CheckOut</h1>
                <div className="checkout-container">
                    <div className="checkout-items">
                        <h2 className="checkout-section-title">Order Summary</h2>
                        { cartItems.map( ( item ) => 
                            <div className="checkout-item">
                                <img 
                                    src={item.product.image} 
                                    alt={item.product.name} 
                                    className="checkout-item-image"
                                />
                                <div className="checkout-item-details">
                                    <h3 className="checkout-item-name">{item.product.name}</h3>
                                    <p className="checkout-item-price">${item.product.price} each</p>
                                </div>
                                <div className="checkout-item-controls">
                                    <div className="quantity-controls">
                                        <button className="quantity-btn" onClick={ () => updateQuantityValue( item.id, item.quantity-1 ) } >-</button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button className="quantity-btn" onClick={ () => updateQuantityValue( item.id, item.quantity+1 ) }>+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}