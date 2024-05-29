import SkillsHeader from "./SkillsHeader";
import TopSkills from "./TopSkills";
import Tools from "./Tools";

export default function Skills() {
  return (
    <div className="flex flex-col gap-12 lg:gap-32 col-span-2">
      <SkillsHeader />
      <div className="flex flex-col lg:flex-row gap-8 md:gap-4">
        <TopSkills />
        <Tools />
      </div>
    </div>
  );
}
