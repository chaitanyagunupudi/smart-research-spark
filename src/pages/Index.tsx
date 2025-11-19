import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          SPARK Artificial Intelligence Laboratory
        </h1>
        <p className="text-xl md:text-3xl text-lab-cyan-light max-w-4xl mx-auto mb-12 font-light tracking-wide">
          Smart Processing and Research
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-16">
          Advancing AI, Edge Computing, and Blockchain Systems
        </p>
        
        {/* Red accent line similar to the reference */}
        <div className="h-1 w-32 bg-lab-red mx-auto mb-12" />
        
        {/* Quick navigation buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/research">
            <button className="px-6 py-3 bg-lab-cyan/10 hover:bg-lab-cyan/20 text-white border border-lab-cyan/30 rounded transition-all duration-300">
              Research Areas
            </button>
          </Link>
          <Link to="/publications">
            <button className="px-6 py-3 bg-lab-cyan/10 hover:bg-lab-cyan/20 text-white border border-lab-cyan/30 rounded transition-all duration-300">
              Publications
            </button>
          </Link>
          <Link to="/people">
            <button className="px-6 py-3 bg-lab-cyan/10 hover:bg-lab-cyan/20 text-white border border-lab-cyan/30 rounded transition-all duration-300">
              Our Team
            </button>
          </Link>
          <Link to="/patents">
            <button className="px-6 py-3 bg-lab-cyan/10 hover:bg-lab-cyan/20 text-white border border-lab-cyan/30 rounded transition-all duration-300">
              Patents
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
