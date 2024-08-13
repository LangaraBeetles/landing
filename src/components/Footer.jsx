import Card from "./ui/Card";
import FooterLogo from "../assets/images/Logo.svg";
import routes from "../routes";

const Footer = () => {
  return (
    <Card bg="bg-neutral-800" rounded="rounded-lg" p="px-16 py-12 mt-[5.5rem] lg:mt-48">
      <div className="flex justify-center">
        <img src={FooterLogo} alt="WeaUp logo" className="md:w-[5.25rem]" />
      </div>

      <h2 className="text-2xl text-white text-center pt-10 pb-12">
        Transform Your Posture with WeaUp
      </h2>

      <ul className="flex items-center justify-center text-m mb-12">
          <li>
            <a
              href={routes[3].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6.25rem] bg-baltic-green-600 text-white text-s-l py-4 px-8 h-14"
            >
              {routes[3].title}
            </a>
          </li>
        </ul>

      <div className="flex justify-center">
        <p className="text-white text-center border-t block w-full pt-6 opacity-60">
          © 2024 WeaUp. All rights reserved.
        </p>
      </div>
    </Card>
  );
};
export default Footer;
