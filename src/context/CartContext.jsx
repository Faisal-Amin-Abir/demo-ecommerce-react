import { createContext, useState } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export default function CartProvider( { children } ) {

    const [ cartItems, setCartItems ] = useState( [] ) // id : 1, quantity : 8

    function addToCart(productId){
        const existing = cartItems.find( ( item ) => item.id ===   productId  );
        
        if(existing){
            const currQuantity = existing.quantity;
            const updatedCartItems = cartItems.map( (item) => 
                item.id === productId ? { id: productId, quantity: currQuantity + 1 } : item
             );
            setCartItems( updatedCartItems );
        }else{
            setCartItems( [ ...cartItems, { id: productId, quantity: 1 } ] );
        }
    }

    function getCartItemsWithProducts(){
        return cartItems.map( item => (
            {
                ...item,
                product: getProductById( item.id )
            }
        )).filter( item => item.product) ;
    }

    function removeFromCart( productId ){
        setCartItems(
                cartItems.filter( (item) => item.id !== productId )
        );
    }

    function updateQuantityValue(productId, productQuantity){
        if(productQuantity <= 0){
            removeFromCart( productId );
        }
        else{
            setCartItems(
                cartItems.map( (item) => item.id === productId ? { id: item.id, quantity: productQuantity} : item)
            );
        }
    }

    return ( <CartContext.Provider value={ {cartItems, addToCart, getCartItemsWithProducts, updateQuantityValue, removeFromCart } }> {children} </CartContext.Provider> ) ;
}