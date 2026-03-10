import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const root = document.documentElement;

function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(() => root.classList.contains('dark'));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 350);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDark]);

  const toggleTheme = () => {
    const nextIsDark = !root.classList.contains('dark');

    root.classList.add('theme-transition');

    root.classList.toggle('dark', nextIsDark);
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      className={`rounded-full p-2 text-secondary-600 transition hover:bg-primary-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400 ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Enable light mode' : 'Enable dark mode'}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default ThemeToggle;
