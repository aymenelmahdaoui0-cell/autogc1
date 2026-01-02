"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { updateModuleContent } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { course } from '@/lib/data';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Updating...' : 'Update Module'}
    </Button>
  );
}

export function ContentManagement() {
  const initialState = { message: "" };
  const [state, formAction] = useFormState(updateModuleContent, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.message.includes("Invalid")) {
        toast({
            title: "Success",
            description: state.message,
        });
        formRef.current?.reset();
    } else if (state?.message) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        })
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
        <CardDescription>
          Update the Google Drive video links for course modules.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="moduleId">Select Module</Label>
            <Select name="moduleId" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a module to update" />
              </SelectTrigger>
              <SelectContent>
                {course.modules.map((module) => (
                  <SelectItem key={module.id} value={module.id}>
                    {module.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="videoUrl">New Google Drive Video URL</Label>
            <Input
              id="videoUrl"
              name="videoUrl"
              type="url"
              placeholder="https://drive.google.com/file/d/.../preview"
              required
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
