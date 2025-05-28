import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-[#f5f5f5] text-gray-900 pt-24 md:pt-0">
      <div className="w-full">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                Mobile App Developer
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                I build full-stack solutions — mobile, web, and everything in between.
              </p>
            </div>
            <div className="flex gap-4 pt-4 justify-center">
              <Link 
                href="#works" 
                className="px-6 py-3 bg-gray-900 text-gray-50 rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="#about-me" 
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get to Know Me
              </Link>
            </div>
          </div>

          {/*
          <div className="flex-1 w-full max-w-md aspect-square bg-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Image Placeholder
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 