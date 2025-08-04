import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="p-4 border-b">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-2xl font-bold">
                    next-shadcn-mongo
                </Link>
                <div className="space-x-4">
                    <Link href="/auth/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}