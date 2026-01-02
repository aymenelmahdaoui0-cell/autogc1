import { Card, CardContent } from "@/components/ui/card";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          ></iframe>
        </div>
        {/* A note on security: For production, using Google Drive's API with OAuth2 is recommended 
            to generate authenticated, short-lived streaming URLs per user session. 
            This prevents unauthorized sharing of video links. */}
      </CardContent>
    </Card>
  );
}
