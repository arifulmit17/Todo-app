import { Navigate } from "react-router";
import { useUserRole } from "@/hooks/useUserRole";

interface AdminRouteProps {
  children: React.ReactNode;
}

export function AdminRoute({ children }: AdminRouteProps) {
  const { role } = useUserRole();

  // No user → go to login
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // Not admin → redirect
  if (role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  // Allowed
  return children;
}
