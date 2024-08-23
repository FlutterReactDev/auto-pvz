import { DwgUploader } from "@/components/organisms/dwg-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";

const invoices = [
    {
        recent: {
            fileImage: "https://picsum.photos/200",
            fileName: "Лев Шушков",
        },
        lastView: "1 hour ago",
    },
    {
        recent: {
            fileImage: "https://picsum.photos/200",
            fileName: "Лев Шушков",
        },
        lastView: "1 hour ago",
    },
    {
        recent: {
            fileImage: "https://picsum.photos/200",
            fileName: "Лев Шушков",
        },
        lastView: "1 hour ago",
    },
    {
        recent: {
            fileImage: "https://picsum.photos/200",
            fileName: "Лев Шушков",
        },
        lastView: "1 hour ago",
    },
];
export const NewFilePage = () => {
    return (
        <div className="flex gap-7 max-w-xl mx-auto mt-16 flex-col">
            <DwgUploader />
            <div className="relative">
                <Search className="absolute top-[50%] left-2 translate-y-[-50%]" />
                <Input className="pl-10" placeholder="Поиск файла" />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Recent files</TableHead>
                        <TableHead>Last viewed</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={invoice.recent.fileImage}
                                        className="w-16 h-16 rounded-md"
                                    />
                                    <div>{invoice.recent.fileName}</div>
                                </div>
                            </TableCell>
                            <TableCell>{invoice.lastView}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
