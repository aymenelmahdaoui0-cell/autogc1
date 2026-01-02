import { trainees } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { approveTrainee, rejectTrainee } from "@/lib/actions";
import { Check, X } from "lucide-react";

export function TraineeManagement() {

  const statusVariant = {
    pending: 'secondary',
    approved: 'default',
    rejected: 'destructive',
  } as const;
  
  const statusTranslation = {
    pending: 'en attente',
    approved: 'approuvé',
    rejected: 'rejeté',
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion des Stagiaires</CardTitle>
        <CardDescription>
          Examinez et gérez l'accès des utilisateurs qui ont demandé à s'inscrire.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Soumis le</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainees.map((trainee) => (
              <TableRow key={trainee.id}>
                <TableCell className="font-medium">{trainee.email}</TableCell>
                <TableCell>{trainee.submittedAt.toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[trainee.status]}>{statusTranslation[trainee.status]}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  {trainee.status === 'pending' && (
                    <form className="inline-flex gap-2">
                       <Button formAction={async () => { await approveTrainee(trainee.id) }} size="sm" variant="outline">
                         <Check className="h-4 w-4 mr-2" /> Approuver
                       </Button>
                       <Button formAction={async () => { await rejectTrainee(trainee.id) }} size="sm" variant="destructive">
                         <X className="h-4 w-4 mr-2" /> Rejeter
                       </Button>
                    </form>
                  )}
                   {trainee.status === 'approved' && (
                    <form className="inline-flex">
                       <Button formAction={async () => { await rejectTrainee(trainee.id) }} size="sm" variant="destructive">
                         <X className="h-4 w-4 mr-2" /> Rejeter
                       </Button>
                    </form>
                  )}
                   {trainee.status === 'rejected' && (
                    <form className="inline-flex">
                       <Button formAction={async () => { await approveTrainee(trainee.id) }} size="sm" variant="outline">
                         <Check className="h-4 w-4 mr-2" /> Approuver
                       </Button>
                    </form>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
