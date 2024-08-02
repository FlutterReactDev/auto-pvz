import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Link, LinkProps } from "@tanstack/react-router";
import { X } from "lucide-react";
import * as React from "react";

const PageTabs = TabsPrimitive.Root;

const PageTabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex h-9 items-center justify-center rounded-lg  text-muted-foreground w-full",
            className
        )}
        {...props}
    />
));

PageTabsList.displayName = TabsPrimitive.List.displayName;
export interface PageTabsTriggerProps {
    linkProps: LinkProps;

    icon: React.ReactNode;
}

export type Removable =
    | {
          removable?: true;
          onRemove: () => void;
      }
    | {
          removable?: false;
          onRemove?: () => void;
      };
const PageTabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
        PageTabsTriggerProps &
        Removable
>(
    (
        {
            className,
            linkProps,
            icon,
            removable,
            onRemove,
            children,

            ...props
        },
        ref
    ) => {
        return (
            <div className="relative">
                <Link {...linkProps}>
                    {({ isActive }) => {
                        console.log(isActive);

                        return (
                            <TabsPrimitive.Trigger
                                ref={ref}
                                className={cn(
                                    "inline-flex relative items-center justify-center whitespace-nowrap  px-3 h-10   gap-4 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                    isActive &&
                                        "bg-background text-foreground",
                                    removable && "pr-10",
                                    className
                                )}
                                {...props}
                            >
                                <div className="flex items-center gap-1">
                                    {icon}
                                    {children}
                                </div>
                            </TabsPrimitive.Trigger>
                        );
                    }}
                </Link>
                {removable && (
                    <Button
                        onClick={onRemove}
                        size={"icon"}
                        variant={"ghost"}
                        className="w-6 h-6 rounded-full absolute right-2 z-30 top-[50%] translate-y-[-50%]"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                )}
            </div>
        );
    }
);
PageTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { PageTabs, PageTabsList, PageTabsTrigger };
