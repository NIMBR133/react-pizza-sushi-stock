const initialState = {
    items: {
        pizza: [],
        rolls: [],
        burgers: [],
        salads: []
    },
    isLoading: false
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: {...state.items, [action.payload.product]: action.payload.items}
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}

export default products