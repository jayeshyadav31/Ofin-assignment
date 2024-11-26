import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-sm font-medium hover:text-emerald-600 transition-colors duration-200">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <li>
    <Link 
      to={to} 
      className="block py-2 hover:text-emerald-600 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/bicycles', label: 'BICYCLES' },
    { path: '/accessories', label: 'ACCESSORIES' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ];

  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header className="text-gray-800 sticky top-0 z-50 bg-black backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-emerald-700 w-24"><img src="/assets/image.png" alt="" /></span>
          </Link>
          
          <nav className="hidden text-white md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <NavLink key={path} to={path}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="flex items-center space-x-2 hover:text-emerald-600 transition-colors duration-200">
              <span className="text-sm font-medium text-white">$0.00</span>
              <ShoppingCart className="h-5 w-5 text-white" />
            </Link>
            <button
              className="md:hidden hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 md:hidden bg-white rounded-lg shadow-lg p-4">
            <ul className="space-y-3">
              {navLinks.map(({ path, label }) => (
                <MobileNavLink key={path} to={path} onClick={handleMenuClose}>
                  {label}
                </MobileNavLink>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;