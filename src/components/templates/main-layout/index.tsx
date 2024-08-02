import { FilesTab } from "@/components/organisms/files-tab";
import { FC, PropsWithChildren } from "react";
interface MainLayoutProps {}
export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = (props) => {
    const { children } = props;

    return (
        <div className="flex flex-col h-dvh w-full">
            <FilesTab />
            <main className="h-full overflow-auto">{children}</main>
        </div>
    );
};
