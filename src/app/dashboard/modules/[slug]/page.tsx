import { notFound } from 'next/navigation';
import { course } from '@/lib/data';
import { VideoPlayer } from '@/components/dashboard/video-player';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { BlueprintIcon } from '@/components/icons/blueprint';
import Link from 'next/link';

export async function generateStaticParams() {
  return course.modules.map((module) => ({
    slug: module.slug,
  }));
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const module = course.modules.find((m) => m.slug === params.slug);

  if (!module) {
    notFound();
  }

  const currentIndex = course.modules.findIndex(m => m.slug === params.slug);
  const prevModule = currentIndex > 0 ? course.modules[currentIndex - 1] : null;
  const nextModule = currentIndex < course.modules.length - 1 ? course.modules[currentIndex + 1] : null;

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">{module.title}</h1>
        <p className="text-muted-foreground">{module.description}</p>
      </div>

      <VideoPlayer videoUrl={module.videoUrl} title={module.title} />

      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
          <CardDescription>Downloadable materials for this module.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {module.resources.map((resource, index) => (
              <li key={index} className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  {resource.type === 'blueprint' ? <BlueprintIcon className="h-5 w-5 text-primary" /> : <FileText className="h-5 w-5 text-primary" />}
                  <span className="font-medium">{resource.name}</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={resource.url} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        {prevModule ? (
          <Button asChild variant="outline">
            <Link href={`/dashboard/modules/${prevModule.slug}`}>&larr; Previous: {prevModule.title}</Link>
          </Button>
        ) : <div/>}
        {nextModule ? (
          <Button asChild>
            <Link href={`/dashboard/modules/${nextModule.slug}`}>Next: {nextModule.title} &rarr;</Link>
          </Button>
        ) : (
          <Button disabled>End of Course</Button>
        )}
      </div>
    </div>
  );
}
