"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';
import { useToast } from '@/hooks/use-toast';

export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [secretCode, setSecretCode] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (secretCode === '2026') {
      router.push('/admin');
    } else {
      toast({
        title: "Code secret incorrect",
        description: "Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary p-4">
      <div className="absolute top-4 left-4">
        <Button asChild variant="ghost">
          <Link href="/">&larr; Retour à l'accueil</Link>
        </Button>
      </div>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl">Accès au Panneau d'Administration</CardTitle>
          <CardDescription>Entrez le code secret pour gérer la plateforme.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="secret-code">Code Secret</Label>
              <Input
                id="secret-code"
                type="password"
                required
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              S'authentifier
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
