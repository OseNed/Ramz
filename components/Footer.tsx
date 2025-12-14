import React from 'react';
import { Coins, Globe, AtSign, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-light bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-2xl font-black text-text-main">
              <Coins className="text-primary w-8 h-8" />
              <span>رمز</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              المنصة الرائدة في المملكة لتمكين الأفراد من الاستثمار في العقارات النوعية من خلال تقنية الملكية الجزئية.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><AtSign className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-text-main">الشركة</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link to="/" className="hover:text-primary transition-colors">عن رمز</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">الوظائف</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">المدونة</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-text-main">الاستثمار</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link to="#" className="hover:text-primary transition-colors">تصفح الفرص</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">كيف نعمل؟</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">دليل المستثمر</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-text-main">النشرة البريدية</h4>
            <p className="text-sm text-text-muted mb-4">اشترك ليصلك جديد الفرص العقارية</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full rounded-lg border border-border-light bg-background-light px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined rtl:rotate-180">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border-light pt-8 text-center text-xs text-text-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 شركة رمز العقارية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-main">سياسة الخصوصية</a>
            <a href="#" className="hover:text-text-main">شروط الاستخدام</a>
            <a href="#" className="hover:text-text-main">إخلاء المسؤولية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;