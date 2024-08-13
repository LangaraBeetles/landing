import routes from "../routes";
import Logo from "../assets/images/Logo.svg";

export const NavDesktop = () => {
  return (
    <div className="flex justify-between pb-16 px-6">
      <div className="flex-1 flex items-center">
        <img src={Logo} alt="WeaUp Logo" className="w-[72px]" />
      </div>

      <div className="flex-1 flex justify-end items-center">
        <ul className="flex gap-6 items-center text-m ">
          {routes.slice(0, 3).map((route, index) => {
            const { href, title } = route;
            return (
              <li key={index}>
                <a
                  href={href}
                  className="rounded py-2 px-4 hover:bg-baltic-green-200 text-s-l"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
