import { Link } from 'react-router-dom';

import './ButtonCart.scss'

const ButtonCart = ({ classes, children}) => {
    return (
        <Link to='/' className={`btn-cart ${classes}`}>
            {children}
        </Link>
    )
}

export default ButtonCart