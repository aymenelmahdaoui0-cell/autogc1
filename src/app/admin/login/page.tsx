import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary p-4">
      <div className="absolute top-4 left-4">
        <Button asChild variant="ghost">
          <Link href="/">&larr; Back to Home</Link>
        </Button>
      </div>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl">Admin Panel Access</CardTitle>
          <CardDescription>Enter the secret code to manage the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="secret-code">Secret Code</Label>
              <Input
                id="secret-code"
                type="password"
                required
              />
            </div>
            {/* In a real app, this form would use a server action to verify the secret code
                and set an authentication cookie before redirecting. */}
            <Button type="submit" className="w-full" asChild>
              <Link href="/admin">Authenticate</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
