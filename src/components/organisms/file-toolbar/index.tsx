import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Hand, MousePointer2 } from "lucide-react";

export const FileToolbar = () => {
    return (
        <div className="absolute bottom-4 left-[50%] translate-x-[-50%] bg-background py-3 px-1 rounded-lg max-w-[150px] w-full z-50">
            <ToggleGroup type="single" value="bold">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Hand />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <MousePointer2 />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
};
