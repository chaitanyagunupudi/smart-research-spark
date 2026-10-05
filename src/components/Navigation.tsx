import { NavLink } from '@/components/NavLink';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Research Areas', path: '/research' },
  { name: 'People', path: '/people' },
  { name: 'Publications', path: '/publications' },
  { name: 'Patents', path: '/patents' },
  { name: 'Open Source', path: '/opensource' },
  { name: 'Membership', path: '/membership' },
  { name: 'Log In', path: '/login' },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lab-darker/95 backdrop-blur-sm border-b border-lab-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-lab-cyan to-lab-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">SPARK LABoratory</h1>
              <p className="text-lab-cyan-light text-xs">Smart Processing and Research</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
                activeClassName="text-lab-cyan font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lab-cyan group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-lab-dark/50 rounded transition-colors"
                activeClassName="text-lab-cyan bg-lab-dark/50 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
