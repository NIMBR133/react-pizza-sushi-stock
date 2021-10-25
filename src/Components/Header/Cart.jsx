import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const totalCount = useSelector(state => state.cart.totalCount)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <Link to='/cart' className="header__cart">
            <div className='header__cart-price'>{totalPrice} ₽</div>
            <props.icon />
            <span>{totalCount}</span>
        </Link>
    )
}

export default Cart