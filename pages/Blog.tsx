import React from 'react';
import { ArrowRight, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "لماذا يعتبر الاستثمار في العقار المرمّز (Tokenized) أكثر أماناً؟",
      excerpt: "تفاصيل حول الأمان والشفافية التي توفرها تقنية البلوكشين في التعاملات العقارية وكيف تحمي حقوق المستثمرين.",
      date: "24 أكتوبر 2023",
      read: "5 دقائق قراءة",
      author: "أحمد السالم",
      tag: "دليل المستثمر",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC-yStEx5WMzdKP05YS4T0KEKw-6RgN4pl1vsZ5y3D7Ghm9MqjvB4Qj2MkpB2vkyxzhELKzDTLxV7mThfrMQi9zoVkyuKfE-x4O8E-HHh_e0ZQkoI97zpphmCtcpmpS-lwbK809pqVP0okgNdKrR8NUQQ4i3t3RoAfWNI87RISPDA8vkDeQJsb7EhVXg5CuB7ws3U88w3_HMT0vt9SBdOw3AI-2m5y8sYOJJ8siUym3jgR9898XmA7s28M1FRUNlrLgIGMUzGgVzwX"
    },
    {
      title: "ما هو الـ DAO؟ وكيف يدير العقارات بشكل لا مركزي؟",
      excerpt: "شرح مبسط للمنظمات المستقلة اللامركزية ودورها في إدارة الأصول العقارية دون الحاجة لوسطاء تقليديين.",
      date: "20 أكتوبر 2023",
      read: "8 دقائق قراءة",
      author: "سارة القحطاني",
      tag: "تقنية",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe41v29tptqhUQODV9Kz54Gxq7MhGpKT4Kffex7ln1jxu3grjsCUFrTuU_mWkwnDJchVP9LMASGoEDjKSF8nrdmRBDDq29Y-mmAioCXHv05631vsboDMEZrVHirhjyACPmONoRPQxPZRepq3bEnk7RhRagtg7GDVOfAuNV_we80c3NkPfxHmCrg4yqoK069_JWSbdEL0znJoAE3Iju5ayg0a0tXNsIFKMrMml-HShKHc6E2CqqV8GFDqx1Ft4U-eedsUJwLu7ILzqr"
    },
    {
      title: "نمو سوق العقارات في الرياض بنسبة 15% في الربع الثالث",
      excerpt: "تقرير مفصل حول أداء السوق العقاري في العاصمة وأهم المناطق التي تشهد إقبالاً استثمارياً.",
      date: "18 أكتوبر 2023",
      read: "3 دقائق قراءة",
      author: "فريق RAMZ",
      tag: "أخبار السوق",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzACNahsPMRMFJiXKI2CxsYnsWxnWDpow1OPnZe-V5ZeP57A2xFxjUAbSznyTFsWPjAU4NwNDRKwzd6j1bgL6mjANXavNl-PbyVelZ1GRazLiVpexl4GlfW6gmzB6pP8-JiGyHF8M67QRGItMYW8ck5hJLRuSfRGzORd0nhIbNwKxUL6rl_U2bMGaI8rrU1drwv3XsPFXhkTqNyjsRkNKPCdsorZYmfd4m-ti9tckHaDBxZVyOdWvlW7Mc95BSirCpZELIRwGV56_z"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-text-main sm:text-5xl tracking-tight">
          مدونة <span className="text-primary">RAMZ</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-muted">
          آخر الأخبار، والتحليلات، والرؤى حول مستقبل الاستثمار العقاري وتقنية البلوكشين في المملكة.
        </p>
      </div>

      {/* Featured Article */}
      <div className="relative overflow-hidden rounded-2xl bg-background-subtle border border-[#e8efec] shadow-sm mb-16 group cursor-pointer transition-all hover:shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 order-2 lg:order-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-bold text-accent-gold ring-1 ring-inset ring-accent-gold/20">
                مقال مميز
              </span>
              <span className="text-xs font-medium text-text-muted">نُشر قبل يومين</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:leading-tight group-hover:text-primary transition-colors">
              كيف تساهم التقنية المالية في ديمقراطية الوصول للعقارات التجارية في الرياض
            </h2>
            <p className="mb-8 text-lg text-text-muted leading-relaxed">
              اكتشف كيف تغير الملكية الجزئية مستقبل الاستثمار العقاري في المملكة بما يتماشى مع رؤية 2030.
            </p>
            <button className="flex items-center gap-2 rounded-lg bg-text-main w-fit px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary">
              <span>اقرأ المقال كاملاً</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
          <div className="relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSSa_Y0jV86R6e7ZuCnrfNiiai3O46slC2YVLy7HPP_QVzOR3ziOgxOt4ke4pCGZd3fNw6pUoJWQccFsnaBsGDf3qA87-T76p26__DTVDxUwxcFOyWvZrIGN6g4zlry1nunA-EPG5UJUQIVE-9fkZUj69kCKamvAG77xThz_wm-6A7ZnR8KRkE7MQmLVGjpUooR5eWZEpR3z0KXw65gG5UjfE3dFmXCkTkEvOs0bDPTfYKCtMFJaCOKie44COHtxMI-Tc5RdBhOxl5')" }}></div>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-[#f0f5f2] pb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          {['الكل', 'أخبار السوق', 'تقنية البلوكشين', 'دليل المستثمر', 'رؤية 2030'].map((tag, idx) => (
            <button key={idx} className={`shrink-0 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary text-white shadow-sm' : 'bg-white border border-[#e0ebe5] text-text-main hover:text-primary'}`}>
              {tag}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input className="block w-full rounded-lg border-0 py-2.5 pr-10 text-text-main ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm bg-background-subtle" placeholder="ابحث في المقالات..." type="text" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {posts.map((post, idx) => (
          <article key={idx} className="group flex flex-col overflow-hidden rounded-xl bg-white border border-[#f0f5f2] transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${post.image}')` }}></div>
              <div className="absolute top-4 right-4">
                <span className="rounded bg-white/90 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur-sm">{post.tag}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-500">
                <span>{post.date}</span>
                <span className="size-1 rounded-full bg-gray-300"></span>
                <span>{post.read}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-text-main group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold text-text-main">{post.author}</span>
                <ArrowLeft className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Newsletter */}
      <div className="mt-20 border-t border-[#f0f5f2] bg-[#F9FCFA] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 shadow-xl sm:px-12 md:py-16 lg:px-16 mx-auto max-w-7xl">
          <div className="relative flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-right z-10">
            <div className="mb-8 max-w-xl lg:mb-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">كن أول من يعلم بالفرص الجديدة</h2>
              <p className="mt-4 text-lg text-primary/10 text-white/90">اشترك في نشرتنا البريدية للحصول على آخر تحديثات السوق العقاري.</p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-3 sm:flex-row">
                <input className="flex-1 rounded-lg border-0 bg-white/90 px-5 py-3 text-text-main placeholder:text-gray-500 focus:bg-white" placeholder="بريدك الإلكتروني" type="email" />
                <button className="shrink-0 rounded-lg bg-text-main px-6 py-3 font-bold text-white shadow-lg transition-transform hover:bg-gray-900" type="submit">اشترك الآن</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;