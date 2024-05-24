import React, { useContext, forwardRef } from 'react';
import { Button } from './ui/button';
import { AvatarImage, AvatarFallback, Avatar } from './ui/avatar';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from './ui/sheet';
import { HiMiniUserCircle } from 'react-icons/hi2';
import { UserContext } from './context/UserContext'; 

const HiMiniUserCircleForwarded = forwardRef((props, ref) => (
  <div ref={ref}>
    <HiMiniUserCircle {...props} />
  </div>
));

export function Profile() {
  const { user, setUser } = useContext(UserContext); 
  const initials = user.name
    ? user.name.split(' ').map((word) => word[0]).join('')
    : '';

  const handleLogout = () => {
    setUser({ name: '', email: '' }); 
    localStorage.removeItem('token'); 
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiMiniUserCircleForwarded className="mx-2" style={{ fontSize: '37px' }} />
      </SheetTrigger>
      <SheetContent>
        
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt="@user" src="/placeholder-user.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-lg font-medium ">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
        <h2 className="my-3">My Courses</h2>
        <p className="text-black ">No course added</p>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleLogout}>Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
