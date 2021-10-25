import axios from "axios"

export const setProducts = (items, product) => ({
    type: 'SET_PRODUCTS',
    payload: {items, product}
})

export const setLoading = (boolean) => ({
    type: 'SET_LOADING',
    payload: boolean
})

export const fetchProducts = (product) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        axios.get(`/${product}`)
            .then(response => dispatch(setProducts(response.data, product)))
            .then(() => dispatch(setLoading(false)))
    }
}