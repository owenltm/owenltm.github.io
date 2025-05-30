import { Github, Linkedin, Mail } from 'lucide-react';
import Section from './Section';

const SocialLink = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer" 
    className="flex items-center gap-3 px-4 py-3 bg-[#f5f5f5] border-2 border-gray-900 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
  >
    {icon}
    <span>{label}</span>
  </a>
);

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Contact Form */}
        <div className="bg-[#f5f5f5] rounded-lg border-2 border-gray-900 p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Send me a message
          </h3>
          <p className="text-gray-600 mb-8">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled
              className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Or connect with me on:
          </h3>
          
          <SocialLink 
            icon={<Mail />}
            label="owenlwiantoro01@gmail.com"
            href="mailto:owenlwiantoro01@gmail.com"
          />
          
          <SocialLink 
            icon={<Github />}
            label="owenltm"
            href="https://github.com/owenltm"
          />
          
          <SocialLink 
            icon={<Linkedin />}
            label="Owen Lwiantoro"
            href="https://www.linkedin.com/in/owen-lwiantoro-a62a5b192/"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact; 