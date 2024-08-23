import { useUploadDwgMutation } from "@/api/DWG";
import { Button } from "@/components/ui/button";
import {
    isErrorWithMessage,
    isFetchBaseQueryError,
} from "@/lib/server-error-heandler";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FileDown, Loader, Plus } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";

const uploaderState = {
    loading: (
        <div className="flex flex-col gap-2 items-center">
            <Loader className="animate-spin" />
        </div>
    ),
    idle: (
        <div className="flex flex-col gap-2 items-center">
            <Plus />
            <p>Создать новый проект</p>
        </div>
    ),
    drag: (
        <div className="flex flex-col gap-2 items-center">
            <FileDown />
        </div>
    ),
};
export const DwgUploader = () => {
    const navigate = useNavigate();
    const [uploadDwg, { isLoading }] = useUploadDwgMutation();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);

    const uploadFile = async (file: File) => {
        try {
            const response = await uploadDwg({
                file: file,
            }).unwrap();
            toast.success(response.message);
            navigate({
                to: "/files/$id",
                params: {
                    id: response.id.toString(),
                },
            });
        } catch (err) {
            if (isFetchBaseQueryError(err)) {
                const errMsg =
                    "error" in err
                        ? err.data.error
                        : JSON.stringify(err.data.error);

                toast.error(errMsg);
            } else if (isErrorWithMessage(err)) {
                toast.error(err.message);
            }
        }
        setDragOver(false);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;

        if (fileList) {
            uploadFile(fileList[0]);
        }
    };

    const handleFileDrop = async (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const files: File[] = [];

        if (e.dataTransfer.items) {
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                if (e.dataTransfer.items[i].kind === "file") {
                    const file = e.dataTransfer.items[i].getAsFile();
                    if (file) {
                        files.push(file);
                    }
                }
            }
        } else {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                files.push(e.dataTransfer.files[i]);
            }
        }

        if (files) {
            uploadFile(files[0]);
        }
    };

    const state = useMemo(() => {
        if (isLoading) {
            return "loading";
        }
        if (dragOver) {
            return "drag";
        }
        return "idle";
    }, [isLoading, dragOver]);

    return (
        <>
            <Button
                className="w-full h-56 flex-col gap-4"
                onClick={() => {
                    inputRef.current?.click();
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                }}
                onDrop={handleFileDrop}
                onDragEnd={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                }}
                {...(dragOver && {
                    variant: "secondary",
                })}
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        transition={{
                            type: "spring",
                            duration: 0.3,
                            bounce: 0,
                        }}
                        initial={{ opacity: 0, y: -55 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 55 }}
                        key={state}
                    >
                        {uploaderState[state]}
                    </motion.span>
                </AnimatePresence>
            </Button>
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileUpload}
                className="hidden"
            />
        </>
    );
};
