import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Build Your Future in Civil Engineering
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300 md:text-xl">
            Master essential skills with expert-led courses and hands-on projects.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#join-now">Join Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="#curriculum">View Curriculum</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
