import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Signin } from './Signin';

export function ComboboxDemo() {
  const frameworks = [
    { value: "Home", label: "Home", path: "/" },
    { value: "Gallery", label: "Gallery", path: "/gallery" },
    { value: "Services", label: "Services", path: "/services" },
    { value: "AboutUs", label: "AboutUs", path: "/about-us" },
    { value: "ContactUs", label: "ContactUs", path: "/contact" },
    { value: "SignIn", label: "SignIn", path: "" },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const handleSignInClick = () => {
    setShowModal(true);
    setOpen(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
          <div>
            {frameworks.map((framework) => (
              framework.value === "SignIn" ? (
                <div
                  key={framework.value}
                  onClick={handleSignInClick}
                  className={cn(
                    "flex items-start px-4 py-2 cursor-pointer",
                    value === framework.value && "bg-gray-800 text-white"
                  )}
                >
                  {framework.label}
                </div>
              ) : (
                <Link
                  key={framework.value}
                  to={framework.path}
                  onClick={() => {
                    setValue(framework.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center px-4 py-2 cursor-pointer",
                    value === framework.value    
                  )}
                >
                  {framework.label}
                </Link>
              )
            ))}
          </div>
        </PopoverContent>
      </Popover>
      {showModal && <Signin showModal={showModal} handleCloseModal={handleCloseModal} />}
    </>
  );
}
