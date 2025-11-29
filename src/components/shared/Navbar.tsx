import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export function Navbar() {
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
    to="/tasks"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Tasks
  </Link>
  <Link
    to="/login"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Login
  </Link>
  <Link
    to="/register"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Register
  </Link>
</NavigationMenu>

    </div>
  );
}
