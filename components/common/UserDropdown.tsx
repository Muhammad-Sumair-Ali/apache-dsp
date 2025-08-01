'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUser } from "@/context/useAuth";

export default function UserDropdown({
  user,
  onLogout,
}: {
  user: IUser;
  onLogout: () => void;
}) {
  const fallbackText = user?.firstName
    ? user.firstName.slice(0, 2).toUpperCase()
    : "US";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="text-black font-semibold">
          <AvatarImage src={""} alt={user?.firstName} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
