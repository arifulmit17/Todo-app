import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

export function Navbar() {
  return (
    <NavigationMenu>
        <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to="/">Home</Link>
        
      </NavigationMenuLink>
    </NavigationMenuItem>
        <NavigationMenuItem>
      <NavigationMenuLink asChild>
        
        <Link to="/tasks">Tasks</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenu>
    
  )
}