import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';
import { LogOut } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
            <Logo className="h-6 w-auto" />
            <span className="font-semibold">Panneau d'Administration</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
                <Link href="/">
                    <LogOut className="h-4 w-4 mr-2" />
                    Déconnexion
                </Link>
            </Button>
        </div>
    </header>
  );
}
