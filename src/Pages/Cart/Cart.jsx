import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.scss'
import { changeCountProduct, removeProduct, clearCart } from '../../redux/actions/cart'

import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import cartEmty from './../../img/cart-empty.svg'
import ButtonCart from './ButtonCart/ButtonCart';


const Cart = () => {
    const dispatch = useDispatch()
    let {items, totalPrice, totalCount} = useSelector((state) => state.cart)
    
    items = [
        ...Object.values(items.pizza),
        ...Object.values(items.rolls),
        ...Object.values(items.burgers),
        ...Object.values(items.salads)
    ].flat()
    
    const onClickChangeCountProduct = useMemo(() => (category, index, size, isAdded) => {
        dispatch(changeCountProduct(category, index, size, isAdded))
    }, [])
    
    const onClickRemoveProduct = useMemo(() => (category, index, size) => {
        if (window.confirm('Удалить из корзины?'))
            dispatch(removeProduct(category, index, size))
    }, [])

    const onClickClearCart = () => {
        if (window.confirm('Очистить корзину?'))
            dispatch(clearCart())
    }
    return (
        <div className='cart'>
            <div className='container container_cart'>
                {
                    totalCount
                        ? <>
                            <h2 className='title'>В вашей корзине</h2>
                            <div className='cart__products'>
                                {
                                    items.map((product, id) => (
                                        <CartItem
                                            key={`${product}_${id}`}
                                            product={product}
                                            onClickChangeCountProduct={onClickChangeCountProduct}
                                            onClickRemoveProduct={onClickRemoveProduct} />
                                    ))
                                }
                            </div>
                            <CartTotal 
                                totalCount={totalCount} 
                                totalPrice={totalPrice} 
                                onClickClearCart={onClickClearCart} />
                        </>
                        : <div className='cart__empty'>
                            <img src={cartEmty} alt="" />
                            <h2>Пока пусто! Добавьте что-нибудь из нашего меню 😋</h2>
                            <ButtonCart classes={'btn-cart_back'}>&#11178; Вернуться в меню</ButtonCart>
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart