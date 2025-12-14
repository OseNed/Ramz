import React from 'react';
import { UserPlus, Building, CreditCard, Wallet, PlayCircle, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full max-w-[1100px] px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className="flex-1 flex flex-col gap-6 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full w-fit border border-primary/20">
              <span className="text-primary text-xs font-bold">منصة مرخصة وموثوقة</span>
            </div>
            <h1 className="text-text-main text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight">
              كيف يعمل الاستثمار<br/>
              <span className="text-primary">في منصة رمز؟</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-[500px]">
              نمكنك من امتلاك حصص في عقارات مدرة للدخل بخطوات رقمية بسيطة. استثمر، تملك، واحصل على عوائد دورية.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-lg shadow-primary/20 transition-all">
                <span>ابدأ رحلتك الآن</span>
              </button>
              <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-white border border-gray-200 text-gray-700 text-base font-bold hover:bg-gray-50 transition-colors gap-2">
                <PlayCircle className="w-5 h-5" />
                <span>شاهد الفيديو التعريفي</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative group">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP_zZroQxFZCFImyz8qD1R5_xcqt0iJmy-9Be3qFXfBac9YqA_l02-HDtn1mWNB4wpRRqaQ9d8PGhTwxy1B1oPhRt3tPKVmDDAW-xtPqGARB3_847bAOqR_ARJgoyO1MtD-2Tb4d-knGIjMdurxuSbGpSg2ZAgxulFZO5K93TN1NJ9AUKTPmKeENGQYbu5P_CHsqaoRqKprkAAisX_s69dH2cB_wPJmhUHciH8xfuwfXPxDXq9SI0R4PVqhJNyW-PM-0RJm292dKlp')" }}
              ></div>
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px] animate-pulse">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold">العائد السنوي المتوقع</p>
                    <p className="text-sm font-black text-text-main dir-ltr text-right">8.5% - 12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="w-full bg-white py-16 border-t border-b border-gray-50">
        <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">رحلة المستثمر</span>
            <h2 className="text-text-main text-3xl md:text-4xl font-black mb-4">استثمر في 4 خطوات بسيطة</h2>
            <p className="text-gray-500 max-w-lg mx-auto">صممنا تجربة المستخدم لتكون سهلة وسريعة، مما يتيح لك البدء في بناء محفظتك العقارية في دقائق.</p>
          </div>

          <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-x-4 md:gap-x-8 w-full max-w-3xl">
            {/* Step 1 */}
            <div className="flex flex-col items-center h-full">
              <div className="size-12 md:size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 z-10 border-4 border-white">
                <UserPlus className="w-6 h-6" />
              </div>
              <div className="w-0.5 bg-gradient-to-b from-primary/50 to-gray-200 h-full min-h-[100px]"></div>
            </div>
            <div className="pb-12 pt-2 pr-4">
              <h3 className="text-xl font-bold text-text-main mb-2 flex items-center gap-2">
                1. إنشاء الحساب وتوثيق الهوية
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-green-100 text-green-700 font-bold">فوري</span>
              </h3>
              <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                سجل حسابك في دقائق وقم بتوثيق هويتك رقمياً عبر التكامل المباشر مع النفاذ الوطني الموحد (أبشر).
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center h-full">
              <div className="size-12 md:size-14 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center shadow-md z-10">
                <Building className="w-6 h-6" />
              </div>
              <div className="w-0.5 bg-gray-200 h-full min-h-[100px]"></div>
            </div>
            <div className="pb-12 pt-2 pr-4">
              <h3 className="text-xl font-bold text-text-main mb-2">2. تصفح الفرص العقارية</h3>
              <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                استعرض قائمة منتقاة بعناية من الفرص العقارية في أبرز مدن المملكة. نوفر لك كافة التفاصيل ودراسات الجدوى.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center h-full">
              <div className="size-12 md:size-14 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center shadow-md z-10">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="w-0.5 bg-gray-200 h-full min-h-[100px]"></div>
            </div>
            <div className="pb-12 pt-2 pr-4">
              <h3 className="text-xl font-bold text-text-main mb-2">3. شراء الرموز العقارية</h3>
              <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                اختر المبلغ الذي تريد استثماره (ابتداءً من 1000 ريال) وقم بالدفع إلكترونياً عبر مدى أو التحويل البنكي.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="size-12 md:size-14 rounded-full bg-accent-gold text-white flex items-center justify-center shadow-lg shadow-accent-gold/30 z-10 border-4 border-white">
                <Wallet className="w-6 h-6" />
              </div>
            </div>
            <div className="pb-4 pt-2 pr-4">
              <h3 className="text-xl font-bold text-text-main mb-2">4. استلام العوائد والتخارج</h3>
              <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                ستصلك العوائد الإيجارية بشكل دوري. وفي نهاية فترة الاستثمار، سيتم بيع العقار وتوزيع رأس المال والأرباح.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full px-4 py-12 mb-12">
        <div className="max-w-[1100px] mx-auto bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center md:text-right">
            <h2 className="text-3xl font-black mb-3">جاهز لبدء رحلتك الاستثمارية؟</h2>
            <p className="text-white/90 text-lg font-medium max-w-md">انضم لآلاف المستثمرين الذين ينمون ثرواتهم عبر الاستثمار العقاري الذكي.</p>
          </div>
          <div className="relative z-10 flex gap-4">
            <button className="bg-white text-primary hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
              إنشاء حساب مجاني
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;