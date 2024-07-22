import Logo from "../assets/images/Logo.png";

const Nav = () => {
  return (
    <nav className="flex justify-between pt-9 px-5 pb-16">
      <img src={Logo} alt="WeaUp Logo" />
      <img src="https://placehold.co/28" alt="Menu Button" />
    </nav>
  );
};

export default Nav;
