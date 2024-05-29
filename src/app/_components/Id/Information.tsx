import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Phone, Mail } from "lucide-react";

export default function Information() {
  const textClasses = "text-xs lg:text-md";
  const thinTextClasses = "font-thin text-md md:text-lg lg:text-xl";

  return (
    <>
      <Card className="col-span-2 lg:col-span-1 h-full w-full lg:w-4/5 py-2 border-neutral-600">
        <CardContent className="flex flex-col gap-2 h-full pb-0 md:pb-4">
          <div className="flex flex-col gap-2 sm:px-2 py-1 border-b border-neutral-600 my-auto">
            <div className={textClasses}>LinkedIn</div>
            <div className="flex gap-2">
              <Linkedin />
              <a
                className={thinTextClasses}
                href="https://www.linkedin.com/in/ssoydabas/"
              >
                <u>ssoydabas</u>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:px-2 py-1 border-b border-neutral-600">
            <div className={textClasses}>GitHub</div>

            <div className="flex gap-2">
              <Github />
              <a
                className={thinTextClasses}
                href="https://www.github.com/ssoydabas/"
              >
                <u>ssoydabas</u>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:px-2 py-1 border-b border-neutral-600">
            <div className={textClasses}>Mobile</div>
            <div className="flex gap-2">
              <Phone />
              <a className={thinTextClasses} href="tel:+905428995024">
                <u>+90 542 899 5024</u>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:px-2 py-1 border-b border-neutral-600">
            <div className={textClasses}>Mail</div>
            <div className="flex gap-2">
              <Mail />
              <a
                className={thinTextClasses}
                href="mailto:ssoydabas41@gmail.com"
              >
                <u>ssoydabas41</u>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center p-4">
        <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM12 5v4m0 4v4m6-5v4m0 4v4m-4-5v4m0 4v4m-6-5v4m0 4v4m-4-5v4m0 4v4M12 2a10 10 0 00-7.484 16.406l.265.272L2.75 22.75a.75.75 0 001.06 1.06l1.72-1.72a10 10 0 1014.441-14.44A9.967 9.967 0 0012 2z"
            />
          </svg>
          Open to Work
        </div>
      </div>
    </>
  );
}
