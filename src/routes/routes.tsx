import { lazy } from "react";
import Logo from "../Images/Ak Logo.png";

interface LinkTypes {
  path: React.LazyExoticComponent<React.FC<{}>>;
  pathname: string;
  Logo?: string;
}

export const NavRoutes: LinkTypes[] = [
  {
    path: lazy(() => import("../pages/Home")),
    pathname: "/",
    Logo,
  },
  {
    path: lazy(() => import("../pages/About")),
    pathname: "About Me",
  },
  {
    path: lazy(() => import("../pages/Contributions")),
    pathname: "Contributions",
  },
];
