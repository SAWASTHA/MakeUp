import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ButtonIcon } from "./darkModeButton";
import { ComboboxDemo } from "./PhoneMenu";
import { Signin } from "./Signin";
import { Profile } from "./Profile";
import { UserContext } from "./context/UserContext";
import image from "../images/preeti.png";

const components = [
  // {
  //   title: "Alert Dialog",
  //   href: "/docs/primitives/alert-dialog",
  //   description:
  //     "A modal dialog that interrupts the user with important content and expects a response.",
  // },
  {
    title: "Courses",
    href: "/course",
    description:
      "For sighted users to preview content available behind a link.",
  },
  // {
  //   title: "Progress",
  //   href: "/docs/primitives/progress",
  //   description:
  //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  // },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
];

export default function NavbarComponent() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(UserContext);

  const handleSignInClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="flex items-center justify-between w-full p-4 sm:px-6">
     <div className="">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter whitespace-nowrap"
          style={{fontSize:'25px'}}
        >
          Preet Makeup
        </Link>
      </div>

      <nav className={cn("flex-grow flex justify-center sm:flex hidden")}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                        to="#"
                      >
                        <img
                          src={image}
                          alt="Preeti Waghmare"
                          className="h-auto w-full object-cover rounded-md"
                        />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Name">
                    Preeti Waghmare
                  </ListItem>
                  <ListItem href="#" title="Work">
                    I specialize in bridal makeup, editorial looks, and everyday
                    beauty transformations. My work focuses on enhancing natural
                    beauty and creating personalized looks for each client.
                  </ListItem>
                  <ListItem href="#" title="About Preeti">
                    Hi, I'm Preeti Waghmare, a passionate and hardworking makeup
                    artist. I believe in the power of makeup to transform and
                    empower. With years of experience in the industry, I strive
                    to bring out the best in every client I work with.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px]  p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/gallery" className={navigationMenuTriggerStyle()}>
                Gallery
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>

            {!user.name && (
              <NavigationMenuItem className="flex items-center justify-center">
                <button
                  onClick={handleSignInClick}
                  className={navigationMenuTriggerStyle()}
                >
                  Signin
                </button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        {showModal && (
          <Signin showModal={showModal} handleCloseModal={handleCloseModal} />
        )}
      </nav>
      <div className="mx-4" style={{ width: "100px" }}></div>
      {/* <div className="sm:hidden mx-2">
        <ComboboxDemo />
      </div> */}
      {/* {user.name && <Profile />} */}
      <div className="mx-2">
        <ButtonIcon />
      </div>
      <div >
      <Profile />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";
