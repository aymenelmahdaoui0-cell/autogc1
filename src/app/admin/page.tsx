import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TraineeManagement } from "@/components/admin/trainee-management";
import { ContentManagement } from "@/components/admin/content-management";

export default function AdminDashboardPage() {
  return (
    <Tabs defaultValue="trainees">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="trainees">Trainee Management</TabsTrigger>
          <TabsTrigger value="content">Content Management</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="trainees">
        <TraineeManagement />
      </TabsContent>
      <TabsContent value="content">
        <ContentManagement />
      </TabsContent>
    </Tabs>
  );
}
