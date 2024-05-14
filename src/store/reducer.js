import { combineReducers } from "redux"
import todolistReducer from "./todolist.reducer"
import counterReducer from "./counter.reducer"
import productsReducer from "./products.reducer"
import countriesReducer from "./countries.reducer"

const reducer = combineReducers({todolistReducer,counterReducer,productsReducer,countriesReducer})
export default reducer