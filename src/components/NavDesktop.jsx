import routes from "../routes";
import Logo from "../assets/images/Logo.svg";

export const NavDesktop = () => {
  return (
    <div className="flex justify-between pb-16">
      <div className="flex-1 flex items-center">
        <img src={Logo} alt="WeaUp Logo" className="w-[86px]" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-[6.25rem] bg-white p-2 h-14 flex items-center">
          <ul className="flex gap-6 items-center text-m ">
            {routes.slice(0, 3).map((route, index) => {
              const { href, title } = route;
              return (
                <li key={index}>
                  <a
                    href={href}
                    className="rounded bg-white py-2 px-4 hover:bg-baltic-green-200 text-s-l"
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <ul className="flex items-center text-m">
          <li>
            <a
              href={routes[3].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6.25rem] bg-baltic-green-600 text-white py-4 px-8 h-14 text-s-l"
            >
              {routes[3].title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
