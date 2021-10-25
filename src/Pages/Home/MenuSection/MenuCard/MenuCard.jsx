import './MenuCard.scss'
import React, { useState } from 'react';

const MenuCard = ({ item, sizeProduct, addToCart, countAdded }) => {
    
    const [size, setSize] = useState(0)
    const clickSize = (i) => {
        setSize(i)
    }
    
    const { price, weight } = Array.isArray(item.price)
        ? { price: item.price[size], weight: item.weight ? item.weight[size] : null }
        : { price: item.price, weight: item.weight ? item.weight : null }

    return (
        <div className="card">
            <div>
                <img src={item.img} alt="" className="card__img" />
                <h3 className="card__title">{item.name}</h3>
                <div className="card__descr"><span>Состав: </span>{item.descr}</div>
            </div>
            <div>
                {
                    sizeProduct.length !== 0 &&
                    <ul className="size-list">
                        <div
                            className="size-list__animation"
                            style={{
                                width: `${100 / sizeProduct.length}%`,
                                transform: `translateX(${size * 100}%)`
                            }}></div>
                        {
                            sizeProduct.map((item, i) => (
                                <li key={`${item}_${i}`}
                                    className='size-list__item'
                                    style={{ width: `${100 / sizeProduct.length}%` }}
                                    onClick={() => clickSize(i)}>{item}</li>
                            ))
                        }
                    </ul>
                }
                <div className="card__bottom">
                    <div>
                        <div className="card__price">{price} ₽</div>
                        <div className="card__weight">{weight} г</div>
                    </div>
                    <button className="button button_buy" onClick={() => addToCart({ ...item, price, weight }, `${sizeProduct[size]}`)}>
                        {
                            countAdded
                                ? <>Добавить <span>{countAdded}</span></>
                                : <>В корзину</>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MenuCard)