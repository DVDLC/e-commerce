import '../styles/history.css'
import { Link } from 'react-router-dom'

function History({ productTitle }){

    return(
        <div className="history">
            <Link to='/'>Home</Link>
            <div className="separator"></div>
            <b>{ productTitle.title }</b>
        </div>
    )
}

export default History