import React, { useEffect, useRef } from "react";
import {
  CustomListItems,
  RouterLinkStyled,
} from "../style-components/CommonStyled";
import Logo from "../Images/Ak Logo.png";
import { NavRoutes } from "../routes/routes";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addRefToStore } from "../redux/slices/refSlice";

type Props = {
  className?: string;
};

export const Navbar = ({ className }: Props) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addRefToStore({ headerRef: headerRef.current }));
  }, []);
  return (
    <>
      <header ref={headerRef} className={`${className}`}>
        <nav ref={navRef} className="container">
          {NavRoutes &&
            NavRoutes.map((e, i) => (
              <RouterLinkStyled
                key={i}
                destination={`${e.pathname.split(" ").join("").toLowerCase()}`}
                $primary={e.Logo ? true : false}
              >
                {e.Logo ? (
                  <img src={Logo} alt="Logo" />
                ) : (
                  <CustomListItems>{e.pathname}</CustomListItems>
                )}
              </RouterLinkStyled>
            ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const Nav = styled(Navbar)`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: auto;
    height: 130px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
