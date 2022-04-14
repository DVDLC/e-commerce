import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCartThunk } from '../redux/actions/products.action'
import '../styles/productByID.css'

function ProductByID({ productSelected }){

    const [ quantity, setQuantity ] = useState(1)
    const dispatch = useDispatch()

    const increse = () => {
        if( quantity > 0 && quantity < 5 ){
            setQuantity( quantity + 1 )
        }
    }

    const decrese = () => {
        if( quantity > 1 && quantity <= 5 ){
            setQuantity( quantity - 1 )
        }
    }
    
    const AddToCart = ( id, quantity ) => {
        const productToCart = ({
            id,
            quantity
        })
        dispatch( addProductToCartThunk( productToCart ) )
    }

    return(
        <div className="product-info-flex">
            <div className="col">
                <div className='images-gallery' >
                    <div className="gallery">
                        <div className='button-gallery left'>
                            <button>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </div>
                        <div className='button-gallery right'>
                            <button>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                        <ul className='images-list' >
                            {
                                productSelected?.productImgs?.map( image => (
                                    <li key={image}>
                                        <img src={ image } alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="product-info">
                    <div className="brand"></div>
                    <h2>{ productSelected?.title }</h2>
                    <div className="product-data">
                        <div className="product-options">
                            <div className="flex">
                                <div className="price">
                                    <span className='label'>Price</span>
                                    <span className="amount">$ { productSelected.price }</span>
                                </div>
                                <div className="quantity">
                                    <span className='label'>Quantity</span>
                                    <div className="flex">
                                        <button
                                            onClick={ () => decrese() }
                                        >-</button>
                                        <div className="value">{ quantity }</div>
                                        <button
                                            onClick={ () => increse() }
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    AddToCart( productSelected.id, quantity)
                                    setQuantity( 1 )
                                }}
                                className='add-cart-button'
                            >Add to cart</button>
                        </div>
                        <p>{ productSelected.description }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductByID