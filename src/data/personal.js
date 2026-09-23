// Edit your core personal details here — every component reads from this file.
export const personal = {
  name: 'Mohammad Sufiyan',
  title: 'Full Stack Developer',
  positioning: 'Software Developer / Full Stack Developer',
  email: 'sufiquraishiiii@gmail.com',
  phoneDisplay: '+91 8855815751',
  phoneIntl: '918855815751', // used for wa.me and tel: links, no + or spaces
  location: 'Amravati, Maharashtra, India',
  heroBadge: 'SOFTWARE DEVELOPER',
  heroHeadingPrefix: 'Building Digital Experiences',
  heroHeadingHighlight: 'That Solve Real Problems.',
  heroDescription:
    "Hi, I'm Mohammad Sufiyan — a Full Stack Developer focused on building practical, scalable and user-friendly software solutions.",
  aboutIntro:
    'Enthusiastic Full Stack Developer with hands-on experience building web applications using Java, Spring Boot, React.js and REST APIs. Interested in creating scalable, secure and practical software solutions while continuously improving technical and problem-solving skills.',
  whatsappDefaultMessage: 'Hi Sufiyan, I visited your portfolio and would like to connect with you.',
  whatsappProjectMessage: 'Hi Sufiyan, I saw your portfolio and would like to discuss a project with you.',
};

export const links = {
  whatsapp: `https://wa.me/${personal.phoneIntl}?text=${encodeURIComponent(personal.whatsappDefaultMessage)}`,
  whatsappProject: `https://wa.me/${personal.phoneIntl}?text=${encodeURIComponent(personal.whatsappProjectMessage)}`,
  email: `mailto:${personal.email}`,
  phone: `tel:+${personal.phoneIntl}`,
};
