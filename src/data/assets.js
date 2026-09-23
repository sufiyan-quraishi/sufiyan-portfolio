// ============================================================
// CENTRAL ASSET CONFIGURATION
// ============================================================
// Every image / file used across the site is imported ONCE here.
// To replace the profile photo, resume, project screenshots or
// certificate image, just swap the file in src/assets/... and,
// if the filename changes, update the import path below.
// No other file in the project should import an asset directly.
// ============================================================

import profilePhoto from '../assets/profile/mohammad-sufiyan.jpg';

import resumePdf from '../assets/resume/Mohammad_Sufiyan_Resume.pdf';

import eduManageHeroDark from '../assets/projects/edumanage/hero-dark.jpg';
import eduManageHeroLight from '../assets/projects/edumanage/hero-light.jpg';
import eduManageHowItWorks from '../assets/projects/edumanage/how-it-works.jpg';
import eduManageAdminCenter from '../assets/projects/edumanage/admin-control-center.jpg';

import resumeAiHero from '../assets/projects/resumeai/hero.jpg';
import resumeAiAbout from '../assets/projects/resumeai/about.jpg';
import resumeAiWorkflow from '../assets/projects/resumeai/workflow.jpg';
import resumeAiTechStack from '../assets/projects/resumeai/tech-stack.jpg';

import certJavaFullStack from '../assets/certificates/java-fullstack-simplilearn.jpg';

export const assets = {
  profile: {
    photo: profilePhoto,
  },
  resume: {
    pdf: resumePdf,
    fileName: 'Mohammad_Sufiyan_Resume.pdf',
  },
  projects: {
    eduManage: {
      // First image is used as the large "featured" screenshot.
      gallery: [
        { src: eduManageHeroDark, caption: 'Landing page — dark mode' },
        { src: eduManageAdminCenter, caption: 'Admin Control Center — core operational modules' },
        { src: eduManageHeroLight, caption: 'Landing page — light mode' },
        { src: eduManageHowItWorks, caption: 'How It Works — enrollment to certification flow' },
      ],
      cover: eduManageAdminCenter,
    },
    resumeAi: {
      gallery: [
        { src: resumeAiHero, caption: 'Home — AI resume & cover letter tool' },
        { src: resumeAiWorkflow, caption: 'Product workflow — draft, tailor, check against the job description' },
        { src: resumeAiAbout, caption: 'About — what the product does' },
        { src: resumeAiTechStack, caption: 'About — how it is built (tech stack)' },
      ],
      cover: resumeAiHero,
    },
  },
  certificates: {
    javaFullStack: certJavaFullStack,
  },
};
