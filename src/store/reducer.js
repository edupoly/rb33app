import { combineReducers } from "redux"
import todolistReducer from "./todolist.reducer"
import counterReducer from "./counter.reducer"
import productsReducer from "./products.reducer"

const reducer = combineReducers({todolistReducer,counterReducer,productsReducer})
export default reducer