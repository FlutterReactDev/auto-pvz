import {
    PageTabs,
    PageTabsList,
    PageTabsTrigger,
} from "@/components/atoms/page-tab";
import { ThemeSwitcher } from "@/components/molecules/theme-switcher";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { File, House, PlusIcon } from "lucide-react";
import { useState } from "react";

export const FilesTab = () => {
    const navigate = useNavigate();
    const [tabs, setTabs] = useState<
        {
            fileName: string;
            id: number;
            isNew?: boolean;
        }[]
    >([
        {
            fileName: "AutoPVZ",
            id: 1,
        },
    ]);

    const onRemove = (id: number) => {
        setTabs((prevState) => {
            return prevState.filter((tab) => tab.id != id);
        });
    };

    const onAdd = () => {
        setTabs((prevState) => {
            return [
                ...prevState,
                {
                    fileName: "New File",
                    id: Math.floor(Math.random() * 10),
                    isNew: true,
                },
            ];
        });
        navigate({
            to: "/new-file",
        });
    };

    return (
        <div className="top-0 sticky flex items-center h-10  bg-muted gap-1 overflow-y-hidden">
            <PageTabs>
                <PageTabsList>
                    <AnimatePresence mode={"popLayout"} initial={false}>
                        <motion.div
                            transition={{
                                type: "spring",
                                duration: 0.3,
                                bounce: 0,
                            }}
                            layout
                            initial={{ y: -40 }}
                            animate={{ y: 0 }}
                            exit={{ y: 40 }}
                        >
                            <PageTabsTrigger
                                linkProps={{
                                    to: "/",
                                }}
                                icon={<House className="w-4 h-4" />}
                                value={`/`}
                            />
                        </motion.div>
                        {tabs.map(({ fileName, id, isNew }) => {
                            return (
                                <motion.div
                                    transition={{
                                        type: "spring",
                                        duration: 0.3,
                                        bounce: 0,
                                    }}
                                    layout
                                    initial={{ y: -40 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: 40 }}
                                    key={id}
                                >
                                    <PageTabsTrigger
                                        key={id}
                                        linkProps={{
                                            to: "/files/$id",
                                            params: {
                                                id: `${id}`,
                                            },
                                        }}
                                        {...(isNew && {
                                            linkProps: {
                                                to: "/new-file",
                                            },
                                        })}
                                        removable
                                        onRemove={() => {
                                            onRemove(id);
                                        }}
                                        icon={<File className="w-4 h-4" />}
                                        value={`${id}`}
                                    >
                                        {fileName}
                                    </PageTabsTrigger>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </PageTabsList>
            </PageTabs>
            <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-background  w-5 h-5 text-muted-foreground"
                onClick={onAdd}
            >
                <PlusIcon className="w-3.5 h-3.5" />
            </Button>
            <ThemeSwitcher />
        </div>
    );
};
