import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryThunk, getProductsThunk, isDashOpen } from '../redux/actions/products.action';
import '../styles/dashboard.css'

function Dashboard({ products }){

    const state = useSelector( state => state )
    const dispatch  = useDispatch()

/*     const productsCategories = []
    const categories = () => {
        if( products !== undefined ){
            products.forEach( product  => {
                if(productsCategories.includes( product.category.name )){
                    return productsCategories
                }else{
                    productsCategories.push( product.category.name )
                }
            });
        }else{
            return productsCategories
        }
    } 
    categories() */

    const categories = () => {
        if( products !== undefined ){
            return products
        }
    } 
    const productsCategories = categories()


    return(
        <div className={ state.products.isDashOpen? 'filters-modal open': 'filters-modal' }>
            <button 
                onClick={() => dispatch( isDashOpen( false ))}
                className="close-btn" >
                <i className="fa-solid fa-xmark"></i>
            </button>
            <h5>Filters</h5>
            <div className="filters" >
                <div className="filter-drop-down" >
                    <div className="header" >
                        <span>Category</span>
                        <i className="down-arrow  fa-solid fa-angle-down"></i>
                    </div>
                    <div className="content" >
                        <ul className='category-filter' >
                            <li
                                onClick={() => {
                                    dispatch( getProductsThunk() )
                                    dispatch( isDashOpen(false) )
                                }}
                                key={0}
                            >All</li>
                            {
                                productsCategories?.map( category => (
                                    <li
                                        onClick={ () => {
                                            dispatch( filterCategoryThunk( category.id ) ) 
                                            dispatch( isDashOpen(false) )
                                        }}
                                        key={ category.id }
                                    >{ category.name }</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard