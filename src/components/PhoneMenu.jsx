import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function ComboboxDemo() {
  const frameworks = [
    {
      value: "Home",
      label: "Home",
    },
    {
      value: "Gallery",
      label: "Gallery",
    },
    {
      value: "Services",
      label: "Services",
    },
    {
      value: "AboutUs",
      label: "AboutUs",
    },
    {
      value: "ContactUs",
      label: "ContactUs",
    },
  ];
  
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isDarkMode] = React.useState(false); // Assuming you have a state to manage the theme mode

  console.log("Frameworks array:", frameworks);
  console.log("Frameworks array length:", frameworks.length);

  // const toggleThemeMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Home"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div>
          {frameworks.map((framework) => (
            <div
              key={framework.value}
              onClick={() => {
                setValue(framework.value);
                setOpen(false);
              }}
              className={cn(
                "flex items-center px-4 py-2 cursor-pointer",
                value === framework.value && isDarkMode && "text-black",
                value === framework.value && !isDarkMode && "text-white",
                value === framework.value && "bg-gray-200"
              )}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
              {framework.label}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
