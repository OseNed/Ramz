import React from 'react';
import { Verified, TrendingUp, PlayCircle, Star, PiggyBank, Handshake, ShieldCheck, Banknote, Building, Calculator } from 'lucide-react';

const WhyInvest: React.FC = () => {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <Verified className="w-4 h-4" />
                منصة معتمدة من هيئة السوق المالية
              </div>
              <h1 className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight">
                لماذا تستثمر أموالك مع <span className="text-primary relative inline-block">رمز</span>؟
              </h1>
              <p className="text-[#63756d] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                نقدم لك بوابة آمنة وسهلة لدخول عالم الاستثمار العقاري. تملك حصصاً في عقارات نوعية مدرة للدخل، واستمتع بعوائد دورية دون عناء الإدارة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                  تصفح الفرص المتاحة
                </button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyHJcVUeHxU5umNyMchkyV29CTLAxs3MknD730aCvgs6M_WcTsNZsL1HmQoQX4nkdFRF_dIfTpo8ZZmQme32JWKIjWHAyEEVFBNi53LEXY7ZovCgfqgT-D33yCBY_P_ZWv1aLnGQnRgbXV1TfmbMwspX8LyT_lZYK0QpvZLR5jKq1m5oyZe_pBahpe_IPyDEPFXifmUWUy2lrbxcmG8ZTNYoduY9Jt7ezR3-djIFGVnCe_WmK1uR2okNnug5CptYIRExCFRevM3NZl')" }}
                ></div>
                <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg max-w-[200px] border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">العائد السنوي</p>
                      <p className="text-lg font-bold text-primary">12.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x rtl:divide-x-reverse divide-white/20">
            {[
              { num: "+50", label: "فرصة عقارية ممولة" },
              { num: "120M", label: "قيمة الأصول المدارة (ريال)" },
              { num: "+15K", label: "مستثمر نشط" },
              { num: "100%", label: "التزام بتوزيع الأرباح" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-black text-white">{stat.num}</span>
                <span className="text-sm md:text-base font-medium text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h2 className="text-text-main text-3xl md:text-4xl font-black mb-4">استثمار يجمع بين <span className="text-primary">الأمان</span> و <span className="text-primary">الربحية</span></h2>
            <p className="text-[#63756d] text-lg">صممنا منصة رمز لتزيل عوائق الاستثمار العقاري التقليدي، وتمنحك تجربة رقمية متكاملة.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              { icon: PiggyBank, title: "ابدأ بميزانية مرنة", desc: "لا حاجة لملايين الريالات. ابدأ محفظتك العقارية بمبالغ تبدأ من 1000 ريال فقط." },
              { icon: Building, title: "توافق شرعي كامل", desc: "جميع الفرص الاستثمارية وهيكلة الصكوك مراجعة ومعتمدة من قبل لجنة شرعية." },
              { icon: Banknote, title: "عوائد إيجارية دورية", desc: "استلم نصيبك من الإيجارات بشكل دوري مباشرة في محفظتك في المنصة." },
              { icon: TrendingUp, title: "نمو رأسمالي", desc: "استفد من ارتفاع قيمة العقارات عند التخارج وبيع الأصل." },
              { icon: ShieldCheck, title: "حفظ حقوق الملكية", desc: "يتم تسجيل ملكية العقار في صك إلكتروني لدى وزارة العدل." },
              { icon: Handshake, title: "سوق ثانوي نشط", desc: "تحتاج لسيولة؟ يمكنك عرض حصصك للبيع في السوق الثانوي لمنصة رمز." },
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border border-[#e6ebe9] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
                <p className="text-[#63756d] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Simulation */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 md:px-10">
          <div className="w-full bg-[#102219] rounded-3xl p-8 md:p-12 relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">احسب عوائدك المتوقعة</h2>
                <p className="text-gray-400 mb-8">هذه حاسبة تقديرية مبنية على متوسط أداء الفرص العقارية السابقة.</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">مبلغ الاستثمار (ريال)</label>
                    <input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="1000" max="100000" step="1000" defaultValue="50000" />
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>1,000</span>
                      <span>100,000+</span>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-gray-300">المبلغ المستثمر:</span>
                    <span className="text-2xl font-bold text-white">50,000 ر.س</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">إجمالي العائد المتوقع (5 سنوات)</p>
                    <p className="text-4xl font-black text-text-main">32,500 <span className="text-lg text-gray-400 font-medium">ر.س</span></p>
                    <div className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-2 bg-primary/10 px-2 py-1 rounded">
                      <TrendingUp className="w-4 h-4" />
                      +65% عائد كلي
                    </div>
                  </div>
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">العائد السنوي من الإيجار</span>
                      <span className="font-bold text-text-main">+4,000 ر.س</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">ربح رأس المال عند البيع</span>
                      <span className="font-bold text-accent-gold">+12,500 ر.س</span>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors mt-2">
                    ابدأ الاستثمار بهذا المبلغ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyInvest;