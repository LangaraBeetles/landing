import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

const Nav = () => {
  return (
    <nav>
      <div className="block lg:hidden">
        <NavMobile />
      </div>

      <div className="hidden lg:block">
        <NavDesktop />
      </div>
    </nav>
  );
};

export default Nav;
