export type Trainee = {
  id: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
};

export type CourseModule = {
  id: string;
  slug: string;
  title: string;
  description: string;
  videoUrl: string; // Google Drive embed link
  resources: {
    name: string;
    type: 'pdf' | 'blueprint';
    url: string;
  }[];
};

export type Course = {
  title: string;
  description: string;
  modules: CourseModule[];
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarImageId: string;
};
