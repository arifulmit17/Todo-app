import type { RootState } from '@/app/store';
import { useUserRole } from '@/hooks/useUserRole';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
    
    const user=useUserRole().user;
    const role=useUserRole().role;
    console.log("Dashboard role:",user);
    console.log("Dashboard role:",role);
    
  return (
    <div>Dashboard</div>
  )
}
