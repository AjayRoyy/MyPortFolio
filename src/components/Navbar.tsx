import {
  CustomListItems,
  RouterLinkStyled,
} from "../style-components/CommonStyled";
import Logo from "../Images/Ak Logo.png";
import { NavRoutes } from "../routes/routes";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

type Props = {
  className?: string;
};

export const Navbar = ({ className }: Props) => {
  return (
    <>
      <header className={className}>
        <nav className="container">
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
