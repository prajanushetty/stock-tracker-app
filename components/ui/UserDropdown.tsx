'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

interface UserDropdownProps {
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  } | null;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
    const router = useRouter();

    const handleSignOut = () =>
    {
        // TODO: Add actual sign-out logic here
        // e.g., await signOut() or clear authentication tokens
        router.push("/sign-in")
    }

    // Fallback values if user is not provided or fields are missing
    const displayName = user?.name || "User";
    const displayEmail = user?.email || "user@example.com";
    const userInitial = (displayName.charAt(0) || "U").toUpperCase();
    const avatarUrl = user?.avatar || "https://github.com/shadcn.png";
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>  
            <Button className="h-10 w-10 p-0 rounded-full bg-transparent overflow-hidden">
                <Avatar className="w-full">
                    <AvatarImage src={avatarUrl} alt={`${displayName}'s avatar`} className="object-cover w-full h-full"/>
                    <AvatarFallback className="w-full h-full flex items-center justify-center bg-yellow-500 text-yellow-900 text-xl font-bold">{userInitial}</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-950 w-56 p-2" align="end" sideOffset={5}>
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={avatarUrl} alt={`${displayName}'s avatar`}/>
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-xl font-bold">{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col max-w-40">
                            <span className="scroll-x text-base font-medium text-grey-4">{displayName}</span>
                            <span className="scroll-x text-sm text-grey-500">{displayEmail}</span>
                        </div>
                    </div>
                    <hr></hr>
                </DropdownMenuLabel>
                {/* <DropdownMenuLabel className="pt-2 text-grey-500 hover:text-yellow-100">Dashboard</DropdownMenuLabel>
                <DropdownMenuLabel className="pt-2 text-grey-500 hover:text-yellow-100">Search</DropdownMenuLabel>
                <DropdownMenuLabel className="pt-2 pb-2 text-grey-500 hover:text-yellow-100">Watchlist</DropdownMenuLabel> */}

                <DropdownMenuSeparator className="bg-grey-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="flex gap-2.5 cursor-pointer hover:bg-grey-100 focus:text-yellow-500 transition-colors">
                    <LogOut className="h-4 w-4 mt-1"/><span className="text-grey-600">Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown