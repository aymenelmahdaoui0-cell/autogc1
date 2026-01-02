import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HardHatIcon } from "@/components/icons/hard-hat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { course } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-2xl text-center">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <HardHatIcon className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">Bienvenue chez autogc</CardTitle>
                <CardDescription className="text-lg">Vous êtes prêt à commencer votre formation. Sélectionnez un module dans la barre latérale pour commencer.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-4">Votre premier pas vers l'ingénierie structurale avancée commence ici.</p>
                {course.modules.length > 0 && (
                    <Button asChild size="lg">
                        <Link href={`/dashboard/modules/${course.modules[0].slug}`}>
                            Commencer avec le Module 1
                        </Link>
                    </Button>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
