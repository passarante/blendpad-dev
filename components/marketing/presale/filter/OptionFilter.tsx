import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";

type OptionFilterProps = {
  title: string;
  unCheckAllBtn?: boolean;
  type: "checkbox" | "radio";
  data: string[];
};

export default function OptionFilter({
  title,
  unCheckAllBtn,
  type,
  data,
}: OptionFilterProps) {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    const tempArr = [];
    for (let index = 0; index < data.length; index++) {
      tempArr.push(index);
    }
    setSelected(tempArr);
  }, [data.length]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>{title}</div>
        {unCheckAllBtn && (
          <Button variant="dark" size="sm" onClick={() => setSelected([])}>
            Uncheck All
          </Button>
        )}
      </div>
      {type === "checkbox" ? (
        <div className="flex flex-col space-y-2">
          {data.map((item, index) => (
            <div className="items-top flex space-x-2" key={index}>
              <Checkbox
                id={`badges-${index}`}
                className="w-4 h-4 data-[state=checked]:bg-green-500"
                checked={selected.includes(index)}
                onClick={() =>
                  setSelected(
                    selected.includes(index)
                      ? selected.filter((item) => item !== index)
                      : [...selected, index]
                  )
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor={`badges-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <RadioGroup defaultValue="option-0">
          {data.map((item, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem
                value={`option-${index}`}
                id={`option-${index}`}
              />
              <Label htmlFor={`option-${index}`}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
}
