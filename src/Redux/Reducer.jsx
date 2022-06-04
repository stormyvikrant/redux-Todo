import { ADD_TODO} from "./Action";

const init={todos:[]}
export const counterReducer = (store=init,{type , payload})=>{
    switch(type){
        case ADD_TODO:
         return { ...store, todos: [...store.todos, payload] };
        default: return store
    }
    
}