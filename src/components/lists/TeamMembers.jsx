import Chip from "../ui/Chip";
import ProfileCard from "../ProfileCard";
import team from "../../team";
/* eslint-disable react/prop-types */

const TeamMembers = ({ type }) => {
  const filteredTeam = team.filter((member) => member.role === type);

  return (
    <div>
      <Chip label={type === "Designer" ? "DESIGNERS" : "DEVELOPERS"} />
      <div className="flex flex-col gap-4">
        {filteredTeam.map((member) => (
          <ProfileCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
