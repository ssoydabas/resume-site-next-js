import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const myProjects = [
    {
      image:
        "http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/f592c1d0-6445-4290-9173-15c8533062a5/1095x769.jpg",
      title: "Cannabox - Thailand",
      body: "A delivery application for a cannabis delivery service in Thailand. It has a customer-facing app for placing orders and a driver app for managing deliveries. The backend is built with Node JS and TRPC Server, and the frontend is built with React Native using Native Base UI. The app uses Postgres for data storage and authentication. The app is deployed on Linode using Docker and Terraform.",
      badges: [
        "TypeScript",
        "React Native",
        "Native Base UI",
        "TRPC Server",
        "Linode",
        "Terraform",
        "Docker",
      ],
    },
    {
      image:
        "http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/26f37a81-882d-4c24-9785-9a2519429426/1654x911.jpg",
      title: "KV Express - Netherlands",
      body: "A booking app for the local transport company in the Netherlands. It has a custom admin dashboard for managing bookings and a customer dashboard to keep track of bookings. For frontend, it employs Next JS, Tailwind CSS; for backend, it uses Node JS and Express JS to handle the requests while the data is managed in Firebase. Deployment and hosting are done on a cloud service using Docker.",
      link: "https://github.com/ssoydabas/kv-express-monorepo",
      badges: [
        "TypeScript",
        "Next JS",
        "React",
        "Tailwind",
        "Express JS",
        "Firebase",
        "Linux",
        "Docker",
      ],
    },
    {
      image:
        "http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/8941afa9-8c76-4995-ba97-e3f94eef334d/1112x742.png",
      title: "EngPot English - Turkey",
      body: "A platform that connects English teachers with students. It has a teacher dashboard for managing classes and a student dashboard for booking classes. The app is built with React Native and uses Google Cloud for authentication and data storage. The backend is built with Express JS and uses Postgres for data storage. The app is deployed on Google Cloud using Docker.",
      link: "https://github.com/ssoydabas/engpot-express-js",
      secondLink: "https://github.com/ssoydabas/engpot-next-js",
      badges: [
        "TypeScript",
        "React Native",
        "Native Base UI",
        "Google Cloud",
        "Express JS",
        "Docker",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 col-span-2 lg:col-start-2">
      {myProjects.map(
        ({ title, body, link, secondLink, image, badges }, index) => (
          <div
            key={`${title}-${index}`}
            className="flex flex-col gap-8 w-full lg:m-12 p-4 border-2 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-semibold">
                {title}
              </div>

              {link && (
                <>
                  <a
                    href={link}
                    className="text-sm sm:text-md md:text-lg lg:text-xl text-thin"
                  >
                    <u>{link}</u>
                  </a>
                  <br />
                </>
              )}

              {secondLink && (
                <>
                  <a
                    href={secondLink}
                    className="text-sm sm:text-md md:text-lg lg:text-xl text-thin"
                  >
                    <u>{secondLink}</u>
                  </a>
                  <br />
                </>
              )}

              <img
                src={image}
                alt={title}
                className="w-96 md:w-96 lg:w-96 my-8 object-contain"
              />

              <div className="text-sm lg:text-lg mt-4">{body}</div>
              <div className="flex flex-wrap gap-2 mt-12">
                {badges.map((badge, index) => (
                  <Badge key={index} className="text-xs md:text-md">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
