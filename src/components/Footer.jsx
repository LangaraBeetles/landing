import Card from "./ui/Card";
import FooterLogo from "../assets/images/FooterLogo.svg";

const Footer = () => {
  return (
    <Card bg="bg-neutral-800" rounded="rounded-lg" p="px-6 py-20">
      <div className="flex justify-center">
        <img src={FooterLogo} alt="WeaUp logo" />
      </div>

      <h2 className="text-2xl text-white text-center pt-10 pb-12">
        Transform Your Posture with WeaUp
      </h2>

      <div className="flex justify-center">
        <p className="text-white text-center border-t block w-fit pt-6">
          © 2024 WeaUp. All rights reserved.
        </p>
      </div>
    </Card>
  );
};
export default Footer;
