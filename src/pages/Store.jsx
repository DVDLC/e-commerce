import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductByID from "../components/ProductByID"
import History from "../components/History"
import { getProductByIDThunk } from "../redux/actions/products.action"
import ProductCard from "../components/ProductCard"

function Store() {

    const { id } = useParams(),
        state = useSelector(state => state),
        dispatch = useDispatch(),
        productSelected = state?.products?.productByID?.data?.product,
        categories = state?.products?.products?.data?.products

    const [suggestedCategory, setSuggestedCategory] = useState([])

    useEffect(() => {
        dispatch(getProductByIDThunk(id))

        const suggestedFunc = () => {
            if (categories !== undefined) {
                setSuggestedCategory(
                    categories?.filter(category =>
                        category?.category?.name === productSelected?.category
                    )
                )
            }
        }
        suggestedFunc()
    }, [dispatch, categories, id, productSelected?.category])

    const verifyUnde = () => {
        if (productSelected === undefined) {
            return {}
        } else {
            return productSelected
        }
    }

    return (
        <div style={{ padding: '1em 4em 2em 4em' }} >
            <History productTitle={verifyUnde()} />
            <ProductByID productSelected={verifyUnde()} />
            <div className="suggestions">
                <strong style={{ color: '#f85555'}} >
                    Discover similar items
                </strong>
                <ProductCard products={ suggestedCategory }/>
            </div>
        </div>
    )
}

export default Store
