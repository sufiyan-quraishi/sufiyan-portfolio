// No percentage bars — just what it is, what category it belongs to,
// and a short one-line description of how it's used.
export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Core Java', description: 'Primary language for backend logic and OOP design.' },
      { name: 'JavaScript', description: 'Client-side logic and interactive UI behaviour.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', description: 'Building and structuring production-ready REST services.' },
      { name: 'Spring MVC', description: 'Request handling and layered application architecture.' },
      { name: 'Hibernate', description: 'ORM mapping between Java objects and relational tables.' },
      { name: 'JPA', description: 'Standardised persistence layer on top of Hibernate.' },
      { name: 'REST APIs', description: 'Designing clean, resource-based HTTP APIs.' },
      { name: 'Microservices', description: 'Splitting applications into independently deployable services.' },
      { name: 'Spring Security', description: 'Authentication and authorization for web applications.' },
      { name: 'JWT', description: 'Stateless, token-based session and access control.' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React.js', description: 'Building component-driven, interactive user interfaces.' },
      { name: 'HTML', description: 'Semantic structure and accessible markup.' },
      { name: 'CSS', description: 'Responsive layout, theming and visual design.' },
      { name: 'Bootstrap', description: 'Rapid, consistent UI scaffolding.' },
      { name: 'JavaScript', description: 'DOM interaction and client-side application logic.' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: [{ name: 'MySQL', description: 'Relational schema design and query optimisation.' }],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Eclipse', description: 'Java development and debugging.' },
      { name: 'VS Code', description: 'Frontend and general-purpose development.' },
      { name: 'Git', description: 'Version control for day-to-day development.' },
      { name: 'GitHub', description: 'Source hosting, collaboration and project tracking.' },
      { name: 'Postman', description: 'API testing and request/response verification.' },
      { name: 'Maven', description: 'Dependency management and project builds.' },
    ],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: 'BrainCircuit',
    skills: [
      { name: 'OOP', description: 'Object-oriented design principles applied in real projects.' },
      { name: 'Multithreading', description: 'Concurrent execution and thread-safe design.' },
      { name: 'Exception Handling', description: 'Robust, predictable error handling.' },
      { name: 'Design Patterns', description: 'Reusable solutions to common architectural problems.' },
      { name: 'Collection Framework', description: 'Efficient data structures for everyday Java tasks.' },
    ],
  },
];
