import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import filters from './reducers/filters';
import products from './reducers/products';
import cart from './reducers/cart';

const store = createStore(combineReducers({
    filters,
    products,
    cart
}),  compose(applyMiddleware(thunk)))

export default store