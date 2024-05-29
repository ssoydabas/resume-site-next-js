export default function TopSkills() {
  const mySkills: { name: string; color?: string }[] = [
    { name: "TypeScript", color: "sky" },
    { name: "Node.js", color: "emerald" },
    { name: "Java", color: "red" },
    { name: "GraphQL" },
    { name: "Kubernetes" },
    { name: "Nginx" },
    { name: "CI/CD" },
    { name: "HTML/CSS" },
    { name: "Linux" },
  ];
  const TopSkill = (skill: string, color?: string) => (
    <div
      className={`grid place-items-center w-32 h-32 shadow-md shadow-neutral-300 rounded-full ${color ? "border-4" : "border-2"} border-dotted border-${color ?? "neutral"}-600`}
    >
      {skill}
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-36 md:gap-x-0 place-items-center w-3/5 m-auto">
      {mySkills.map((skill) => TopSkill(skill.name, skill.color))}
    </div>
  );
}
