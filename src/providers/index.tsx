import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
                <Toaster />
            </ThemeProvider>
        </ReduxProvider>
    );
};
