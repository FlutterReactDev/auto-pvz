import { FC, PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "@/components/ui/theme-provider";
interface ThemeProviderProps {}
export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
    children,
}) => {
    return <Provider defaultTheme="light">{children}</Provider>;
};
