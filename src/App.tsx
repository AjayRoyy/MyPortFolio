import React, { lazy, Suspense, useEffect, useRef } from "react";
import "./App.sass";
import "./cursorStyle.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";
import { NavRoutes } from "./routes/routes";
import { AppContainer } from "./style-components/CommonStyled";
import { Nav } from "./components/Navbar";
import { useAppSelector } from "./redux/hooks";

const LazyComponents = (e: React.LazyExoticComponent<React.FC<{}>>) => {
  let LazyComp = e;
  return (
    <Suspense>
      <LazyComp />
    </Suspense>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: NavRoutes.map((e) => ({
      path: `/${e.pathname.split(" ").join("").toLocaleLowerCase()}`,
      element: LazyComponents(e.path),
      errorElement: <ErrorPage />,
    })),
  },
]);

const App: React.FC = (): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useAppSelector(
    (state: any) => state.eleref.value.headerRef
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const cursor = cursorRef.current;

    document.addEventListener("mousemove", (e) => {
      cursor?.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor?.classList.add("expand");

      setTimeout(() => {
        cursor?.classList.remove("expand");
      }, 500);
    });
  }, []);

  useEffect(() => {
    appRef.current!.onscroll = (e: any) => {
      if (Math.floor(e.target.scrollTop) > 98) {
        headerRef.style.transition = "2s linear";
        headerRef.style.background =
          "radial-gradient(ellipse at top, #1B2735 0%, #090A0F 100%)";
      } else {
        headerRef.style.background = "none";
      }
    };
  }, [headerRef]);

  return (
    <AppContainer ref={appRef} className="App">
      <div className="fixed top-0 left-0">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <RouterProvider router={router} />
      <div ref={cursorRef} className="cursor"></div>
    </AppContainer>
  );
};

export default App;
