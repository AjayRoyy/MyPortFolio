import { NavLink } from "react-router-dom";

export const RouterLink = ({
  children,
  destination,
  className,
}: {
  children: JSX.Element;
  destination: string;
  className?: string;
}) => {
  return (
    <NavLink
      style={({ isActive, isPending }) => {
        return {
          background: isActive ? "#f0b86e" : "none",
        };
      }}
      className={className}
      to={destination}
    >
      {children}
    </NavLink>
  );
};
