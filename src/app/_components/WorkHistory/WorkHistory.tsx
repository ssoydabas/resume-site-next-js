export default function WorkHistory() {
  const experiences = [
    {
      year: "Oct 2023",
      title: "Software Engineer",
      description: "DT Cloud Solutions",
    },
    {
      year: "Jan 2021 - Oct 2023",
      title: "Software Engineer",
      description: "Cannabox - Thailand",
    },
    {
      year: "Apr 2020 - Jan 2021",
      title: "Full Stack Developer",
      description: "Freelance",
    },
  ];

  return (
    <div className="lg:grid-cols-3 col-span-2 col-start-2 mx-auto p-6 px-16">
      <div className="relative border-l border-sky-400">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute -left-5 mt-8 h-10 w-10 rounded-full bg-sky-400 border-4 border-sky-200"></div>
            <div className="ml-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold">
                {exp.title}
              </h3>
              <span className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
                {exp.year}
              </span>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-thin">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
