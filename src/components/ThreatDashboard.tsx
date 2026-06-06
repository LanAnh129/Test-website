import { useState } from 'react';
import { vietnamRegions } from '../data';
import { VietnamRegionData, RegionType, AssessmentLevel } from '../types';
import { ArrowRight, AlertOctagon, HelpCircle, Activity, Wind, Info } from 'lucide-react';

export default function ThreatDashboard() {
  const [selectedRegion, setSelectedRegion] = useState<RegionType | 'ALL'>('ALL');
  const [selectedProvince, setSelectedProvince] = useState<VietnamRegionData>(vietnamRegions[0]);

  // Filter provinces based on selected region tab
  const filteredProvinces = vietnamRegions.filter(
    (p) => selectedRegion === 'ALL' || p.region === selectedRegion
  );

  const getLevelColor = (level: AssessmentLevel) => {
    switch (level) {
      case 'HIGH':
        return 'bg-red-600 text-white border-red-600';
      case 'MEDIUM':
        return 'bg-yellow-500 text-black border-yellow-500';
      case 'LOW':
        return 'bg-white text-black border-white';
    }
  };

  const getLevelBadge = (level: AssessmentLevel) => {
    switch (level) {
      case 'HIGH':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-xs font-extrabold bg-red-600 text-white px-2 py-0.5 border border-white">
            <AlertOctagon className="w-3.5 h-3.5 stroke-[3]" /> CỰC CAO (HIGH)
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-xs font-extrabold bg-yellow-400 text-black px-2 py-0.5 border border-black">
            <Activity className="w-3.5 h-3.5 stroke-[3]" /> TRUNG BÌNH (MED)
          </span>
        );
      case 'LOW':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-xs font-extrabold bg-white text-black px-2 py-0.5 border border-black">
            <Wind className="w-3.5 h-3.5 stroke-[2]" /> THẤP (LOW)
          </span>
        );
    }
  };

  return (
    <section className="w-full border-b-8 border-white bg-black py-16 px-4 md:px-8 relative" id="threat-levels">
      <div className="max-w-7xl mx-auto">
            {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-display text-xs uppercase tracking-[0.3em] text-[#FF0000] font-bold border-b border-[#FF0000] pb-2">
            BẢN ĐỒ MẬT ĐỘ & CHỈ SỐ LÂM SÀNG / THREAT RADAR
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider font-bold">
            Mosquito density indexes categorized by administrative provinces & regions in Vietnam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List and region toggles */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b-4 border-zinc-800 pb-4">
              {(['ALL', 'Northern', 'Central', 'Southern'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setSelectedRegion(r);
                    // Autoset default province when filtered to make sure valid item is highlighted
                    const relevantProvinces = vietnamRegions.filter(
                      (p) => r === 'ALL' || p.region === r
                    );
                    if (relevantProvinces.length > 0) {
                      setSelectedProvince(relevantProvinces[0]);
                    }
                  }}
                  className={`font-mono text-xs font-black uppercase tracking-wider px-4 py-2 border-2 transition-all cursor-pointer ${
                    selectedRegion === r
                      ? 'bg-[#FF0000] text-white border-[#FF0000]'
                      : 'bg-black text-white border-zinc-700 hover:border-white'
                  }`}
                >
                  {r === 'ALL' ? 'Toàn Quốc (ALL)' : r === 'Northern' ? 'Miền Bắc' : r === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                </button>
              ))}
            </div>

            {/* Provinces/Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProvinces.map((p) => {
                const isSelected = selectedProvince.id === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedProvince(p)}
                    className={`group cursor-pointer border-2 p-4 transition-all relative select-none ${
                      isSelected
                        ? 'border-white bg-[#FF0000] text-white'
                        : 'border-white bg-black text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    {/* Top status header */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`font-mono text-2xs uppercase tracking-widest font-extrabold ${
                        isSelected ? 'text-white/80' : 'text-zinc-500'
                      }`}>
                        {p.region} Vietnam
                      </span>
                      {getLevelBadge(p.level)}
                    </div>

                    {/* Main title */}
                    <h3 className={`font-display font-black text-2xl uppercase tracking-tighter transition-colors ${
                      isSelected ? 'text-white font-black' : 'text-white font-black group-hover:text-black'
                    }`}>
                      {p.name}
                    </h3>

                    {/* Simple stats bar */}
                    <div className="mt-4 space-y-1.5">
                      <div className="flex justify-between text-2xs font-mono font-bold">
                        <span className="text-zinc-400">DENSITY RADAR</span>
                        <span className={p.level === 'HIGH' ? 'text-red-500' : p.level === 'MEDIUM' ? 'text-yellow-500' : 'text-zinc-300'}>
                          {p.percentage}% INDEX
                        </span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 border border-white overflow-hidden">
                        <div
                          className={`h-full ${
                            p.level === 'HIGH' ? 'bg-red-600' : p.level === 'MEDIUM' ? 'bg-yellow-500' : 'bg-white'
                          }`}
                          style={{ width: `${p.percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Hover indicator link */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Brutalist Warning Info Callout */}
            <div className="bg-red-600 text-white border-4 border-white p-5 font-mono text-xs space-y-2 relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] text-white/10 select-none">
                <AlertOctagon className="w-40 h-40 stroke-[2]" />
              </div>
              <h4 className="font-display font-bold text-lg uppercase tracking-tight flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 shrink-0 animate-bounce" /> PHÒNG BỆNH SỐT XUẤT HUYẾT
              </h4>
              <p className="font-black leading-relaxed">
                Diệt lăng quăng, diệt muỗi phơi khô là trách nhiệm của toàn dân sinh sống tại các điểm đỏ. Muỗi Aedes truyền bệnh đốt hoạt động cực mạnh vào sáng sớm và chập tối.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-bold">
                <li>Luôn đậy kín lu chứa nước không để muỗi đẻ trứng.</li>
                <li>Thả cá bảy màu diệt bọ gậy, lăng quăng nội thành.</li>
                <li>Dọn rác vỏ hộp dừa bên hiên nhà ngay lập tức.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Detailed analysis card */}
          <div className="lg:col-span-6 border-4 border-white bg-zinc-950 p-6 md:p-8 brut-shadow relative">
            
            <div className="absolute top-0 right-0 bg-white text-black font-mono text-xs px-3 py-1 uppercase font-bold border-b-4 border-l-4 border-black">
              DETAILS SPEC-SHEET
            </div>

            {/* Profile heading */}
            <div className="pb-6 border-b-4 border-dashed border-zinc-800 space-y-3">
              <span className="font-mono text-xs text-red-500 uppercase tracking-widest font-extrabold flex items-center gap-1">
                <Info className="w-4 h-4" /> LOCAL THREAT REPORT
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white">
                {selectedProvince.name}
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-black border-2 border-white font-mono text-xs font-bold text-white px-2.5 py-0.5">
                  Vùng: {selectedProvince.region === 'Northern' ? 'Miền Bắc' : selectedProvince.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                </span>
                <span className="bg-red-600 border-2 border-white font-mono text-xs font-bold text-white px-2.5 py-0.5">
                  DENSITY: {selectedProvince.percentage}%
                </span>
              </div>
            </div>

            {/* Analysis details */}
            <div className="py-6 space-y-6">
              
              <div>
                <h4 className="font-mono text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">
                  MÔ TẢ CHI TIẾT (DESCRIPTION & EPIDEMIOLOGY)
                </h4>
                <p className="font-mono text-sm leading-relaxed text-zinc-300">
                  {selectedProvince.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black p-4 border-2 border-white">
                  <h5 className="font-mono text-xs font-black text-red-500 uppercase tracking-widest mb-1.5">
                    MÙA BÙNG PHÁT CỰC ĐẠI
                  </h5>
                  <p className="font-display font-black text-lg text-white uppercase tracking-tight">
                    {selectedProvince.peakSeason}
                  </p>
                </div>

                <div className="bg-black p-4 border-2 border-white">
                  <h5 className="font-mono text-xs font-black text-yellow-500 uppercase tracking-widest mb-1.5">
                    MÃ MÔI TRƯỜNG (BIOME STATUS)
                  </h5>
                  <p className="font-display font-black text-lg text-white uppercase tracking-tight">
                    {selectedProvince.percentage > 80 ? 'STAGNANT WETLAND' : 'MONSOON SEASONAL'}
                  </p>
                </div>
              </div>

              {/* Danger diseases */}
              <div>
                <h4 className="font-mono text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">
                  BỆNH TRUYỀN NHIỄM NGUY HIỂM TẠI ĐỊA PHƯƠNG
                </h4>
                <div className="flex flex-col gap-2">
                  {selectedProvince.diseases.map((d, index) => (
                    <div key={index} className="flex items-center gap-3 bg-red-950/40 p-3 border-2 border-red-900">
                      <div className="w-5 h-5 flex items-center justify-center bg-red-600 text-white font-mono font-black text-xs">
                        {index + 1}
                      </div>
                      <span className="font-display font-black text-sm uppercase text-red-500 tracking-wide">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Dynamic visual indicator footer */}
            <div className="pt-6 border-t-2 border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block"></span>
                RADAR: SEVERE OUTBREAK WARNING
              </span>
              <span>CẤP {selectedProvince.percentage > 70 ? 'V' : 'III'} CAO NHẤT</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
