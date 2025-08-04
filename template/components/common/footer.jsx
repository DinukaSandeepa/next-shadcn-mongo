import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="w-full">
            <Separator />
            <div className="flex flex-col items-center py-6 text-sm text-muted-foreground">
                <span>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</span>
            </div>
        </footer>
    );
}