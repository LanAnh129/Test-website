import { useState } from 'react';
import { chemicalRemedies } from '../data';
import { RemedyData, RemedyType } from '../types';
import { Sparkles, HelpingHand, ShieldAlert, HeartCrack, Flame, CheckCircle } from 'lucide-react';

export default function RemedyList() {
  const [selectedType, setSelectedType] = useState<RemedyType | 'ALL'>('ALL');
  const [selectedRemedy, setSelectedRemedy] = useState<RemedyData>(chemicalRemedies[0]);

  const filteredRemedies = chemicalRemedies.filter(
    (rem) => selectedType === 'ALL' || rem.type === selectedType
  );

  const getRemedyBadge = (type: RemedyType) => {
    switch (type) {
      case 'BALM':
        return (
          <span className="bg-yellow-400 text-black border border-black font-mono text-[10px] font-extrabold px-1.5 py-0.5 uppercase tracking-wider">
            CAO THẢO DƯỢC (BALM)
          </span>
        );
      case 'REPELLENT':
        return (
          <span className="bg-sky-400 text-black border border-black font-mono text-[10px] font-extrabold px-1.5 py-0.5 uppercase tracking-wider">
            XỊT CHỐNG MUỖI (REPELLENT)
          </span>
        );
      case 'CREAM':
        return (
          <span className="bg-emerald-400 text-black border border-black font-mono text-[10px] font-extrabold px-1.5 py-0.5 uppercase tracking-wider">
            KEM TRỊ NGỨA (CREAM)
          </span>
        );
      case 'MEDICINE':
        return (
          <span className="bg-purple-400 text-white border border-white font-mono text-[10px] font-extrabold px-1.5 py-0.5 uppercase tracking-wider">
            DƯỢC PHẨM (MED)
          </span>
        );
    }
  };

  return (
    <section className="w-full border-b-8 border-white bg-black py-16 px-4 md:px-8 relative" id="recommendations">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-xs uppercase tracking-[0.3em] text-[#FF0000] font-bold border-b border-[#FF0000] pb-2">
            THUỐC CHUYÊN DỤNG & ĐIỀU TRỊ / RECOMMENDATIONS
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
            Proven Vietnamese and clinical formulas to prevent and soothe brutal mosquito bite traumas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed prescription panel */}
          <div className="lg:col-span-5 bg-white text-black border-4 border-white p-6 md:p-8 brut-shadow-red relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white font-mono text-2xs px-3 py-1 uppercase font-bold border-b-4 border-l-4 border-white">
              ACTIVE AGENT DATA
            </div>

            <div className="space-y-6">
              
              <div className="space-y-1.5 pt-2">
                {getRemedyBadge(selectedRemedy.type)}
                <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-none uppercase text-black">
                  {selectedRemedy.vietnameseName}
                </h3>
                <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wide">
                  Brand: {selectedRemedy.brand}
                </p>
              </div>

              {/* Big visual illustration representing the box */}
              <div className="border-4 border-black p-4 bg-zinc-100 flex flex-col items-center justify-center text-center relative select-none">
                <div className="font-mono text-[9px] text-zinc-400 absolute top-1 left-2">LOTION / PACKAGING SHAPE</div>
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white border-2 border-black font-display font-black text-xl mb-2 shadow-md">
                  {selectedRemedy.vietnameseName.split(' ')[1]?.slice(0, 2).toUpperCase() || 'CV'}
                </div>
                <h4 className="font-display font-black uppercase text-sm tracking-tight text-black">{selectedRemedy.name}</h4>
                <div className="font-mono text-xs text-red-600 font-extrabold mt-1">{selectedRemedy.priceRange}</div>
              </div>

              {/* Description */}
              <div className="space-y-2 font-mono text-xs">
                <h5 className="font-extrabold uppercase tracking-wider text-black border-b border-black pb-1">
                  MÔ TẢ CHI TIẾT
                </h5>
                <p className="text-zinc-700 leading-relaxed font-semibold">
                  {selectedRemedy.description}
                </p>
              </div>

              {/* Usage Directives */}
              <div className="space-y-2 bg-red-50 p-4 border-2 border-red-600 font-mono text-xs text-black">
                <h5 className="font-black uppercase tracking-wider text-red-600 flex items-center gap-1">
                  <HelpingHand className="w-4 h-4" /> HƯỚNG DẪN BÔI DÙNG (USAGE)
                </h5>
                <p className="leading-relaxed font-bold">
                  {selectedRemedy.usage}
                </p>
              </div>

              {/* Ingredients */}
              <div className="space-y-1 font-mono text-xs text-black">
                <h5 className="font-black uppercase tracking-wider text-zinc-500">
                  THÀNH PHẦN HOẠT CHẤT (INGREDIENTS)
                </h5>
                <p className="text-zinc-700 font-bold leading-relaxed">
                  {selectedRemedy.ingredients}
                </p>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-1 bg-black text-white px-2 py-1 font-bold border border-black">
                  <span>PRICE: {selectedRemedy.priceRange}</span>
                </div>
                <div className="text-black font-extrabold tracking-tight">
                  CLINICAL RATING: ★ {selectedRemedy.rating}/5.0
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Grid list of all remedies */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Filter tags for remedy categories */}
            <div className="flex flex-wrap gap-2 border-b-4 border-zinc-800 pb-4">
              {(['ALL', 'BALM', 'REPELLENT', 'CREAM', 'MEDICINE'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setSelectedType(t);
                    const list = chemicalRemedies.filter(
                      (rem) => t === 'ALL' || rem.type === t
                    );
                    if (list.length > 0) {
                      setSelectedRemedy(list[0]);
                    }
                  }}
                  className={`font-mono text-xs font-black uppercase tracking-wider px-4 py-2 border-2 transition-all cursor-pointer ${
                    selectedType === t
                      ? 'bg-[#FF0000] text-white border-[#FF0000]'
                      : 'bg-black text-white border-zinc-750 hover:border-[#FF0000]'
                  }`}
                >
                  {t === 'ALL' ? 'TẤT CẢ (ALL)' : t === 'BALM' ? 'CAO THẢO DƯỢC' : t === 'REPELLENT' ? 'XỊT CHỐNG MUỖI' : t === 'CREAM' ? 'KEM TRỊ NGỨA' : 'BIỆT DƯỢC / THUỐC BÔI'}
                </button>
              ))}
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredRemedies.map((rem) => {
                const isSelected = selectedRemedy.id === rem.id;
                return (
                  <div
                    key={rem.id}
                    onClick={() => setSelectedRemedy(rem)}
                    className={`group cursor-pointer border-2 p-4 transition-all relative ${
                      isSelected
                        ? 'border-white bg-[#FF0000] text-white'
                        : 'border-white bg-black text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`font-mono text-[10px] font-extrabold uppercase ${isSelected ? 'text-white' : 'text-zinc-500'}`}>
                        {rem.brand}
                      </span>
                      {getRemedyBadge(rem.type)}
                    </div>

                    <h4 className={`font-display font-black text-xl uppercase tracking-tighter transition-colors mt-2 ${
                      isSelected ? 'text-white' : 'text-white group-hover:text-black'
                    }`}>
                      {rem.vietnameseName}
                    </h4>
                    <p className={`font-mono text-xs truncate mt-1 ${
                      isSelected ? 'text-white/80' : 'text-zinc-400 group-hover:text-zinc-600'
                    }`}>
                      {rem.name}
                    </p>

                    <div className={`mt-4 flex justify-between items-center text-xs font-mono font-bold border-t border-dashed pt-3 ${
                      isSelected
                        ? 'border-white/20 text-white'
                        : 'border-zinc-800 text-zinc-300 group-hover:border-zinc-300 group-hover:text-black'
                    }`}>
                      <span>{rem.priceRange}</span>
                      <span>★ {rem.rating}</span>
                    </div>

                    {/* Check icon for selected item */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-black text-white p-1 border border-white">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Educational advice about treatment safety */}
            <div className="border-2 border-dashed border-zinc-800 p-5 font-mono text-xs text-zinc-400 space-y-3 bg-black">
              <h5 className="font-display font-bold text-white uppercase text-base flex items-center gap-1.5">
                <ShieldAlert className="w-5 h-5 text-[#FF0000]" /> BÁC SĨ KHUYÊN DÙNG (SAFETY DIRECTIVES)
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-relaxed font-semibold">
                <div className="space-y-1 bg-zinc-950 p-3 border border-zinc-800">
                  <div className="text-white font-extrabold">1. ĐỪNG GÃI (DO NOT SCRATCH)</div>
                  <p>Scratching ruptures capillaries, dispersing mosquitoes saliva toxins deeper into tissues, causing heavy swelling, permanent pigmentation scars, or infectious sores.</p>
                </div>
                <div className="space-y-1 bg-zinc-950 p-3 border border-zinc-800">
                  <div className="text-white font-extrabold">2. ĐÚNG LIỀU LƯỢNG</div>
                  <p>DEET sprays are great for travel. For young toddlers below 2 years, prioritize biological eucalyptus balms or physical netting rather than intense industrial chemicals.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
