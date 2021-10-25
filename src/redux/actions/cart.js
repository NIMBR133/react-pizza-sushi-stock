export const setProductCart = (category, product, size) => ({
    type: 'SET_PRODUCT_CART',
    payload: {category, product: {...product, category, size}, size}
})

export const changeCountProduct = (category, index, size, isAdded) => ({
    type: 'CHANGE_COUNT_PRODUCT',
    payload: {category, index, size, isAdded}
})

export const removeProduct = (category, index, size) => ({
    type: 'REMOVE_PRODUCT',
    payload: {category, index, size}
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})