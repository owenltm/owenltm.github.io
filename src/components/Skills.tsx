import Section from './Section';

const SkillCard = ({ title, items }: { title: string, items: { text: string, highlight?: string[] }[] }) => (
  <div className="bg-[#f5f5f5] rounded-lg p-8 border-2 border-gray-900 text-gray-900">
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => {
        const parts = item.text.split(new RegExp(`(${item.highlight?.join('|')})`));
        return (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5">
              <svg className="w-4 h-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>
              {parts.map((part, i) => (
                item.highlight?.includes(part) 
                  ? <span key={i} className="text-gray-900 font-semibold">{part}</span>
                  : <span key={i} className="text-gray-600">{part}</span>
              ))}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = {
    mobile: {
      title: "Mobile Development",
      items: [
        {
          text: "Deliver high-quality cross-platform apps using Flutter and Kotlin",
          highlight: ["Flutter", "Kotlin"]
        },
        {
          text: "Write scalable code with clean architecture patterns like MVVM and Bloc",
          highlight: ["MVVM", "Bloc"]
        },
        {
          text: "Prioritize performance, visual consistency, and user-friendly interactions"
        }
      ]
    },
    web: {
      title: "Full-Stack Web Development",
      items: [
        {
          text: "Engineer responsive frontends with Next.js, React, and Tailwind CSS",
          highlight: ["Next.js", "React", "Tailwind CSS"]
        },
        {
          text: "Build robust APIs and backend services using Laravel, MySQL, and Firebase",
          highlight: ["Laravel", "MySQL", "Firebase"]
        },
        {
          text: "Experience with AI-powered features, such as integrating LLMs into apps and chatbots",
          highlight: ["AI-powered features", "LLMs", "apps", "chatbots"]
        }
      ]
    },
    others: {
      title: "Others",
      items: [
        {
          text: "Collaborative workflows with Git and Figma",
          highlight: ["Git", "Figma"]
        },
        {
          text: "AI Language Model integrations (e.g., integrating AI with chatbots)",
          highlight: ["AI Language Model", "chatbots"]
        }
      ]
    }
  };

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <SkillCard {...skillsData.mobile} />
        <SkillCard {...skillsData.web} />
        <SkillCard {...skillsData.others} />
      </div>
    </Section>
  );
};

export default Skills; 