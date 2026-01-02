import type { Trainee, Course, Testimonial } from '@/lib/types';

export const trainees: Trainee[] = [
  { id: '1', email: 'johndoe@example.com', status: 'approved', submittedAt: new Date('2023-10-01') },
  { id: '2', email: 'janesmith@example.com', status: 'pending', submittedAt: new Date('2023-10-05') },
  { id: '3', email: 'peterjones@example.com', status: 'rejected', submittedAt: new Date('2023-10-03') },
  { id: '4', email: 'sara.williams@example.com', status: 'pending', submittedAt: new Date() },
];

export const course: Course = {
  title: 'Ingénierie Structurale Avancée',
  description: 'Maîtrisez les principes de l\'analyse et de la conception des structures avec notre cours complet. Des théories fondamentales aux applications pratiques avancées, ce programme est conçu pour faire progresser votre carrière en génie civil.',
  modules: [
    {
      id: '1',
      slug: 'introduction-to-structures',
      title: 'Module 1: Introduction aux Structures',
      description: 'Un aperçu des principes de l\'ingénierie structurale et des concepts de base.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Syllabus du cours.pdf', type: 'pdf', url: '#' },
        { name: 'Formules de base.pdf', type: 'pdf', url: '#' },
      ],
    },
    {
      id: '2',
      slug: 'steel-design',
      title: 'Module 2: Conception en Acier',
      description: 'Apprenez la conception des structures en acier, y compris les poutres, les colonnes et les connexions.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Guide de conception de poutre en acier.pdf', type: 'pdf', url: '#' },
        { name: 'Plan-Structure-Acier.pdf', type: 'blueprint', url: '#' },
      ],
    },
    {
      id: '3',
      slug: 'concrete-design',
      title: 'Module 3: Conception en Béton',
      description: 'Plongez dans la conception en béton armé, couvrant les dalles, les fondations et les murs de soutènement.',
      videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
      resources: [
        { name: 'Manuel du béton armé.pdf', type: 'pdf', url: '#' },
        { name: 'Plan-Fondation.pdf', type: 'blueprint', url: '#' },
      ],
    },
    {
        id: '4',
        slug: 'seismic-analysis',
        title: 'Module 4: Analyse Sismique',
        description: 'Comprenez les effets des tremblements de terre sur les structures et comment concevoir pour la résilience sismique.',
        videoUrl: 'https://drive.google.com/file/d/1B4_3YV0-e_y_uPz2yLQrDyABrtoZCaDc/preview',
        resources: [
          { name: 'Principes de conception sismique.pdf', type: 'pdf', url: '#' },
          { name: 'Plan-Rénovation-Sismique.pdf', type: 'blueprint', url: '#' },
        ],
      },
  ],
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Michael Chen',
        title: 'Ingénieur en structure, BuildRight Inc.',
        quote: 'Ce cours a changé la donne pour ma carrière. Les exemples pratiques et les modules approfondis sur la conception en acier et en béton ont été incroyablement précieux. Fortement recommandé!',
        avatarImageId: 'testimonial-avatar-1',
    },
    {
        id: '2',
        name: 'Dr. Emily Carter',
        title: 'Professeure d\'université',
        quote: 'En tant qu\'éducatrice, je suis impressionnée par le programme complet. Il comble parfaitement le fossé entre la théorie académique et les défis du monde réel de l\'ingénierie.',
        avatarImageId: 'testimonial-avatar-2',
    },
    {
        id: '3',
        name: 'David Lee',
        title: 'Chef de projet, Apex Constructions',
        quote: 'Le contenu est de premier ordre et directement applicable à mon travail quotidien. La section sur l\'analyse sismique a aidé mon équipe à aborder un projet complexe avec confiance.',
        avatarImageId: 'testimonial-avatar-3',
    }
]
