import { Mail } from 'lucide-react';
import Section from './Section';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.2.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

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
            icon={<GithubIcon width={24} height={24} />}
            label="owenltm"
            href="https://github.com/owenltm"
          />
          
          <SocialLink 
            icon={<LinkedinIcon width={24} height={24} />}
            label="Owen Lwiantoro"
            href="https://www.linkedin.com/in/owen-lwiantoro-a62a5b192/"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact; 