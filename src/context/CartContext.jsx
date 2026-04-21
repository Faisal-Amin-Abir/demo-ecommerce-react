import { createContext, useState } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export default function CartProvider( { children } ) {

    const [ cartItems, setCartItems ] = useState( [] ) // id : 1, quantity : 8

    function addToCart(productId){
        const existing = cartItems.find( ( item ) => item.id ===   productId  );
        
        if(existing){
            const currQuantity = existing.quantity;
            const updatedCartItems = cartItems.map( (item) => {
                return item.id === productId ? { ...item, quantity: currQuantity + 1 } : item
            } );
            setCartItems( updatedCartItems );
        }else{
            setCartItems( [ ...cartItems, { id: productId, quantity: 1 } ] );
        }
    }

    return ( <CartContext.Provider value={ {cartItems, addToCart } }> {children} </CartContext.Provider> ) ;
}