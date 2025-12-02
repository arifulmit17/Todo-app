import { useUserRole } from '@/hooks/useUserRole';
import React from 'react'

export default function ProfilePage() {
    const user=useUserRole().user;
  return (
    <div>
        {user ? <div>Welcome {user.name}</div> : <div>Please log in to view your profile.</div>}
    </div>
  )
}
