import axios from "axios"

export const setProducts = (items, product) => ({
    type: 'SET_PRODUCTS',
    payload: {items, product}
})

export const setLoading = () => ({
    type: 'SET_LOADING'
})

export const fetchProducts = (product) => {
    return (dispatch) => {
        dispatch(setLoading())
        axios.get(`http://localhost:3001/${product}`)
            .then(response => dispatch(setProducts(response.data, product)))
            .then(() => dispatch(setLoading()))
    }
}