import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import '../styles/Cart.css'


/* TODO: Arrgelar el total.. Todavia esta mal */

function Cart( {cartModal, setCartModal} ){
  
    const state = useSelector( state => state )
    const cart =  state?.products?.cart?.data?.cart?.products 
 

    return(
        <div className={ cartModal? "cart-modal open": "cart-modal" }>
            <div className="cart">
                <div className="minimalist-scrollbar">
                    <h4>Carrito de compras</h4>
                    <ul className="cart-products-list">
                        {
                            cart?.map( product => (
                                <li 
                                    key={ product.id }
                                >
                                    <div className="product-info">
                                        <div className="details">
                                            <span className="brand" >{ product.brand }</span>
                                            <Link to='#'>{ product.title }</Link>
                                            <div className="quantity">{ product.productsInCart.quantity }</div>
                                        </div>
                                        <div className="button-delete">
                                            <i className="fa-solid fa-trash-can"></i>     
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span className="label">Total: </span>
                                        <b>$ { product.price * product.productsInCart.quantity }</b>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="checkout-section">
                        <div className="total">
                            <span className="label" >Total:</span>
                            <b>$ 0</b>
                        </div>
                        <button 
                            onClick={ () => setCartModal( false ) }
                            className="buy-button" >
                            Checkout
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart