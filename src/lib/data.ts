import type { Trainee, Course, Testimonial } from '@/lib/types';

export const trainees: Trainee[] = [
  { id: '1', email: 'johndoe@example.com', status: 'approved', submittedAt: new Date('2023-10-01') },
  { id: '2', email: 'janesmith@example.com', status: 'pending', submittedAt: new Date('2023-10-05') },
  { id: '3', email: 'peterjones@example.com', status: 'rejected', submittedAt: new Date('2023-10-03') },
  { id: '4', email: 'sara.williams@example.com', status: 'pending', submittedAt: new Date() },
];

export const course: Course = {
  title: 'Advanced Structural Engineering',
  description: 'Master the principles of structural analysis and design with our comprehensive course. From foundational theories to advanced practical applications, this program is designed to elevate your civil engineering career.',
  modules: [
    {
      id: '1',
      slug: 'introduction-to-structures',
      title: 'Module 1: Introduction to Structures',
      description: 'An overview of structural engineering principles and basic concepts.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Course Syllabus.pdf', type: 'pdf', url: '#' },
        { name: 'Basic Formulas.pdf', type: 'pdf', url: '#' },
      ],
    },
    {
      id: '2',
      slug: 'steel-design',
      title: 'Module 2: Steel Design',
      description: 'Learn about the design of steel structures, including beams, columns, and connections.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Steel Beam Design Guide.pdf', type: 'pdf', url: '#' },
        { name: 'Blueprint-Steel-Frame.pdf', type: 'blueprint', url: '#' },
      ],
    },
    {
      id: '3',
      slug: 'concrete-design',
      title: 'Module 3: Concrete Design',
      description: 'Dive into reinforced concrete design, covering slabs, foundations, and retaining walls.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Reinforced Concrete Manual.pdf', type: 'pdf', url: '#' },
        { name: 'Blueprint-Foundation.pdf', type: 'blueprint', url: '#' },
      ],
    },
    {
        id: '4',
        slug: 'seismic-analysis',
        title: 'Module 4: Seismic Analysis',
        description: 'Understand the effects of earthquakes on structures and how to design for seismic resilience.',
        videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
        resources: [
          { name: 'Seismic Design Principles.pdf', type: 'pdf', url: '#' },
          { name: 'Blueprint-Seismic-Retrofit.pdf', type: 'blueprint', url: '#' },
        ],
      },
  ],
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Michael Chen',
        title: 'Structural Engineer, BuildRight Inc.',
        quote: 'This course was a game-changer for my career. The practical examples and in-depth modules on steel and concrete design were incredibly valuable. Highly recommended!',
        avatarImageId: 'testimonial-avatar-1',
    },
    {
        id: '2',
        name: 'Dr. Emily Carter',
        title: 'University Professor',
        quote: 'As an educator, I\'m impressed by the comprehensive curriculum. It bridges the gap between academic theory and real-world engineering challenges perfectly.',
        avatarImageId: 'testimonial-avatar-2',
    },
    {
        id: '3',
        name: 'David Lee',
        title: 'Project Manager, Apex Constructions',
        quote: 'The content is top-notch and directly applicable to my daily work. The section on seismic analysis helped my team tackle a complex project with confidence.',
        avatarImageId: 'testimonial-avatar-3',
    }
]
