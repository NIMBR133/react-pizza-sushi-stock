import React from 'react';

import './CartItem.scss'

const CartItem = ( {product, onClickChangeCountProduct, onClickRemoveProduct} ) => {
    return (
        <div className='cart-product'>
            <div className='cart-product__img-text'>
                <img className='cart-product__img' src={product.img} alt='' />
                <div>
                    <div className='cart-product__title'>{product.name}</div>
                    {
                        product.size !== 'undefined'
                        && <div className='cart-product__descr'>Размер: <span>{product.size}</span></div>
                    }
                    {
                        product.weight 
                        && <div className='cart-product__descr'>Вес: <span>{product.weight} г</span></div>
                    }
                </div>
            </div>
            <div className='cart-product__price'><span>{product.price}</span> ₽</div>
            <div className='cart-product__counter'>
                <span className={`icon-cirlce icon-cirlce_red ${product.count === 1 && 'icon-cirlce_disabled'}`}
                     onClick={() => onClickChangeCountProduct(product.category, product.id, product.size, false)}>-
                </span>
                <div>{product.count}</div>
                <span className='icon-cirlce icon-cirlce_green'
                    onClick={() => onClickChangeCountProduct(product.category, product.id, product.size, true)}>+
                </span>
            </div>
            <div className='cart-product__price-all'><span>{product.price * product.count}</span> ₽</div>
            <div className='cart-product__delete'>
                <span className='icon-cirlce icon-cirlce_gray'
                    onClick={() => onClickRemoveProduct(product.category, product.id, product.size)}>×
                </span>
            </div>
        </div>
    )
}

export default React.memo(CartItem)