import  { createStore } from 'redux'
export const ADD_TODO = "ADD_TODO"
export const USER_INPUT = "USER_INPUT"

const init = {
    todos: [],
    userInput :'',
}

export const todoReducer = (state = init, action) => {
    if(action.type === ADD_TODO) {
        return {
            todos: [...state.todos, action.payload],
            userInput:"",
        }
    }
    if(action.type === USER_INPUT) {
        return {
            ...state,
            userInput: action.payload,
        }
    }
    return state;
}
const store = createStore(todoReducer)
export default store;


// import { createStore } from 'redux'
// import { ADD_TODO } from './ActionTypes'
// import { REMOVE } from './ActionTypes'
// import { USER_INPUT } from './ActionTypes'

// const init = {
//     todos: [],
//     userInput: '',
// }

// export const todoReducer = (state = init, action) => {
//     if(action.type === ADD_TODO) {
//         return {
//             todos: [...state.todos, action.payload ],
//             userInput: '',
//         }
//     }
//     if(action.type === USER_INPUT) {
//         return {
//             ...state,
//             userInput: action.payload
//         }
//     }
//     if(action.type === REMOVE) {
//         return {
//             ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
//         }
//     }
//     return state;
// }
// const store = createStore(todoReducer)
// export default store;