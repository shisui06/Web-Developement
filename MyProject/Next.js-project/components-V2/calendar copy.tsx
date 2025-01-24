"use client";

import { useState } from "react";
import { TabsTrigger } from "./tabsTrigger";
import { AvatarList } from "./avatarList";

export function Calendar() {
  const [tabsView, setTabsView] = useState();
  const callback = (value: string) => {
    setTabsView(tabsView);
  };
  return (
    <div>
      <TabsTrigger values={["timeline", "calendar"]} onTrigger={callback} />
      <div className="flex flex-col bg-red-500 p-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div>icon</div>
            <div>Event Name</div>
          </div>
          <div>...</div>
        </div>
        <div>
          <div>Now</div>
          <div></div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>3/4</div>
          <div>
            {" "}
            <AvatarList
              users={[
                { first_name: "peter", last_name: "melark" },
                { first_name: "wesner", last_name: "rabel " },
              ]}
              limit={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
