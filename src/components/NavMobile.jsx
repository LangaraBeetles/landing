import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useClickAway } from "@uidotdev/usehooks";
import routes from "../routes";
import Card from "./ui/Card";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/images/Logo.svg";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleClick = () => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 100);
  };

  return (
    <div className="flex justify-between pt-9 px-5 pb-16">
      <img src={Logo} alt="WeaUp Logo" />
      <div ref={ref}>
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[6.63rem]  mx-[1.81rem] "
            >
              <Card bg="bg-white" p="p-3.5 pt-[1.56rem]">
                <ul className="grid gap-6">
                  {routes.slice(0, 3).map((route, idx) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="active:bg-baltic-green-200 active:text-baltic-green-800 rounded-xl w-full px-3 py-2 "
                      >
                        <a onClick={handleClick} href={route.href}>
                          <span className="flex justify-center gap-6 text-m">
                            {route.title}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
