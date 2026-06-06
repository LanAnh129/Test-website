import { ShieldCheck, Flame } from 'lucide-react';

const mosquitoImg = "/src/assets/images/mosquito_bw_1780683242188.png";

export default function Hero() {
  return (
    <header className="relative border-4 border-white bg-black py-10 md:py-16 overflow-hidden brut-grid-bg mt-0 mb-8 mx-4 md:mx-8 lg:mx-12 brut-shadow-red" id="hero-section">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title branding block */}
        <div className="flex flex-col justify-center space-y-3 z-10">
          <div className="inline-block self-start bg-red-600 text-white font-mono text-sm px-3 py-1 font-bold border-2 border-white tracking-wider uppercase">
            Vietnam Mosquito Danger Matrix
          </div>
          
          {/* Title and Mosquito inline block */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-start gap-8 md:gap-16 lg:gap-20">
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8.5xl text-white tracking-tighter leading-[0.85] select-none uppercase">
              MÁ MÀY <br />
              <span className="text-[#FF0000]">MUỖI</span>
            </h1>

            {/* The mosquito target asset on the same horizontal line with the title, shifted right by 65px */}
            <div className="shrink-0 flex justify-start md:justify-center items-center py-4 z-20 translate-x-[65px]">
              <div className="relative">
                {/* The outer decorative crosshair dots to give it a tactical radial vibe but NO STROKE around the actual red circle */}
                <div className="absolute inset-0 -m-8 border border-dashed border-red-650/20 rounded-full animate-spin pointer-events-none flex items-center justify-center [animation-duration:60s]" />
                <div className="absolute inset-0 -m-4 border border-dashed border-white/10 rounded-full animate-spin pointer-events-none flex items-center justify-center [animation-duration:30s]" />
                
                {/* Static diagonal target cross lines outside the circle */}
                <div className="absolute top-1/2 left-[-40px] right-[-40px] h-[2px] bg-[#FF0000]/20 pointer-events-none uppercase font-mono text-[9px] text-[#FF0000] tracking-widest flex justify-between px-2">
                  <span>SCAN</span>
                  <span>LOCKED</span>
                </div>
                <div className="absolute left-1/2 top-[-40px] bottom-[-40px] w-[2px] bg-[#FF0000]/20 pointer-events-none" />

                {/* The Red Circle Container: no stroke (border-none), transparent background with thin red wireframe inside */}
                <div className="relative w-64 h-64 sm:w-[300px] sm:h-[300px] rounded-full flex items-center justify-center overflow-visible shadow-2xl transition-transform hover:scale-105 duration-305">
                  
                  {/* Circle Red Wireframe with no outer stroke as requested */}
                  <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full rounded-full border-[1.5px] border-[#FF0000] opacity-50"></div>
                    <div className="absolute w-full h-[1.5px] bg-[#FF0000] rotate-45 opacity-30"></div>
                    <div className="absolute w-full h-[1.5px] bg-[#FF0000] -rotate-45 opacity-30"></div>
                    <div className="absolute w-[80%] h-[80%] rounded-full border-[1px] border-[#FF0000] opacity-35"></div>
                    <div className="absolute w-[50%] h-[50%] rounded-full border-[1px] border-[#FF0000] opacity-25"></div>
                  </div>

                  {/* Black and White mosquito image - scaled bigger */}
                  <img
                    src={mosquitoImg}
                    alt="Dangerous Mosquito Black and White brutalist illustration"
                    className="relative w-48 h-48 sm:w-[220px] sm:h-[220px] object-contain z-10 filter contrast-200"
                    referrerPolicy="no-referrer"
                  />

                  {/* Warning watermark */}
                  <div className="absolute bottom-8 left-0 right-0 text-center font-mono text-[8px] font-black text-[#FF0000] z-10 tracking-widest uppercase">
                    TARGET IDENTIFIED: AEDES
                  </div>
                </div>
                
                {/* Stamp badge overlapping bottom right */}
                <div className="absolute -bottom-2 -right-2 bg-[#FF0000] text-white border border-white p-1.5 font-mono text-[10px] font-black transform rotate-12 uppercase tracking-tight z-20">
                  100% CẤP BÁCH
                </div>
              </div>
            </div>
          </div>

          <p className="font-mono text-zinc-400 text-[11px] sm:text-xs max-w-xs uppercase tracking-wider leading-relaxed">
            An aggressive, hyper-authentic portal mapping out-of-control regional mosquito infestations across Vietnam, local botanical armors, and emergency pharmacy lookups.
          </p>

          {/* Brutalist status boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-4xl">
            <div className="bg-black border-2 border-[#FF0000] p-4 brut-shadow-red flex items-start space-x-3">
              <Flame className="w-8 h-8 text-[#FF0000] shrink-0 stroke-[3.5]" />
              <div>
                <dt className="font-mono text-xs font-black uppercase text-[#FF0000] tracking-wider">OUTBREAK LEVEL</dt>
                <dd className="font-display font-extrabold text-2xl uppercase tracking-tight">CRITICAL (CẤP V)</dd>
                <dd className="font-mono text-xs text-zinc-500 mt-1">High monsoon humidity peaks</dd>
              </div>
            </div>

            <div className="bg-black border-2 border-white p-4 brut-shadow flex items-start space-x-3">
              <ShieldCheck className="w-8 h-8 text-white shrink-0 stroke-[2.5]" />
              <div>
                <dt className="font-mono text-xs font-black uppercase text-white tracking-wider">DEFENSE ARMOR</dt>
                <dd className="font-display font-extrabold text-2xl uppercase tracking-tight">CAO SAO VÀNG</dd>
                <dd className="font-mono text-xs text-zinc-500 mt-1">Soffell & Eucalyptus shields</dd>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 font-mono text-xs pt-2">
            <span className="bg-white text-black font-semibold px-2.5 py-1 border border-black">#AntiDengue</span>
            <span className="bg-[#FF0000] text-white font-semibold px-2.5 py-1 border border-white">#SốtXuấtHuyết</span>
            <span className="bg-zinc-800 text-zinc-300 font-semibold px-2.5 py-1 border border-zinc-700">#CaoSaoVangShield</span>
          </div>
        </div>
      </div>

      {/* Marquee Animation Support via custom inline style class if needed, or customized utilities */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
