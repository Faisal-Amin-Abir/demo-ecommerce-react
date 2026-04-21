import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails(){

    const { id } = useParams();
    const [ product, setProduct ] = useState(null);
    const navigate = useNavigate();

    const { cartItems, addToCart } = useContext( CartContext );
    

    useEffect( () => {
        const foundProduct = getProductById( id );

        if( ! foundProduct ){
            navigate("/");
            return;
        }

        setProduct(foundProduct);

    }, [id] );
    

    if( ! product ) {
        return <p>Loading...</p>
    }

    const productInCart = cartItems.find((item) => item.id === product.id );
    const productQuantity = productInCart ? `(${productInCart.quantity})` : "";

    return (
        <div className = "page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">${product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn  btn-primary" onClick={ () => addToCart( product.id ) } >Add to Cart {productQuantity} </button>
                    </div>
                </div>
            </div>
        </div>
    );

}