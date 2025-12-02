import {
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { logout } from "@/features/user/userSlice";
import { useUserRole } from "@/hooks/useUserRole";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  const user=useUserRole().user;
   const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
     dispatch(
      logout())
    navigate("/login");
  };

  return (
    <div className="flex gap-5 justify-center">
      <NavigationMenu className="flex gap-5">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard/tasks"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Tasks
        </Link>

        {!user && <Link
          to="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>}

        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </Link>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </NavigationMenu>
    </div>
  );
}
