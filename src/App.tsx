import React, { lazy, Suspense, useEffect, useRef } from "react";
import "./App.sass";
import "./cursorStyle.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";
import { NavRoutes } from "./routes/routes";
import { useAppDispatch } from "./redux/hooks";
import { fetchProducts } from "./redux/slices/productsSlice";
import { AppContainer } from "./style-components/CommonStyled";
import { Nav } from "./components/Navbar";

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
  const dispatch = useAppDispatch();
  const cursorRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <AppContainer className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <RouterProvider router={router} />
      <div ref={cursorRef} className="cursor"></div>
    </AppContainer>
  );
};

export default App;
