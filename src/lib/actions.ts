"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

// NOTE: In a real application, you would use a database.
// For this demo, we're logging actions to the console.

const emailSchema = z.string().email({ message: "Invalid email address." });

export async function registerTrainee(prevState: any, formData: FormData) {
  const validatedFields = emailSchema.safeParse(formData.get("email"));

  if (!validatedFields.success) {
    return {
      message: "Please enter a valid email address.",
    };
  }

  const email = validatedFields.data;
  console.log("New trainee registration:", email);
  // TODO: Add logic to save the email to a database (e.g., Firebase, Supabase)
  // Example: await db.trainees.create({ data: { email, status: 'pending' } });

  return { message: `Thank you! Your request to join has been received.` };
}


export async function approveTrainee(traineeId: string) {
    console.log(`Approving trainee with ID: ${traineeId}`);
    // TODO: Add logic to update trainee status to 'approved' in the database.
    // Example: await db.trainees.update({ where: { id: traineeId }, data: { status: 'approved' } });
    revalidatePath("/admin");
    return { message: "Trainee approved." };
}

export async function rejectTrainee(traineeId: string) {
    console.log(`Rejecting trainee with ID: ${traineeId}`);
    // TODO: Add logic to update trainee status to 'rejected' in the database.
    // Example: await db.trainees.update({ where: { id: traineeId }, data: { status: 'rejected' } });
    revalidatePath("/admin");
    return { message: "Trainee rejected." };
}


const contentSchema = z.object({
    moduleId: z.string(),
    videoUrl: z.string().url({ message: "Please enter a valid URL." }),
});

export async function updateModuleContent(prevState: any, formData: FormData) {
    const validatedFields = contentSchema.safeParse({
        moduleId: formData.get("moduleId"),
        videoUrl: formData.get("videoUrl"),
    });

    if (!validatedFields.success) {
        return {
            message: "Invalid data. Please check the form and try again.",
        };
    }
    
    const { moduleId, videoUrl } = validatedFields.data;
    console.log(`Updating module ${moduleId} with video URL: ${videoUrl}`);
    // TODO: Add logic to update the module's videoUrl in the database.
    // Example: await db.courseModule.update({ where: { id: moduleId }, data: { videoUrl } });

    revalidatePath("/admin");
    revalidatePath(`/dashboard/modules/${moduleId}`); // Assuming slug is same as id for simplicity

    return { message: "Module content updated successfully." };
}
