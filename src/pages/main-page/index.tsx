import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, Clock3, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const MainPage = () => {
    return (
        <div className="h-full w-full">
            <div className="grid grid-cols-[280px_1fr] h-full">
                <div className="h-full  border-r ">
                    <div className="flex gap-2 flex-col p-2">
                        <div className="flex justify-between">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        className="flex items-center gap-1 h-9  justify-start p-1"
                                        variant={"ghost"}
                                    >
                                        <Avatar className="w-7 h-7">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>CN</div>

                                        <ChevronDown />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-64"
                                    align="start"
                                >
                                    <div className="flex items-center flex-col gap-1">
                                        <Avatar>
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="text-sm">Саша</div>
                                        <div className="text-muted-foreground text-sm">
                                            exapmle@gmail.com
                                        </div>
                                    </div>

                                    <DropdownMenuSeparator />

                                    <DropdownMenuGroup>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                Тема
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        Темная
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Светлая
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Системная
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            Настройки
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem>Выйти</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant={"ghost"} size={"icon"}>
                                <Bell />
                            </Button>
                        </div>
                        <div className="relative">
                            <Input
                                placeholder="Search for anything"
                                className="pl-9"
                            />
                            <Search className="absolute top-[50%] translate-y-[-50%] left-2" />
                        </div>
                        <div className="flex gap-3">
                            <Clock3 />
                            <div>Recent</div>
                        </div>
                    </div>
                    <Separator />
                </div>
            </div>
        </div>
    );
};
