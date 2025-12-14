import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coins } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'كيف نعمل', path: '/how-it-works' },
    { label: 'لماذا تستثمر', path: '/why-invest' },
    { label: 'المدونة', path: '/blog' },
    { label: 'الأسئلة الشائعة', path: '/help' },
    { label: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-light bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-text-main">رمز</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? 'text-primary font-bold' : 'text-text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="hidden lg:block text-sm font-bold text-text-main hover:text-primary transition-colors px-4">
            تسجيل الدخول
          </button>
          <button className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5">
            سجل اهتمامك
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-main hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-border-light shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 border-b border-gray-50 ${
                  isActive(link.path) ? 'text-primary' : 'text-text-main'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full h-10 rounded-lg border border-gray-200 text-text-main font-bold">
                تسجيل الدخول
              </button>
              <button className="w-full h-10 rounded-lg bg-primary text-white font-bold">
                سجل اهتمامك
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;