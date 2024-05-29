export default function Tools() {
  const myTools = [
    "React",
    "React Native",
    "NextJS",
    "Redux",
    "Redis",
    "Mongo DB",
    "PostgreSQL",
    "Docker",
    "NestJS",
  ];

  return (
    <div className="flex flex-col gap-3 mt-12 px-8">
      <div className="text-md">MAIN TOOLS</div>

      <div className="flex flex-col items-center gap-2">
        {myTools.map((tool) => (
          <div className="w-3/5 lg:w-full text-xl bg-sky-500 text-center px-2 rounded-md">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
