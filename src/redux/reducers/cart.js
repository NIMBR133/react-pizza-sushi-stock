const localStorageCart = JSON.parse(localStorage.getItem("cart"))

const initialState = localStorageCart || {
    items: {
        pizza: {},
        rolls: {},
        burgers: {},
        salads: {}
    },
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCT_CART': {
            const { product, category, size } = payload
            const itemsObj = {
                ...state.items,
                [category]: {
                    ...state.items[category],
                    [product.id]: state.items[category][product.id]
                        ? (
                            state.items[category][product.id].some(item => item.size === size)
                                ? state.items[category][product.id].map(item => (
                                    item.size === size
                                        ? { ...item, count: ++item.count }
                                        : { ...item }
                                ))
                                : [...state.items[category][product.id], { ...product, count: 1 }]
                        )
                        : [{ ...product, count: 1 }]
                }
            }
            return setLocalStorage(itemsObj, state)
        }

        case 'CHANGE_COUNT_PRODUCT': {
            const { category, index, size, isAdded } = payload
            const itemsObj = {
                ...state.items,
                [category]: {
                    ...state.items[category],
                    [index]: state.items[category][index].map(item => (
                        item.size === size
                            ? {
                                ...item, count: isAdded ? ++item.count
                                    : (item.count === 1 ? item.count : --item.count)
                            }
                            : { ...item }
                    ))
                }
            }
            return setLocalStorage(itemsObj, state)
        }

        case 'REMOVE_PRODUCT': {
            const { category, index, size } = payload
            const removeItem = state.items[category][index].find(item => (
                item.size === size
            ))
            const countCurrentRemoveItem = removeItem.count
            const priceCurrentRemoveItem = removeItem.price * countCurrentRemoveItem

            const itemsObj = {
                ...state,
                items: {
                    ...state.items,
                    [category]: {
                        ...state.items[category],
                        [index]: state.items[category][index].filter(item => (
                            item.size !== size
                        ))
                    }
                },
                totalCount: state.totalCount - countCurrentRemoveItem,
                totalPrice: state.totalPrice - priceCurrentRemoveItem
            }
            itemsObj.items[category][index].length === 0
                && delete itemsObj.items[category][index]
                
            localStorage.setItem("cart", JSON.stringify(itemsObj));
            return itemsObj
        }

        case 'CLEAR_CART': {
            const itemsObj = {
                ...state,
                items: {
                    ...state.items,
                    'pizza': {},
                    'rolls': {},
                    'burgers': {},
                    'salads': {}
                },
                totalPrice: 0,
                totalCount: 0
            }
            localStorage.clear()
            return itemsObj
        }

        default:
            return state
    }
}

const finalNewState = (obj, state) => {
    const allProducts = [
        ...Object.values(obj.pizza),
        ...Object.values(obj.rolls),
        ...Object.values(obj.burgers),
        ...Object.values(obj.salads)
    ].flat()
    const totalCount = allProducts.reduce((sum, current) => sum + current.count, 0)
    const totalPrice = allProducts.reduce((sum, current) => sum + current.price * current.count, 0)
    return {
        ...state,
        items: obj,
        totalCount,
        totalPrice
    }
}

const setLocalStorage = (itemsObj, state) => {
    const newState = finalNewState(itemsObj, state)
    localStorage.setItem("cart", JSON.stringify(newState));
    return newState
}

export default cart






// case 'REMOVE_PRODUCT': {
//     const { category, index, size } = payload

//     const itemsObj = {
//         ...state.items,
//         [category]: {
//             ...state.items[category],
//             [index]: state.items[category][index].filter(item => (
//                 item.size !== size
//             ))
//         }
//     }
//     itemsObj[category][index].length === 0
//         && delete itemsObj[category][index]
//     return setLocalStorage(itemsObj, state)
// }