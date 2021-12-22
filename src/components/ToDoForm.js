import  {USER_INPUT, ADD_TODO}  from '../store/ActionTypes'
import { useSelector, useDispatch } from "react-redux";
function ToDoForm() {
    const todos = useSelector(state => state.todos);
    const userInput = useSelector(state => state.userInput);
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem ={
            id: Math.random().toString(),
            task: userInput,
        }
        dispatch({type: ADD_TODO, payload: newItem})
    }
    const addTodoHandler = (e) => {
        dispatch({type: USER_INPUT, payload: e.target.value})
    }
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { ADD_TODO, REMOVE, USER_INPUT } from '../store/ActionTypes';
// function ToDoForm() {
//     const todos = useSelector(state => state.todos);
//     const userInput = useSelector(state => state.userInput)
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let newItem = {
//             id: Math.random().toString(),
//             task: userInput,
//             completed: false
//         }
//         dispatch({type: ADD_TODO, payload: newItem})
//     }
//     const addTodoHandler = (e) => {
//         dispatch({ type: USER_INPUT, payload: e.target.value})
//     }
    // const remove = (id) => {
    //     dispatch({type: REMOVE,payload: id})//{type: REMOVE, payload: id}
    // }
    return (
        <>
            <h1>Список задач{todos.length}</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={userInput}
                    onChange={addTodoHandler}
                    placeholder="Введите текст"
                />
                <button type="submit">Сохранить</button>
            </form>
            {todos.map((todo) => {
                return  (
                    <div style={{cursor: 'pointer'}}
                        key={todo.id} 
                        id={todo._id}
                    >
                    <li style={{listStyle: 'none'}}>{todo.task}</li>
                    </div>
                )
            })}
        </>
    )
}
export default ToDoForm;