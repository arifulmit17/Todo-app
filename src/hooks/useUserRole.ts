import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export function useUserRole() {
  const user = useSelector((state: RootState) => state.user.user);
  const role = user?.role || null;

  return {
    user,
    role,
    isAdmin: role === "admin",
    isUser: role === "user",
    isManager: role === "manager",
    isGuest: !role,   // not logged in
  };
}
