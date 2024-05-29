"use client";

import { useState } from "react";
import { CompassIcon } from "lucide-react";

export default function SkillsHeader() {
  const [compassHover, setCompassHover] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-1">
        <div>COMPANY</div>
        <div className="text-md lg:text-xl">DT Cloud Solution</div>
      </div>

      <div className="flex flex-col gap-1">
        <div>FOCUSED</div>
        <div className="flex gap-4 items-center">
          <div className="text-md lg:text-xl">TypeScript/NodeJS</div>
          <a href="https://google.com" target="_blank">
            <CompassIcon
              opacity={compassHover ? 1 : 0.6}
              onMouseEnter={() => setCompassHover(true)}
              onMouseLeave={() => setCompassHover(false)}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
