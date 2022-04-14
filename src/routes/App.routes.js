import { useSelector } from 'react-redux'
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom'

import{ 
    Home, 
    Store,
    Purchases
} from '../pages'

import{ 
    Loader, 
    Dashboard,
    Navbar,
    Footer
} from '../shared/index'



function AppRoutes(){

    const state = useSelector( state => state )

    return(
        <HashRouter>
            { state.products.isLoading&& <Loader />}
            <Navbar/>
            <Dashboard products={ state?.products?.categories?.data?.categories  } />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={ <Store /> } />
                <Route path="/purchases" element={ <Purchases /> }/>
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default AppRoutes