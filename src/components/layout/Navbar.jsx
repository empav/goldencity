import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 dark:shadow-gray-950/20">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <svg width="30" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="20" r="10" stroke="#0682ff" />
                <circle cx="15" cy="20" r="6" stroke="#0682ff" strokeWidth="3" />
              </svg>
              <span className="mt-1.5 text-2xl font-bold text-primary-600 dark:text-primary-400">GoldenCity</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <button className="btn dark:border-gray-700 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600">
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="text-secondary-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden dark:bg-gray-900">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-600 hover:bg-primary-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="block bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
