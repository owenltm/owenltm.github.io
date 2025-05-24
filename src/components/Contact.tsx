import Section from './Section';

const SocialLink = ({ icon, label, href }: { icon: string, label: string, href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer" 
    className="flex items-center gap-3 px-4 py-3 bg-[#f5f5f5] border-2 border-gray-900 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
  >
    <span className="text-xl">{icon}</span>
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
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
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
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled
              className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed"
            >
              Send Message (Disabled)
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Or connect with me on:
          </h3>
          
          <SocialLink 
            icon="✉️"
            label="your.email@example.com"
            href="mailto:your.email@example.com"
          />
          
          <SocialLink 
            icon="🐙"
            label="github.com/yourusername"
            href="https://github.com/yourusername"
          />
          
          <SocialLink 
            icon="💼"
            label="linkedin.com/in/yourprofile"
            href="https://linkedin.com/in/yourprofile"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact; 