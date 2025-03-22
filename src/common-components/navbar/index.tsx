import { NavLink, useLocation } from "react-router";

import { ROUTES } from "../../modules/routing/enums";

const links = [
  {
    label: "Step 1",
    pathname: ROUTES.SIGN_UP.STEP_1,
  },
  {
    label: "Step 2",
    pathname: ROUTES.SIGN_UP.STEP_2,
  },
] as const;

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div>
      {links.map((link, index) => (
        <>
          {index !== 0 ? " | " : null}
          {link.pathname === pathname ? (
            link.label
          ) : (
            <NavLink to={link}>{link.label}</NavLink>
          )}
        </>
      ))}
    </div>
  );
}
