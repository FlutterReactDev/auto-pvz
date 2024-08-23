import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Button } from "@/components/ui/button";
import { FileSidebar } from "@/components/organisms/file-sidebar";
import { FileToolbar } from "@/components/organisms/file-toolbar";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useGetSvgQuery } from "@/api/DWG";
export const FilePage = () => {
    const { data } = useGetSvgQuery({
        dwg_id: 77,
        layer_id: 6345,
        zoom: 100,
    });

    return (
        <div className="relative h-full bg-muted-foreground ">
            <TransformWrapper
                minScale={0.1}
                initialScale={0.5}
                centerOnInit
                disabled={false}
                maxScale={20}
                limitToBounds={false}
                doubleClick={{ disabled: true }}
                panning={{
                    wheelPanning: true,
                    velocityDisabled: true,
                }}
            >
                <FileSidebar />
                <FileToolbar />
                <Button className="absolute right-4 bottom-10 z-50 ">
                    Скачать спецификацию
                </Button>
                <ContextMenu>
                    <ContextMenuTrigger>
                        <TransformComponent
                            wrapperClass="h-full w-full relative cursor-grab"
                            contentClass="w-full h-full"
                            wrapperStyle={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {data && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data,
                                    }}
                                    className="w-full h-full"
                                />
                            )}
                        </TransformComponent>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-64">
                        <ContextMenuItem inset>
                            Back
                            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset disabled>
                            Forward
                            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset>
                            Reload
                            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSub>
                            <ContextMenuSubTrigger inset>
                                More Tools
                            </ContextMenuSubTrigger>
                            <ContextMenuSubContent className="w-48">
                                <ContextMenuItem>
                                    Save Page As...
                                    <ContextMenuShortcut>
                                        ⇧⌘S
                                    </ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Create Shortcut...
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Name Window...
                                </ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>
                                    Developer Tools
                                </ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuSub>
                        <ContextMenuSeparator />
                        <ContextMenuCheckboxItem checked>
                            Show Bookmarks Bar
                            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem>
                            Show Full URLs
                        </ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuRadioGroup value="pedro">
                            <ContextMenuLabel inset>People</ContextMenuLabel>
                            <ContextMenuSeparator />
                            <ContextMenuRadioItem value="pedro">
                                Pedro Duarte
                            </ContextMenuRadioItem>
                            <ContextMenuRadioItem value="colm">
                                Colm Tuite
                            </ContextMenuRadioItem>
                        </ContextMenuRadioGroup>
                    </ContextMenuContent>
                </ContextMenu>
            </TransformWrapper>
        </div>
    );
};
