export const setSelect = (index) => ({
    type: 'SET_SELECT',
    index: index
})

export const setFilter = (index, product) => ({
    type: 'SET_CATEGORY',
    payload: {index, product}
})