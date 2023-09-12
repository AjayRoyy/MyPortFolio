import styled from "styled-components";
import { SubTitle } from "../style-components/CommonStyled";
import { StarFilled } from "@ant-design/icons";
import { Dropdown } from "antd";
import { NavRoutes } from "../routes/routes";
import { Link } from "react-router-dom";

type Props = {};

const DropdownNav = (props: Props) => {
  const items = NavRoutes.map((e, i) => ({
    key: i,
    label: (
      <Link to={`/${e.pathname.split(" ").join("").toLocaleLowerCase()}`}>
        {e.pathname === "/" ? "Home" : e.pathname}
      </Link>
    ),
  }));
  return (
    <SteadyComp>
      <SubTitle>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <StarFilled className="text-4xl hover:text-yellow-300" />
        </Dropdown>
      </SubTitle>
    </SteadyComp>
  );
};

export default DropdownNav;

const SteadyComp = styled.div`
  position: fixed;
  top: 10%;
  left: 2%;
  z-index: 1;
`;
