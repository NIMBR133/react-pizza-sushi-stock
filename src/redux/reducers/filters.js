const initialState = {
    sortBy: { name: 'По популярности', type: 'popular', id: 0 },
    filterIndex: {
        pizza: null,
        rolls: null,
        burgers: null, 
        salads: null
    },
    filterElements: {
        pizza: [
            'Мясные',
            'Вегетарианские',
            'С морепродуктами',
            'Без грибов',
            '4 сезона'],
        rolls: [
            'Классические',
            'Запечёные',
            'В темпуре'
        ],
        burgers: [
            'Классические',
            '0% сахара',
            'На чёрной булочке'
        ]
    },
    filterSelect: [
        { name: 'По популярности', type: 'popular' },
        { name: 'Сначала дешёвые', type: 'cheap' },
        { name: 'Сначала дорогие', type: 'rich' },
        { name: 'По весу', type: 'weight' },
        { name: 'По названию', type: 'names' }
    ]
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECT':
            return {
                ...state,
                sortBy: {...state.filterSelect[action.index], id: action.index}
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                filterIndex: {...state.filterIndex, [action.payload.product]: action.payload.index}
            }
        default:
            return state
    }
}

export default filters