import { assets } from './assets';

// category values used by the client-side filter: 'fullstack' | 'java' | 'react' | 'ai'
export const projects = [
  {
    id: 'edumanage',
    featured: true,
    title: 'EduManage',
    subtitle: 'Institute Management System',
    description:
      'A multi-role institute management platform designed to bring administrative operations, trainers and students into one integrated digital environment.',
    category: ['fullstack', 'java'],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'MySQL', 'Spring Security', 'JWT', 'React.js'],
    liveUrl: null, // set a real URL here when deployed; left null so no fake link is shown
    githubUrl: 'https://github.com/sufiyan-quraishi/Edumange',
    cover: assets.projects.eduManage.cover,
    gallery: assets.projects.eduManage.gallery,
    features: [
      { title: 'Admin Dashboard', description: 'Central control center for every operational module.' },
      { title: 'Inquiry Management', description: 'Track and review prospective student inquiries.' },
      { title: 'Student Approvals', description: 'Verify applicants and approve admission requests into batches.' },
      { title: 'Trainer Management', description: 'Manage mentor profiles, specialties and staff records.' },
      { title: 'Student Directory', description: 'Access the enrolled student roster and course history.' },
      { title: 'Batch Scheduling', description: 'Create course batches and set session timings.' },
      { title: 'Attendance Logs', description: 'Monitor daily check-ins and batch-wise attendance.' },
      { title: 'Reports', description: 'Generate operational and enrollment reports.' },
    ],
    caseStudy: {
      overview:
        'EduManage unites admin staff, trainers and students inside a single institute management workflow — replacing scattered spreadsheets and manual approvals with one connected system.',
      problem:
        'Training institutes typically manage inquiries, admissions, batch scheduling and attendance across disconnected tools, which makes it hard to track a student from first inquiry through to certification.',
      solution:
        'A role-based platform (Admin, Institute, Trainer, Student) with a secure authentication and approval workflow, giving each role the exact tools it needs — from reviewing inquiries to logging attendance.',
      keyFeatures: [
        'Role-based access for Admin, Institute, Trainer and Student accounts',
        'Inquiry-to-admission workflow with approval gating',
        'Batch scheduling and trainer assignment',
        'Attendance tracking and operational reporting',
      ],
      techStack:
        'Built with Java and Spring Boot on the backend, using Hibernate and JPA for a scalable, layered data model, MySQL/PostgreSQL for storage, and Spring Security with JWT for authentication and authorization.',
      interfaceShowcase:
        'The admin control center brings every operational module — inquiries, registrations, trainers, students, batches, attendance — into one dashboard, with a matching public-facing site for prospective students.',
      developmentApproach:
        'Designed around a layered architecture with clear separation between controllers, services and repositories, following REST conventions for all API endpoints.',
      futureScope:
        'Planned areas of expansion include deeper reporting/analytics, task management for trainers, and account self-service tools.',
    },
  },
  {
    id: 'ai-resume-builder',
    featured: true,
    title: 'AI Resume Builder & ATS Analyzer',
    subtitle: 'Resume AI',
    description:
      'An AI-powered resume platform designed to help users create resumes, tailor content to job descriptions and analyze resumes for ATS compatibility.',
    category: ['fullstack', 'java', 'react', 'ai'],
    tech: [
      'Java',
      'Spring Boot',
      'React.js',
      'Spring Security',
      'JWT',
      'REST APIs',
      'AI/LLM Integration',
      'Apache POI',
      'PDFBox',
      'Maven',
    ],
    liveUrl: 'https://resume-ai-frontend-pdag.onrender.com',
    githubUrl: null,
    githubBackend: 'https://github.com/sufiyan-quraishi/resume-ai-backend',
    githubFrontend: 'https://github.com/sufiyan-quraishi/resume-ai-frontend',
    cover: assets.projects.resumeAi.cover,
    gallery: assets.projects.resumeAi.gallery,
    features: [
      { title: 'Resume Builder', description: 'Fill in experience, projects, education and skills to draft a clean resume.' },
      { title: 'Cover Letter Generation', description: 'Generate a cover letter tailored to a specific job description.' },
      { title: 'ATS Analysis', description: 'Upload an existing resume and get an ATS-style compatibility score.' },
      { title: 'Job Description Matching', description: 'Match resume content against a pasted job description.' },
      { title: 'Resume Parsing', description: 'Extract text from existing PDF/Word resumes.' },
      { title: 'PDF / Word Export', description: 'Export the final resume as PDF, DOCX or Markdown.' },
    ],
  },
];
