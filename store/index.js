import { applyMiddleware, combineReducers, createStore } from "redux";
import BreadsReducer from "./reducers/breads.reducer";
import CategoryReduce from "./reducers/category.reducer";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/orders.reducer";
import AuthReducer from "./reducers/Auth.reducer";



const RootReducer = combineReducers({
    categories : CategoryReduce,
    breads:BreadsReducer,
    cart:CartReducer,
    order: OrderReducer,
    auth:AuthReducer,
    login:AuthReducer
})


export default createStore(RootReducer,applyMiddleware(thunk))