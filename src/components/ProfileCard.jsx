import Card from "./ui/Card";

// Icons
import Linkedin from "../assets/images/icons/linkedin.svg";
import Globe from "../assets/images/icons/Globe.svg";
import GitHub from "../assets/images/icons/GitHub.svg";

/* eslint-disable react/prop-types */
const ProfileCard = ({ member }) => {
  return (
    <div>
      <Card bg="bg-yellow-50" rounded="rounded-md">
        <div className="flex justify-center">
          <img src={member.img} alt="pooja" />
        </div>
      </Card>
      <p className="pt-6 pb-3 text-m notranslate">{member.name}</p>
      <div className="flex gap-3">
        <a href={member.linkedin}>
          <img src={Linkedin} alt="Linkedin profile" />
        </a>
        <a href={member.website}>
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
