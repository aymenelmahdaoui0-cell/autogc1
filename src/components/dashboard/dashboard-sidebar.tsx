"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Logo } from '@/components/icons/logo';
import { course } from '@/lib/data';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-card lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Logo className="h-6 w-auto" />
          </Link>
        </div>
        <div className="flex-1">
          <ScrollArea className="h-full">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <p className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase">Modules</p>
              {course.modules.map((module) => (
                <Link
                  key={module.id}
                  href={`/dashboard/modules/${module.slug}`}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary',
                    pathname === `/dashboard/modules/${module.slug}` && 'bg-secondary text-primary'
                  )}
                >
                  {module.title}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
        <div className="mt-auto p-4 border-t">
            <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
