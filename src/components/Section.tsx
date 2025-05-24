interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`w-full flex items-center bg-[#f5f5f5] py-16 md:py-24 ${className}`}
    >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12">
            {title}
          </h2>
          {children}
        </div>
    </section>
  );
};

export default Section; 