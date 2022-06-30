import {createStore} from 'redux'

export const addTodoAction = (payload) => {
  return {
   type: "ADD_TODO",
   payload: payload
 }
}
export const deleteTodoAction = (payload) => {
  return {
   type: "DELETE_TODO",
   payload: payload
 }
}
const initialState ={
    todos:[],
}

const todoReducer = (state = initialState,action) => {
 switch(action.type ){
  case("ADD_TODO"):
    return {...state,todos:[...state.todos,action.payload]}
  case("DELETE_TODO"):
  return {...state,todos:[...state.todos.filter((e,i)=> i !=action.payload)]}
 }
 
 return state
}


export const store = createStore(
    todoReducer
);