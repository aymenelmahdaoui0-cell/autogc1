"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { registerTrainee } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { HardHatIcon } from '../icons/hard-hat';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Envoi en cours...' : 'Demander l\'accès'}
    </Button>
  );
}

export function JoinForm() {
  const initialState = { message: "" };
  const [state, formAction] = useFormState(registerTrainee, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.message.includes("valid")) {
        toast({
            title: "Succès!",
            description: state.message,
        });
        formRef.current?.reset();
    } else if (state?.message) {
        toast({
            title: "Erreur",
            description: state.message,
            variant: "destructive",
        })
    }
  }, [state, toast]);

  return (
    <section id="join-now" className="w-full py-16 md:py-24">
        <div className="container">
            <Card className="mx-auto max-w-xl">
                <CardHeader className="text-center">
                    <div className='flex justify-center mb-2'>
                        <HardHatIcon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Rejoignez autogc</CardTitle>
                    <CardDescription>Entrez votre email ci-dessous pour demander l'accès au cours. Nous vous informerons après approbation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="vous@exemple.com"
                                required
                            />
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
