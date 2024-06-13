import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "./ui/avatar";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { UserContext } from "./context/UserContext";
import { HiMenu, HiHome, HiPhotograph, HiMail, HiOutlineBookOpen, HiUserCircle } from "react-icons/hi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Signin } from "./Signin";

export function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const initials = user.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
    : "";

  const handleLogout = () => {
    setUser({ name: "", email: "" });
    localStorage.removeItem("token");
  };

  const handleNavigationClick = () => {
    setIsSheetOpen(false);
  };

  const handleSignInClick = () => {
    setShowModal(true);
    handleNavigationClick(); // Added this line
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navItemStyle = `${navigationMenuTriggerStyle()} py-2 px-4 text-base font-medium flex items-center`;

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HiMenu className="mx-2" style={{ fontSize: "37px" }} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {user.name && (
          <>
            <div className="d-flex align-items-center gap-4">
              <Avatar>
                <AvatarImage alt="@user" src="/placeholder-user.jpg" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>
            <h2 className="my-3">My Courses</h2>
            <p className="text-black">No course added</p>
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
        
         
          <section>
            <NavigationMenu>
              <NavigationMenuList className="row">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={navItemStyle}
                    onClick={handleNavigationClick}
                  >
                    <HiHome className="mr-2" /> Home
                  </Link>
                </NavigationMenuItem>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      style={{ backgroundColor: "transparent" }}
                      className={navItemStyle}
                    >
                      <HiOutlineBookOpen className="mr-2" /> Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        to="/course"
                        className={navItemStyle}
                        onClick={handleNavigationClick}
                      >
                        Courses
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <NavigationMenuItem>
                  <Link
                    to="/gallery"
                    className={navItemStyle}
                    onClick={handleNavigationClick}
                  >
                    <HiPhotograph className="mr-2" /> Gallery
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={navItemStyle}
                    onClick={handleNavigationClick}
                  >
                    <HiMail className="mr-2" /> Contact
                  </Link>
                </NavigationMenuItem>
                {!user.name && (
                  <NavigationMenuItem>
                    <Link
                      to="#"
                      className={navItemStyle}
                      onClick={handleSignInClick}
                    >
                      <HiUserCircle className="mr-2" /> Signin
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </section>
        
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="button" onClick={handleLogout}>Logout</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      {showModal && (
        <Signin
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Sheet>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={`d-block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
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