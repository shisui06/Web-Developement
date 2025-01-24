"use client";

import { Button } from "@packages/ui/components/button";
import { useEffect, useRef, useState } from "react";

type TabsTriggerProps = {
  values: Array<string>;
  onTrigger: (value: string) => void;
};

export function TabsTrigger({
  values = [],
  onTrigger = () => {},
}: TabsTriggerProps) {
  const [currentValue, setCurrentValue] = useState("1");

  useEffect(() => {
    onTrigger(currentValue);
    console.log(currentValue);
  }, [currentValue]);

  return (
    <div>
      {values.map((value) => {
        return (
          <Button
            key={value}
            onClick={() => {
              setCurrentValue(value);
            }}
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
}
