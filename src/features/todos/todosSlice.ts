import { createSlice, nanoid } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit';

interface Todo {
   id:string;
   text:string;
   completed:boolean;
}

export type todoState={
    list:Todo[]
}

const initialState: todoState={
   list:[],
}

export const todosSlice= createSlice({
    name:"todos",
    initialState,
    reducers:{
      addTodo: {
      reducer(state, action:PayloadAction<Todo>) {
        state.list.push(action.payload);
      },
      prepare(text: string): { payload: Todo } {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
     toggleTodo(state,action:PayloadAction<string>){
        const todo=state.list.find((item)=>item.id===action.payload)
        if(todo){
            todo.completed=!todo.completed
        }
     },
     deleteTodo(state,action:PayloadAction<string>){
        state.list=state.list.filter((item)=>item.id!==action.payload)
     }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;