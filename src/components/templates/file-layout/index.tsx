import { FC, PropsWithChildren } from "react";

interface FileLayoutProps {}
export const FileLayout: FC<PropsWithChildren<FileLayoutProps>> = ({
    children,
}) => {
    return <div>{children}</div>;
};
