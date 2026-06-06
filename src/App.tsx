import Hero from './components/Hero';
import ThreatDashboard from './components/ThreatDashboard';
import RemedyList from './components/RemedyList';
import PharmacyLocator from './components/PharmacyLocator';
import { AlertCircle, Bug, ShieldAlert, NavigationOff, Heart, AlertTriangle } from 'lucide-react';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF0000] selection:text-white pb-16">
      
      {/* GLOBAL BRUTALIST FLOATING HEADER & STICKY WARNING TAPE */}
      <div className="sticky top-0 z-50 w-full select-none">
        <nav className="bg-black border-b-2 border-white py-3 px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero-section')}>
            <div className="w-8 h-8 bg-[#FF0000] text-white border border-white flex items-center justify-center font-display font-black text-sm shrink-0">
              M
            </div>
            <span className="font-display font-black text-xl uppercase tracking-tighter text-white hover:text-[#FF0000] transition-colors">
              Má mày muỗi
            </span>
          </div>

          {/* Anchor shortcuts */}
          <div className="hidden md:flex items-center space-x-4 font-mono text-xs">
            <button
              onClick={() => scrollToSection('threat-levels')}
              className="hover:bg-[#FF0000] hover:text-white px-2.5 py-1 border border-zinc-800 hover:border-white transition-all uppercase font-bold cursor-pointer"
            >
              Bản Đồ Mật Độ
            </button>
            <button
              onClick={() => scrollToSection('recommendations')}
              className="hover:bg-[#FF0000] hover:text-white px-2.5 py-1 border border-zinc-800 hover:border-white transition-all uppercase font-bold cursor-pointer"
            >
              Thuốc Khuyên Dùng
            </button>
            <button
              onClick={() => scrollToSection('pharmacy-locator')}
              className="hover:bg-[#FF0000] hover:text-white px-2.5 py-1 border border-zinc-800 hover:border-white transition-all uppercase font-bold cursor-pointer"
            >
              Tìm Hiệu Thuốc
            </button>
          </div>

          {/* Global Urgent Contact indicator */}
          <div className="font-mono text-3xs md:text-2xs bg-white text-black font-black px-2.5 py-1 border border-black uppercase text-center shrink-0 tracking-tight">
            CẤP BÁCH: SỐT XUẤT HUYẾT
          </div>
        </nav>

        {/* Sticky warning tape under navigation bar */}
        <div className="h-8 bg-yellow-400 text-black flex items-center overflow-hidden font-mono text-xs font-bold whitespace-nowrap uppercase tracking-widest pointer-events-none border-b-4 border-white relative">
          <div className="brut-marquee flex shrink-0">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-4 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 stroke-[3]" />
                CẢNH BÁO NGUY HIỂM: MUỖI ĐANG HOẠT ĐỘNG CỰC MẠNH
                <AlertTriangle className="w-4 h-4 ml-2 mr-2 stroke-[3]" />
                STAY ALERT: DENGUE OUTBREAK SEASON ACTIVE
              </span>
            ))}
          </div>
          <div className="brut-marquee flex shrink-0" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-4 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 stroke-[3]" />
                CẢNH BÁO NGUY HIỂM: MUỖI ĐANG HOẠT ĐỘNG CỰC MẠNH
                <AlertTriangle className="w-4 h-4 ml-2 mr-2 stroke-[3]" />
                STAY ALERT: DENGUE OUTBREAK SEASON ACTIVE
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative vertical tracker on the right side of the page (visible on desktop) */}
      <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 select-none pointer-events-none z-40">
        <span className="text-[10px] tracking-[1em] opacity-35 uppercase font-bold text-[#FF0000] whitespace-nowrap">
          GIỮ SỨC KHỎE • TRÁNH MUỖI ĐỐT • 2026 EDITION
        </span>
      </div>

      {/* RENDER STACKED BRUTALIST MODULES */}
      <main className="w-full">
        <Hero />
        <ThreatDashboard />
        <RemedyList />
        <PharmacyLocator />
      </main>

      {/* FINAL GLOBAL BRUTALIST EDUCATIONAL FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        
        {/* Massive call-to-action threat footer */}
        <div className="border-2 border-[#FF0000] bg-red-950/20 p-6 md:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative overflow-hidden select-none">
          <div className="absolute right-[-30px] bottom-[-30px] opacity-10 text-red-600 font-bold">
            <Bug className="w-48 h-48 rotate-45 stroke-[2.5]" />
          </div>

          <div className="space-y-2 z-10">
            <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-white">
              CÓ TRIỆU CHỨNG SỐT CAO ĐỘT NGỘT?
            </h3>
            <p className="font-mono text-xs md:text-sm text-zinc-300 max-w-2xl leading-relaxed uppercase">
              Sốt xuất huyết Dengue có thể diễn tiến cực kỳ nguy hiểm từ ngày thứ 3 đến ngày thứ 7 của bệnh. Hãy đến trung tâm y tế gần nhất của bộ y tế ngay lập tức. TUYỆT ĐỐI không tự ý truyền dịch hoặc tự điều trị tại phòng trọ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs shrink-0 z-10 w-full lg:w-auto">
            <a
              href="tel:115"
              className="bg-[#FF0000] text-white font-extrabold text-center px-6 py-3 border-2 border-white shadow-none text-base flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:border-black cursor-pointer uppercase py-4"
            >
              <ShieldAlert className="w-5 h-5 shrink-0" /> CẤP CỨU Y TẾ: 115
            </a>
          </div>
        </div>

        {/* Lower disclosures info */}
        <div className="mt-12 pt-8 border-t-2 border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 font-mono text-xs text-zinc-500 uppercase">
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white">
              <span className="font-display font-black text-lg">MÁ MÀY MUỐI</span>
            </div>
            <p className="leading-relaxed font-bold">
              An informative community portal built with raw brutalist code to highlight dangerous mosquito outbreaks across administrative zones of Vietnam. Ensure maximum awareness, use nets, use Cao Sao Vàng, and spread safety.
            </p>
          </div>

          <div className="space-y-2 font-bold">
            <div className="text-white font-extrabold pb-1">TỔ CHỨC LIÊN QUAN</div>
            <ul className="space-y-1">
              <li>
                <a href="https://moh.gov.vn" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:underline">
                  BỘ Y TẾ VIỆT NAM (MOH)
                </a>
              </li>
              <li>
                <a href="https://vncdc.gov.vn" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:underline">
                  CỤC Y TẾ DỰ PHÒNG
                </a>
              </li>
              <li>
                <a href="https://who.int" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:underline">
                  TỔ CHỨC Y TẾ THẾ GIỚI (WHO)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 font-bold">
            <div className="text-white font-extrabold pb-1">THÔNG TIN BÁO CÁO</div>
            <p className="leading-relaxed">
              Các chỉ số mật độ lăng quăng và muỗi trên trang này được lập dựa trên các tài liệu lâm sàng mùa mưa và báo cáo khu vực dịch tễ học tại Việt Nam. Không thay thế các chẩn đoán hoặc chỉ đạo lâm sàng chính thức từ bác sĩ y tế.
            </p>
            <div className="flex items-center gap-1.5 pt-2 text-zinc-400">
              <span>DESIGNED WITH</span>
              <Heart className="w-3.5 h-3.5 fill-[#FF0000] stroke-none" />
              <span>FOR VIETNAM'S HEALTH</span>
            </div>
          </div>

        </div>

      </footer>
    </div>
  );
}
