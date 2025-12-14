import React, { useState } from 'react';
import { Search, ChevronDown, MessageCircle, Mail } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ما هو الحد الأدنى للاستثمار في فرص رمز؟",
      a: "نسعى في رمز لتمكين الجميع من الاستثمار العقاري. يبدأ الحد الأدنى للاستثمار في معظم الفرص المطروحة من 1,000 ريال سعودي فقط، مما يتيح لك بناء محفظة عقارية متنوعة برأس مال مرن."
    },
    {
      q: "هل الاستثمار عبر منصة رمز متوافق مع الشريعة؟",
      a: "نعم، جميع الفرص الاستثمارية المطروحة على منصة رمز تخضع لمراجعة دقيقة من قبل لجنة شرعية متخصصة لضمان توافق هياكلها وعقودها مع أحكام الشريعة الإسلامية."
    },
    {
      q: "متى وكيف يتم توزيع عوائد الاستثمار؟",
      a: "تختلف دورة توزيع الأرباح بناءً على نوع الأصل العقاري. بالنسبة للعقارات المدرة للدخل، يتم توزيع عوائد الإيجار بشكل دوري (ربع سنوي أو نصف سنوي) وإيداعها مباشرة في محفظتك الرقمية."
    },
    {
      q: "هل منصة رمز مرخصة؟",
      a: "نعم، منصة رمز هي منصة تقنية مالية تعمل في بيئة منظمة ومتوافقة مع لوائح هيئة السوق المالية (CMA) في المملكة العربية السعودية."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full bg-white py-12 md:py-16 border-b border-border-light">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 border border-primary/20">
            مركز المساعدة
          </div>
          <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight">
            كيف يمكننا مساعدتك؟
          </h1>
          <p className="text-text-muted text-lg max-w-2xl">
            كل ما تحتاج معرفته عن منصة رمز، الاستثمار العقاري، المحفظة الرقمية، والامتثال التنظيمي في مكان واحد.
          </p>
          <div className="w-full max-w-lg mt-4 relative">
            <div className="flex items-center w-full h-14 rounded-xl border border-gray-200 bg-background-light focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all overflow-hidden shadow-sm">
              <div className="flex items-center justify-center px-4 text-primary">
                <Search className="w-6 h-6" />
              </div>
              <input className="w-full h-full bg-transparent border-none focus:ring-0 text-text-main placeholder:text-text-muted text-base px-2" placeholder="ابحث عن سؤال، موضوع، أو كلمة مفتاحية..." />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['الكل', 'الاستثمار', 'المحفظة الرقمية', 'الامتثال الشرعي'].map((cat, idx) => (
            <button key={idx} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${idx === 0 ? 'bg-primary text-white font-bold shadow-md' : 'bg-white border border-gray-100 text-text-main hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-primary/50">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex cursor-pointer items-center justify-between p-5 w-full text-right"
              >
                <span className="text-text-main text-base md:text-lg font-bold">{faq.q}</span>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-text-muted leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 relative overflow-hidden shadow-sm text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-text-main text-2xl font-bold">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-text-muted max-w-md">فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت. تواصل معنا عبر القنوات المتاحة.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-background-light text-text-main font-bold hover:bg-gray-200 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <span>البريد الإلكتروني</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
              <MessageCircle className="w-5 h-5" />
              <span>تحدث معنا</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;