import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useClickAway } from "@uidotdev/usehooks";
import routes from "../routes";
import Card from "./ui/Card";
import { AnimatePresence, motion } from "framer-motion";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <div ref={ref} className="lg:hidden ">
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
                {routes.map((route, idx) => {
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
                      className="bg-baltic-green-50 rounded-xl w-full px-3 py-2"
                    >
                      <a
                        onClick={() => setIsOpen((prev) => !prev)}
                        href={route.href}
                      >
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
  );
};
