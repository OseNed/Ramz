import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <div className="w-full bg-white border-b border-border-light py-12 lg:py-20">
        <div className="px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-accent-gold font-bold text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent-gold block"></span> تواصل معنا
            </span>
            <h1 className="text-text-main text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              نحن هنا لمساعدتك في <br/> <span className="text-primary relative inline-block">رحلتك الاستثمارية</span>
            </h1>
            <p className="text-text-muted text-lg lg:text-xl font-normal leading-relaxed mt-4 max-w-2xl">
              هل لديك استفسارات حول ترميز الأصول العقارية أو الفرص المتاحة؟ فريقنا من الخبراء جاهز للإجابة على جميع تساؤلاتك.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-sm border border-border-light p-6 md:p-10">
              <h3 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-2">
                <Mail className="text-primary w-6 h-6" />
                أرسل لنا رسالة
              </h3>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-text-main text-sm font-bold">الاسم الكامل</span>
                    <input className="w-full rounded-xl border border-gray-200 bg-white h-14 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="أدخل اسمك الكامل" type="text" />
                  </label>
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-text-main text-sm font-bold">البريد الإلكتروني</span>
                    <input className="w-full rounded-xl border border-gray-200 bg-white h-14 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="name@example.com" type="email" />
                  </label>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-text-main text-sm font-bold">رقم الهاتف</span>
                    <div className="relative flex items-center">
                      <input className="w-full rounded-xl border border-gray-200 bg-white h-14 pl-4 pr-16 text-right text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all" dir="ltr" placeholder="5X XXX XXXX" type="tel" />
                      <div className="absolute right-0 top-0 h-full flex items-center justify-center px-3 border-l border-gray-200 bg-gray-50 rounded-r-xl text-text-muted font-english font-medium text-sm">
                        +966
                      </div>
                    </div>
                  </label>
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-text-main text-sm font-bold">نوع الاستفسار</span>
                    <select className="w-full rounded-xl border border-gray-200 bg-white h-14 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary text-text-main transition-all">
                      <option disabled selected value="">اختر نوع الاستفسار</option>
                      <option value="investment">استفسار استثماري</option>
                      <option value="development">للمطورين العقاريين</option>
                      <option value="support">الدعم الفني</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-text-main text-sm font-bold">نص الرسالة</span>
                  <textarea className="w-full rounded-xl border border-gray-200 bg-white p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all" placeholder="اكتب تفاصيل استفسارك هنا..." rows={5}></textarea>
                </label>

                <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white font-bold h-14 px-8 text-base shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5" type="button">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-8">
            <div className="bg-background-dark text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">معلومات التواصل</h3>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">المقر الرئيسي</p>
                    <p className="font-medium text-lg leading-snug">برج المملكة، الطابق 24<br/>الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">اتصل بنا</p>
                    <p className="font-medium text-lg text-right font-english" dir="ltr">+966 11 200 3000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">البريد الإلكتروني</p>
                    <p className="font-medium text-lg font-english">support@ramz.sa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border-light shadow-sm group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0vaWz2Ogy4JoY8dH7aekHVLHwjn0KNcBzWV_bmUVAqgKHlLhUYlUoaVQnilUnCk4PnZ3EKEkoXMmqxPjvWlIGbtUMAj7o1M6CFtp5mr3vn18ifTPVbJu2JI5onpGmPWfcxeBeym8l2RmqktAgAxDrZEAsNxHOCkNOTjtp1E2iwVKPli-X1D3PBlnLy2EimjQmVY3lmixX84edteUaiGOvInRQuwqoMRCzzm4yRnwPYYNqbvbSJqBXLx3PL41iNlPQSQZ-VYPmqMi" alt="Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <button className="text-white text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                  <MapPin className="text-primary w-4 h-4" />
                  عرض على الخريطة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;