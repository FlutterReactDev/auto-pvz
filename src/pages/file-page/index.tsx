import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ExImage from "@/assets/image 3.png";
import { Button } from "@/components/ui/button";
import { FileSidebar } from "@/components/organisms/file-sidebar";
import { FileToolbar } from "@/components/organisms/file-toolbar";
export const FilePage = () => {
    return (
        <div className="relative h-full bg-muted-foreground ">
            <FileSidebar />
            <FileToolbar />
            <TransformWrapper
                minScale={0.1}
                initialScale={0.5}
                centerOnInit
                disabled={false}
                maxScale={5}
                limitToBounds={false}
                doubleClick={{ disabled: true }}
                panning={{
                    wheelPanning: true,
                    velocityDisabled:true
                }}
                zoomAnimation={{
                    disabled: true,
                }}
                
            >
                <Button className="absolute right-4 bottom-10 z-50 ">
                    Скачать спецификацию
                </Button>
                <TransformComponent
                    wrapperClass="h-full w-full relative cursor-grab"
                    contentClass="w-full h-full"
                    wrapperStyle={{
                        width: "100%",
                    }}
                >
                    <img src={ExImage} className="w-auto max-w-none" />
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};
