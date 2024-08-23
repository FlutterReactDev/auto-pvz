import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "./theme-provider";
import { SonnerComp } from "@/components/ui/sonner";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
                <SonnerComp />
            </ThemeProvider>
        </ReduxProvider>
    );
};
