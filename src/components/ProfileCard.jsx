import { motion } from "framer-motion";

// Icons
import Linkedin from "../assets/images/icons/linkedin.svg";
import Globe from "../assets/images/icons/Globe.svg";
import GitHub from "../assets/images/icons/GitHub.svg";

const cardVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

/* eslint-disable react/prop-types */
const ProfileCard = ({ member }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ margin: "-200px", once: true }}
    >
      <img src={member.img} alt="member image" />
      <p className="pt-6 pb-1 text-m notranslate">{member.name}</p>
      <p className="pb-3 text-s-l2 text-neutral-500">{member.title}</p>
      <div className="flex gap-3">
        <a href={member.linkedin} target="_blank">
          <img src={Linkedin} alt="Linkedin profile" />
        </a>
        <a href={member.website} target="_blank">
          <img
            src={member.role === "Designer" ? Globe : GitHub}
            alt="Portfolio"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
