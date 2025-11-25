import { createSlice, nanoid } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit';

interface Todo {
   id:string;
   text:string;
   category:string;
   targetDate?:string | undefined;
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
      prepare(text: string, date:string | undefined, category:string): { payload: Todo } {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            category: category,
            targetDate: date,
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
     updateTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string; category: string, newDate?: Date | undefined}>
    ) => {
      const { id, newText, newDate } = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
        todo.category = action.payload.category;
        todo.targetDate = newDate?.toDateString(); // store as string
      }
    },
     deleteTodo(state,action:PayloadAction<string>){
        state.list=state.list.filter((item)=>item.id!==action.payload)
     }

    }
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;