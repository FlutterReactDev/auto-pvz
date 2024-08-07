import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const onToggle = () => {
        if (theme == "dark") {
            setTheme("light");
        }

        if (theme == "light") {
            setTheme("dark");
        }
    };
    return (
        <Button variant="secondary" onClick={onToggle} size="icon" className="ml-auto">
            {theme == "dark" ? <Sun /> : <Moon />}
        </Button>
    );
};
