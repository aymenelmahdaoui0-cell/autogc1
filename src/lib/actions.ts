"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

// NOTE: In a real application, you would use a database.
// For this demo, we're logging actions to the console.

const emailSchema = z.string().email({ message: "Adresse e-mail invalide." });

export async function registerTrainee(prevState: any, formData: FormData) {
  const validatedFields = emailSchema.safeParse(formData.get("email"));

  if (!validatedFields.success) {
    return {
      message: "Veuillez entrer une adresse e-mail valide.",
    };
  }

  const email = validatedFields.data;
  console.log("Nouvelle inscription de stagiaire:", email);
  // TODO: Add logic to save the email to a database (e.g., Firebase, Supabase)
  // Example: await db.trainees.create({ data: { email, status: 'pending' } });

  return { message: `Merci ! Votre demande d'inscription a bien été reçue.` };
}


export async function approveTrainee(traineeId: string) {
    console.log(`Approbation du stagiaire avec l'ID : ${traineeId}`);
    // TODO: Add logic to update trainee status to 'approved' in the database.
    // Example: await db.trainees.update({ where: { id: traineeId }, data: { status: 'approved' } });
    revalidatePath("/admin");
    return { message: "Stagiaire approuvé." };
}

export async function rejectTrainee(traineeId: string) {
    console.log(`Rejet du stagiaire avec l'ID : ${traineeId}`);
    // TODO: Add logic to update trainee status to 'rejected' in the database.
    // Example: await db.trainees.update({ where: { id: traineeId }, data: { status: 'rejected' } });
    revalidatePath("/admin");
    return { message: "Stagiaire rejeté." };
}


const contentSchema = z.object({
    moduleId: z.string(),
    videoUrl: z.string().url({ message: "Veuillez entrer une URL valide." }),
});

export async function updateModuleContent(prevState: any, formData: FormData) {
    const validatedFields = contentSchema.safeParse({
        moduleId: formData.get("moduleId"),
        videoUrl: formData.get("videoUrl"),
    });

    if (!validatedFields.success) {
        return {
            message: "Données invalides. Veuillez vérifier le formulaire et réessayer.",
        };
    }
    
    const { moduleId, videoUrl } = validatedFields.data;
    console.log(`Mise à jour du module ${moduleId} avec l'URL vidéo : ${videoUrl}`);
    // TODO: Add logic to update the module's videoUrl in the database.
    // Example: await db.courseModule.update({ where: { id: moduleId }, data: { videoUrl } });

    revalidatePath("/admin");
    revalidatePath(`/dashboard/modules/${moduleId}`); // Assuming slug is same as id for simplicity

    return { message: "Contenu du module mis à jour avec succès." };
}
