import type { RootState } from '@/app/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const user = useSelector((state: RootState) => state.user.user);
    console.log(user);
  return (
    <div>Dashboard</div>
  )
}
