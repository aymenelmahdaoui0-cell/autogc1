import { AdminHeader } from '@/components/admin/admin-header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-secondary">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {/* Simplified sidebar structure for future expansion */}
      </div>
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
        </main>
      </div>
    </div>
  );
}
