// Icons
import Linkedin from "../assets/images/icons/linkedin.svg";
import Globe from "../assets/images/icons/Globe.svg";
import GitHub from "../assets/images/icons/GitHub.svg";

/* eslint-disable react/prop-types */
const ProfileCard = ({ member }) => {
  return (
    <div>
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
    </div>
  );
};

export default ProfileCard;
