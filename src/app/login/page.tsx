import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
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
          <CardTitle className="text-2xl">Trainee Login</CardTitle>
          <CardDescription>Enter your approved email to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Login</Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don't have access?{' '}
              <Link href="/#join-now" className="underline">
                Request it now
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
