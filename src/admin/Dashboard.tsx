import type { RootState } from '@/app/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const todos = useSelector((state: RootState) => state.todos.list);
    console.log(todos.length);
  return (
    <div>Dashboard</div>
  )
}
