import React, { useState, Suspense, useEffect, useRef } from "react";
import "./App.sass";
import "./cursorStyle.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";
import { NavRoutes } from "./routes/routes";
import { AppContainer } from "./style-components/CommonStyled";
import { Nav } from "./components/Navbar";
import { useAppSelector } from "./redux/hooks";
import DropdownNav from "./components/DropdownNav";

const LazyComponents = (e: React.LazyExoticComponent<React.FC<{}>>) => {
  let LazyComp = e;
  return (
    <Suspense>
      <LazyComp />
    </Suspense>
  );
};

const App: React.FC = (): JSX.Element => {
  const [showDropNav, setShowDropNav] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          {showDropNav && <DropdownNav />}
        </>
      ),
      children: NavRoutes.map((e) => ({
        path: `/${e.pathname.split(" ").join("").toLocaleLowerCase()}`,
        element: LazyComponents(e.path),
        errorElement: <ErrorPage />,
      })),
    },
  ]);
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
        headerRef.style.transform = `translateX(${
          Math.floor(e.target.scrollTop) + 1
        }rem)`;
        if (Math.floor(e.target.scrollTop) > 100) {
          headerRef.style.display = "none";
        }
        setShowDropNav(true);
        headerRef.style.transition = "1s ease-in-out";
      } else {
        headerRef.style.transform = `translateX(0px)`;
        setShowDropNav(false);
        headerRef.style.display = "block";
        headerRef.style.transition = "0.5s ease-in-out";
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
