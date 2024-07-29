import routes from "../routes";
import Logo from "../assets/images/Logo.svg";

export const NavDesktop = () => {
  return (
    <div className="flex justify-between pt-9 px-5 pb-16">
      <div className="flex-1 flex items-center">
        <img src={Logo} alt="WeaUp Logo" />
      </div>

      <div className="flex-1 flex justify-center">
        <div className="rounded-[6.25rem] bg-white p-2">
          <ul className="flex gap-6 items-center p-2 text-m">
            {routes.slice(0, 3).map((route, index) => {
              const { href, title } = route;
              return (
                <li key={index}>
                  <a
                    href={href}
                    className="rounded bg-white py-2 px-4 hover:bg-baltic-green-200"
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
        <ul className="flex items-center gap-6 text-m">
          <li>
            <a
              href={routes[3].href}
              className="rounded-[6.25rem] bg-baltic-green-600 text-white py-4 px-8"
            >
              {routes[3].title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
