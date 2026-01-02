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
                <CardTitle className="text-3xl font-headline">Welcome to CivilTrain Academy</CardTitle>
                <CardDescription className="text-lg">You are ready to start your training. Select a module from the sidebar to begin.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-4">Your first step into advanced structural engineering starts here.</p>
                {course.modules.length > 0 && (
                    <Button asChild size="lg">
                        <Link href={`/dashboard/modules/${course.modules[0].slug}`}>
                            Start with Module 1
                        </Link>
                    </Button>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
