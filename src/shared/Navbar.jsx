import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import LoginModal from '../components/LoginModal'
import { useState } from 'react'
import Cart from '../components/Cart'
import { getCartThunk } from '../redux/actions/products.action'
import { useDispatch } from 'react-redux'

function Navbar(){

    const dispatch = useDispatch()
    const [ loginBtn, setLoginBtn ] = useState( false )
    const [ cartModal, setCartModal ] = useState( false )
    
    const openCart = () => {
        setCartModal( !cartModal )
        dispatch( getCartThunk() )
    }

    return(
        <div className='navbar' >
            <div className="fixed">
                <nav>
                    <div className="title" >
                        <Link to='/' ><strong>e-commerce</strong> </Link>
                    </div>
                    <button
                        onClick={() => setLoginBtn( !loginBtn )} 
                        className="icon">
                        <i className="fa-regular fa-user"></i>
                    </button>
                    <button className="icon">
                        <i className="fa-regular fa-credit-card"></i>
                    </button>
                    <button 
                        onClick={ openCart }
                        className="icon"
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </nav>
                {
                    localStorage.length !== 0 && 
                    <Cart
                        cartModal={cartModal}
                        setCartModal={setCartModal}
                    />
                }
 
                <LoginModal 
                    loginBtn={ loginBtn } 
                    setLoginBtn={ setLoginBtn }
                />
            </div>
        </div>
    )
}

export default Navbar