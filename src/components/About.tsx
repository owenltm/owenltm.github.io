import Section from './Section';

const About = () => {
  return (
    <Section id="about-me" title="About Me">
      <div className="space-y-3 text-lg text-gray-600">
        <p>
          I&apos;m <span className="font-semibold text-gray-900">Owen Lwiantoro</span>, 
          a mobile app developer who enjoys turning simple interactions into meaningful 
          digital experiences. I&apos;m passionate about creating apps that respond 
          intuitively and make users&apos; lives easier.
        </p>

        <p>
          My primary focus is on building mobile applications using Flutter and Kotlin. 
          I also work on full-stack projects with Next.js and Laravel, giving me the 
          ability to develop complete solutions from frontend to backend.
        </p>

        <p>
          I&apos;m eager to grow further in mobile development roles where I can contribute 
          to building apps that are both functional and enjoyable.
        </p>

        <p>
          Outside of coding, I unwind by playing racing and puzzle games — a fun way 
          to recharge and keep my problem-solving skills sharp.
        </p>
      </div>
    </Section>
  );
};

export default About; 