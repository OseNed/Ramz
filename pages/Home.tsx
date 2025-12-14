import React from 'react';
import { PlayCircle, ArrowRight, TrendingUp, Verified, Search, CreditCard, PiggyBank, ArrowLeftRight, MapPin, Building, ShieldCheck, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Text Content */}
            <div className="flex flex-col gap-6 text-right order-2 lg:order-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                <Verified className="w-4 h-4" />
                مرخص من هيئة السوق المالية (Sandbox)
              </div>
              <h1 className="text-4xl font-black leading-[1.15] text-text-main sm:text-5xl lg:text-6xl tracking-tight">
                انضم لقائمة الانتظار وابدأ محفظتك العقارية بمبلغ <span className="text-primary">500 ريال</span>
              </h1>
              <p className="text-lg leading-relaxed text-text-muted max-w-xl">
                منصة رمز ستمكنك قريباً من الاستثمار في عقارات مدرة للدخل، متوافقة مع الشريعة الإسلامية، وبتقنية البلوك تشين لضمان الشفافية والملكية المطلقة. كن أول من يعلم عند الإطلاق.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all hover:-translate-y-0.5">
                  <span>سجل اهتمامك الآن</span>
                  <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                </button>
                <Link to="/how-it-works" className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border-light bg-white px-8 text-base font-bold text-text-main hover:bg-gray-50 transition-all">
                  <span>كيف نعمل؟</span>
                  <PlayCircle className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
                <div className="flex -space-x-3 space-x-reverse">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdXe8XfUvHLw537pSEYuIla3FrBF2nzzM2eaeEkyhnDehib9S7UYk_g__UQZLZyTf2fp9cOwAdBOZBDBEQPqoO2osWNUcD-Fme1rEG-sWnZo2s4YDlWCHSc-bU2iTf5lxchfwKNmjhcTrQOE9wqsDs-o89wS4CC7rRSzJuOORnBBPEWRH5MGxTh9VobKbU8BB8Io_tDLfLWcIdwYvKJa7HXG0dP648_FXlh9-7f6TaWIaioUExDkYsla7mC9VzW_W7ByPCuXuo6rr" alt="Inv 1" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8C0TC-CjBlbS3DIZv9HyDTbqFW4gJnKeDW-OsRdlkZoG94dN1TSKa3Z9fBXLPtWUFXnLFUZSCB_CLQ3VXWy7FN8e1Slh_QKTMtb8YEu79q_m1coOWxtqNTrFPKU02gircrYTnPVrWdbKcXk_0acX4hfv2jCFO03hJX8pOWFSZ1FeoWs0toirCb4hdWqs6rdWtMnybCuALhsEzC3GHt0ivX4ZYtYK1P4Y6VKVXfP9PjdfaigHcuEXU60ARvtRkCwg73oH69WftsHiL" alt="Inv 2" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA33RLyDYyxXj6DcVsLW1nJZMLzIQdyadkFRbgPhC0m8k3Afok2qJj5tNm9KEQxVQzM7VRLobVEqv5CVr0jGtZHWmmiPJpqJ9Fwt_RjH4RqCBELg4EEbjk5JDY4FMeYljY1vbXfPw6fG7UwO7n8DxlMwkIa36GbGvB3SAYMBh0DZkflTDsmJ1YIAWhChcWDqN_Q-crmdsa1-SU0bY-5nz_Xfaw5-Eik5zc5CTQr8l_qIN5Tra0B5eaniUgGSUAvncLbUvhgR0E5yYVh" alt="Inv 3" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                </div>
                <p>انضم لأكثر من <span className="font-bold text-text-main">10,000+</span> مهتم بالمنصة</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCImajF7mCOunb_8U-cnqexHE4TLU1U5eePh8TXVBfU8fWlp5tfWYc9SBk0zTuRz6KasJJ-smNpbA4TbzKNNg-giDKckF_ubbQ19lgeAWEXqbL03Egi0qRpoQC4QhmQoIHlJcDnNQgQJzAP1BJ8plPedtHQ18Clv7xu5G-t-2exP7cgbvaZoKJ451HY3fbx6YuO-Re1rCT6NzUgcSjuv0bnFBTDiXB1uENOQ0XkuvIFHv-aftxeswW8yENWViUc3ZqBO_Ad1_SG_B8" 
                  alt="Riyadh Skyline" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Card 1 */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm animate-[bounce_3s_infinite]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">متوسط العائد المتوقع</p>
                    <p className="text-sm font-bold text-text-main">12.4%</p>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-3 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                    <Verified className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">قريباً</p>
                    <p className="text-sm font-bold text-text-main">مشروع الملقا</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <div className="w-full border-y border-border-light bg-background-light py-10">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-medium text-text-muted">شركاء النجاح والجهات التنظيمية</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0">
             <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <Building className="w-8 h-8" />
                <span>CMA Sandbox</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <Verified className="w-8 h-8" />
                <span>Shariyah Review</span>
            </div>
             <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <Banknote className="w-8 h-8" />
                <span>مطورون عقاريون</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <ShieldCheck className="w-8 h-8" />
                <span>أمن سيبراني</span>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-text-main sm:text-4xl">كيف يعمل الاستثمار الجزئي؟</h2>
            <p className="mt-4 text-lg text-text-muted">ابدأ رحلتك الاستثمارية قريباً في ٤ خطوات بسيطة</p>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 translate-y-1/2 w-[80%] mx-auto"></div>
            
            {[
              { icon: Search, title: "تصفح الفرص", desc: "استعرض عقارات مختارة بعناية ومدروسة من قبل خبراء" },
              { icon: CreditCard, title: "اختر واستثمر", desc: "حدد المبلغ الذي تريد استثماره وادفع عبر قنوات آمنة" },
              { icon: PiggyBank, title: "احصل على العوائد", desc: "تلقى عوائد الإيجار الدورية مباشرة في محفظتك الرقمية" },
              { icon: ArrowLeftRight, title: "تخارج بمرونة", desc: "بع حصصك في السوق الثانوي أو انتظر بيع العقار لتحقيق الربح الرأسمالي" },
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-main">{step.title}</h3>
                <p className="text-sm text-text-muted px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black text-text-main">فرص استثمارية مستقبلية</h2>
              <p className="mt-2 text-text-muted">أمثلة على الفرص التي سيتم طرحها قريباً</p>
            </div>
            <button className="text-primary font-bold hover:underline">عرض المزيد</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "فيلا الملقا السكنية",
                type: "سكني",
                location: "حي الملقا، شمال الرياض",
                return: "11.5%",
                duration: "3 سنوات",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE3cYaCnQXWm3FtKH6LJRe2IziCjhmSYFrqXe7cC3Bb3dsIxX0P0gRch1eIjpuBtGKgSZgWX9rD77z-6u_ynEoH9T5nzYEokKrwk15HWSNHWRTYCyQ5zTLc8pnijktjHELYBAKPessQ3ga7i0x71forQLqqmCEZhJXxO56YFomBcD8mVMpZL_8iv3cN48nNNwv7ebvU6rJYo329bPnZQmVQ-bSNPzQoMd9q5eQ5IfzKDman6hMRl_mC_FrwK7LQAl7PijsihuNE6QN",
                tagColor: "bg-green-50 text-primary"
              },
              {
                title: "برج الأعمال الإداري",
                type: "مكتبي",
                location: "حي الشاطئ، جدة",
                return: "9.8%",
                duration: "5 سنوات",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgiM4GwWw2xk5trtteojHHDWACXz4F8ULTc2pFw-jW9BDebggQGIDA2oZdTJlXlLHMJhV_9wYEhZgA6uAR4yajI42fSFemKqbuDd5SOpWXlygH5O5uYvBnunEqvz-ruOmNvGFbv8pzcZkmftAMt7BISoB2MHJjReRriCt2dZPL_q5hn2y0BrpMyKKJEhrhsQ2yLZRwnR7T_z_kZCgM5w3w9B3eQdnusywqw6U9kq-z29unh-smEH7_khtx3dlNs59vuUSZo2REsQCo",
                tagColor: "bg-blue-50 text-blue-600"
              },
              {
                title: "مجمع النرجس السكني",
                type: "سكني",
                location: "حي النرجس، شمال الرياض",
                return: "10.2%",
                duration: "4 سنوات",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0u4TbId7fWGdfPjnRlSurpFd_sZ2wy78GaIleBUjN3hNfEGKMQOrGpESMomItY3LrvtRY0s0DdKWRWcxIWbcacRXN67eLKhJPqLw_lZzPQaPKZvhhGdrRkv29uXb7t-YNa4r2-HbijY1qrVipQzALyvXY-BcFgyQ_80Qu252W0ahLTqNK55_igY5SnH6xNqPNfu1D31-uVV4qxJTBIaImgXiBB72QAEN92NJYL-CHk1dG2KlJQXGUw2BgLfLVi5a2EqCCAfYgQ8HT",
                tagColor: "bg-green-50 text-primary"
              }
            ].map((prop, idx) => (
              <div key={idx} className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-90 hover:opacity-100">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-3 right-3 z-10 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-text-main backdrop-blur-sm shadow-sm">
                    {prop.location.split('،')[0]}
                  </div>
                  <div className="absolute top-3 left-3 z-10 rounded-md bg-gray-600 px-2 py-1 text-xs font-bold text-white shadow-sm">
                    قريباً
                  </div>
                  <img src={prop.image} alt={prop.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-text-main">{prop.title}</h3>
                    <span className={`rounded px-2 py-1 text-xs font-bold ${prop.tagColor}`}>{prop.type}</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2 text-sm text-text-muted">
                    <MapPin className="w-4 h-4" />
                    <span>{prop.location}</span>
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4 rounded-xl bg-background-light p-3">
                    <div>
                      <p className="text-xs text-text-muted">العائد المتوقع</p>
                      <p className="text-lg font-bold text-accent-gold">{prop.return}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">مدة الاستثمار</p>
                      <p className="text-lg font-bold text-text-main">{prop.duration}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full rounded-lg border border-primary text-primary bg-transparent py-2.5 text-sm font-bold transition-colors hover:bg-primary hover:text-white">
                      أعلمني عند الطرح
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;