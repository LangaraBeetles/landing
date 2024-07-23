import Logo from "../assets/images/Logo.svg";
import { NavMobile } from "./NavMobile";

const Nav = () => {
  return (
    <nav className="flex justify-between pt-9 px-5 pb-16">
      <img src={Logo} alt="WeaUp Logo" />
      <NavMobile />
    </nav>
  );
};

export default Nav;
