import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-card py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                What Our Graduates Say
            </h2>
            <p className="mt-4 text-muted-foreground">
                Hear from professionals who have advanced their careers with CivilTrain Academy.
            </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarImageId);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="flex-1 p-6">
                  <blockquote className="text-lg text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="bg-secondary p-6">
                  <div className="flex items-center">
                    {avatarImage && (
                        <Avatar className="h-12 w-12">
                            <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
