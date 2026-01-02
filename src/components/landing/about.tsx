import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { course } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-course-image');

  const features = [
    "Expert-led video modules",
    "Real-world project blueprints",
    "Downloadable PDF resources",
    "Direct application to industry standards"
  ];

  return (
    <section id="about" className="w-full bg-card py-16 md:py-24">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            About The Course
          </h2>
          <p className="mt-4 text-muted-foreground">
            {course.description}
          </p>
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                </li>
            ))}
          </ul>
        </div>
        {aboutImage && (
          <div className="flex items-center justify-center">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={450}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
}
