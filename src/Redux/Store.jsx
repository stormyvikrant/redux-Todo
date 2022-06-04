import {legacy_createStore as createStore} from "redux"
import {counterReducer} from "./Reducer";

export const store = createStore(counterReducer,{todos:[] })
