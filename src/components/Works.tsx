import Section from './Section';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
}

const ProjectCard = ({ title, description, role, features, technologies, imageUrl }: ProjectCardProps) => (
  <div className="bg-[#f5f5f5] rounded-lg border-2 border-gray-900 overflow-hidden">
    <div className="aspect-[3/2] relative bg-gray-200">
      <Image 
        src={imageUrl} 
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-8 space-y-6">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      
      <div className="space-y-2">
        <h4 className="text-gray-900 font-medium">Short Description:</h4>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="space-y-2">
        <h4 className="text-gray-900 font-medium">My Role:</h4>
        <p className="text-gray-600">{role}</p>
      </div>

      <div className="space-y-2">
        <h4 className="text-gray-900 font-medium">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-start gap-2">
              <span className="mt-1.5">
                <svg className="w-3 h-3 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-gray-900 font-medium mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white border border-gray-900 rounded-full text-sm text-gray-900"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Works = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "An innovative web application designed to streamline task management for small teams, enhancing productivity and collaboration.",
      role: "Lead Developer & UI/UX Designer. Responsible for the full-stack development, from initial concept and wireframing to deployment. Implemented core features and ensured a responsive user interface.",
      features: [
        "Real-time collaboration on tasks",
        "Drag-and-drop interface for task prioritization",
        "Automated notification system",
        "User authentication and role management"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
      imageUrl: "/project-alpha.jpg"
    },
    {
      title: "Project Alpha",
      description: "An innovative web application designed to streamline task management for small teams, enhancing productivity and collaboration.",
      role: "Lead Developer & UI/UX Designer. Responsible for the full-stack development, from initial concept and wireframing to deployment. Implemented core features and ensured a responsive user interface.",
      features: [
        "Real-time collaboration on tasks",
        "Drag-and-drop interface for task prioritization",
        "Automated notification system",
        "User authentication and role management"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
      imageUrl: "/project-alpha.jpg"
    },
    {
      title: "Project Alpha",
      description: "An innovative web application designed to streamline task management for small teams, enhancing productivity and collaboration.",
      role: "Lead Developer & UI/UX Designer. Responsible for the full-stack development, from initial concept and wireframing to deployment. Implemented core features and ensured a responsive user interface.",
      features: [
        "Real-time collaboration on tasks",
        "Drag-and-drop interface for task prioritization",
        "Automated notification system",
        "User authentication and role management"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
      imageUrl: "/project-alpha.jpg"
    },
    // Add more projects here
  ];

  return (
    <Section id="portfolio" title="Recent Works">
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Works; 