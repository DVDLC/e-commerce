import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import { setCategoiresThunk, getProductsThunk, isDashOpen, filterByNameThunk } from "../redux/actions/products.action"

import '../styles/home.css'


function Home() {

    const state = useSelector( state => state )
    const [ userInput, setUserInput ] = useState('')
    const dispatch = useDispatch()    

    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch( setCategoiresThunk() )
    }, [dispatch])

    const handleSubmit = event => {
        event.preventDefault()
        dispatch( filterByNameThunk( userInput ) )
    }

    const products = state?.products?.products?.data?.products

    return (

        <section className="main-container">
            <div className="search-box" >
                <form className="input" onSubmit={ e => handleSubmit(e) } >
                    <input 
                        type="text" 
                        placeholder="What are you looking for" 
                        value={ userInput }  
                        onChange={ e => setUserInput( e.target.value ) }     
                    />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button 
                    className="filter-btn" 
                    onClick={ () => dispatch( isDashOpen( true ) ) }
                >
                    <i className="fa-brands fa-galactic-republic"></i>
                    Filters
                </button>
            </div>
            <ProductCard products={ products }/>
        </section>
        
    )
}

export default Home