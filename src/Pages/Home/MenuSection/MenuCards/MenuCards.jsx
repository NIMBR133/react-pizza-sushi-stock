import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProductCart } from '../../../../redux/actions/cart';
import { fetchProducts, setLoading } from '../../../../redux/actions/products';

import MenuCard from '../MenuCard/MenuCard';
import Loading from './../../../../Components/Loading/Loading';

const MenuCards = ({ categoryProduct, sizeProduct }) => {
    const dispatch = useDispatch()
    const itemsProducts = useSelector(state => state.products.items[categoryProduct]) // Продукты из категории
    const filterIndex = useSelector(state => state.filters.filterIndex[categoryProduct]) // Фильтр в категории
    const selectType = useSelector(state => state.filters.sortBy.type) // Фильтр селект (общий)
    const isLoading = useSelector(state => state.products.isLoading)
    let productsOfCart = useSelector(state => state.cart.items[categoryProduct])

    React.useEffect(() => {
        if (!itemsProducts.length) {
            dispatch(fetchProducts(categoryProduct))
        }
    }, [])

    let itemsProductsFilter = itemsProducts

    if (selectType === 'popular') {
        itemsProductsFilter = itemsProducts.sort((a, b) => b.raiting - a.raiting)
    } else if (selectType === 'cheap') {
        itemsProductsFilter = itemsProducts.sort((a, b) => (a.price - b.price || a.price[0] - b.price[0]))
    } else if (selectType === 'rich') {
        itemsProductsFilter = itemsProducts.sort((a, b) => (b.price - a.price || b.price[0] - a.price[0]))
    } else if (selectType === 'names') {
        itemsProductsFilter = itemsProducts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)
    } else if (selectType === 'weight') {
        itemsProductsFilter = itemsProducts.sort((a, b) => a.weight - b.weight || a.weight[0] - b.weight[0])
    }

    if (filterIndex !== null) {
        itemsProductsFilter = itemsProducts.filter(item => item.filterIndex.includes(filterIndex))
    }

    const addToCart = useMemo(() => (item, size) => {
        dispatch(setProductCart(categoryProduct, item, size))
    }, []);

    return (
        !isLoading
            ? 
            <><div className="menu-section__cards">
                {
                    itemsProductsFilter && itemsProductsFilter.map(item => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            sizeProduct={sizeProduct} 
                            addToCart={addToCart}
                            countAdded={productsOfCart[item.id] && productsOfCart[item.id].reduce((a, b) => a + b.count, 0)} />
                    ))
                }
            </div></>
            : <Loading />
    )
}

export default MenuCards