import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { course } from '@/lib/data';
import { FileText, Video } from "lucide-react";

export function Curriculum() {
  return (
    <section id="curriculum" className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Programme du Cours
            </h2>
            <p className="mt-4 text-muted-foreground">
                Découvrez nos modules complets, conçus pour vous faire passer des concepts fondamentaux aux applications avancées.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {course.modules.map((module, index) => (
              <AccordionItem value={`item-${index}`} key={module.id}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">{module.description}</p>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2 text-sm">
                        <Video className="h-4 w-4 text-primary" />
                        <span>Leçon Vidéo</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>{module.resources.length} Ressources Téléchargeables</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
