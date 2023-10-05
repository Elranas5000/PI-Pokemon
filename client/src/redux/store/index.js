import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk" //para trabajar asincronia
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "../reducer"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))