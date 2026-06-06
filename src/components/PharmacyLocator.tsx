import { useState, useEffect, useRef } from 'react';
import { vietnamPharmacies } from '../data';
import { PharmacyData } from '../types';
import { MapPin, Phone, Clock, AlertCircle } from 'lucide-react';

export default function PharmacyLocator() {
  const [selectedCity, setSelectedCity] = useState<'Hà Nội' | 'TP. Hồ Chí Minh' | 'Đà Nẵng'>('TP. Hồ Chí Minh');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [selectedPharmacy, setSelectedPharmacy] = useState<PharmacyData | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 10.7769, lng: 106.7009 });
  const [mapZoom, setMapZoom] = useState(13);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const mapContainerId = "leaflet-map-element";
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Dynamically load Leaflet assets from unpkg
  useEffect(() => {
    let active = true;

    // Check if already loaded
    if ((window as any).L) {
      setLeafletLoaded(true);
      return;
    }

    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Inject Leaflet JS
    if (!document.getElementById('leaflet-js')) {
      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = () => {
        if (active) {
          setLeafletLoaded(true);
        }
      };
      document.head.appendChild(script);
    } else {
      const checkInterval = setInterval(() => {
        if ((window as any).L) {
          if (active) {
            setLeafletLoaded(true);
          }
          clearInterval(checkInterval);
        }
      }, 100);
      return () => {
        clearInterval(checkInterval);
        active = false;
      };
    }

    return () => {
      active = false;
    };
  }, []);

  // Update map center depending on selected city initial load
  useEffect(() => {
    switch (selectedCity) {
      case 'TP. Hồ Chí Minh':
        setMapCenter({ lat: 10.7769, lng: 106.7009 });
        setMapZoom(13);
        break;
      case 'Hà Nội':
        setMapCenter({ lat: 21.0285, lng: 105.8542 });
        setMapZoom(13);
        break;
      case 'Đà Nẵng':
        setMapCenter({ lat: 16.0544, lng: 108.2022 });
        setMapZoom(13.5);
        break;
    }
    setSelectedPharmacy(null);
  }, [selectedCity]);

  // Leaflet Map Initialization
  useEffect(() => {
    if (!leafletLoaded) return;
    const L = (window as any).L;
    if (!L) return;

    const container = document.getElementById(mapContainerId);
    if (!container) return;

    // Clean up existing map if any
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    // Initialize Map
    const map = L.map(mapContainerId, {
      zoomControl: false,
      attributionControl: true
    }).setView([mapCenter.lat, mapCenter.lng], mapZoom);

    mapRef.current = map;

    // Load free OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Zoom buttons top-right
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [leafletLoaded]);

  // Panning/Zoom changes manually
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return;
    mapRef.current.setView([mapCenter.lat, mapCenter.lng], mapZoom, {
      animate: true,
      duration: 1.0
    });
  }, [mapCenter, mapZoom, leafletLoaded]);

  // Sync Markers to Map
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    const map = mapRef.current;

    // Remove old state markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    filteredPharmacies.forEach((pharm) => {
      const isSelected = selectedPharmacy?.id === pharm.id;

      // Custom Brutalist SVG / HTML Icon
      const customIcon = L.divIcon({
        className: 'custom-brut-pin-wrapper',
        html: `
          <div class="flex items-center justify-center relative select-none">
            ${isSelected 
              ? '<div class="absolute w-8 h-8 rounded-full bg-[#FF0000] animate-ping opacity-35"></div>' 
              : ''
            }
            <div class="w-6 h-6 border-2 border-white flex items-center justify-center font-bold text-[10px] shadow-[2px_2px_0px_0px_white] transition-transform ${
              isSelected 
                ? 'bg-[#FF0000] text-white scale-110' 
                : 'bg-zinc-800 text-zinc-200 hover:bg-white hover:text-black hover:scale-105'
            }">
              +
            </div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([pharm.lat, pharm.lng], { icon: customIcon })
        .addTo(map)
        .on('click', () => {
          setSelectedPharmacy(pharm);
          setMapCenter({ lat: pharm.lat, lng: pharm.lng });
          setMapZoom(15.5);
        });

      // Precise brutalist popup
      const popupHTML = `
        <div class="font-mono text-xs text-white bg-black space-y-1.5 uppercase select-none">
          <div class="font-black text-sm text-[#FF0000] border-b border-zinc-800 pb-1">${pharm.name}</div>
          <div class="text-zinc-400 font-semibold leading-tight text-[10px]">${pharm.address}</div>
          <div class="grid grid-cols-2 gap-1 text-[9px] pt-1 border-t border-dashed border-zinc-900 pb-1">
            <div><strong class="text-zinc-500">LIÊN HỆ:</strong> <span class="text-white">${pharm.phone}</span></div>
            <div class="text-right"><strong class="text-zinc-500">MỞ CỬA:</strong> <span class="text-white">${pharm.hours}</span></div>
          </div>
          <div class="bg-red-950/40 border border-red-900 px-1.5 py-1 text-[9px] font-bold text-red-500 text-center uppercase tracking-wide">
            SẴN HÀNG: CAO SAO VÀNG, SOFFELL, BIỆT DƯỢC D.E.P
          </div>
        </div>
      `;

      marker.bindPopup(popupHTML, {
        className: 'brutalist-leaflet-popup',
        closeButton: false,
        offset: [0, -6]
      });

      if (isSelected) {
        setTimeout(() => {
          marker.openPopup();
        }, 80);
      }

      markersRef.current.push(marker);
    });
  }, [selectedCity, selectedBrand, selectedPharmacy, leafletLoaded]);

  // Filter pharmacies based on city & brand
  const filteredPharmacies = vietnamPharmacies.filter((pharmacy) => {
    const isCity = pharmacy.city === selectedCity;
    const isBrand = selectedBrand === 'ALL' || pharmacy.brand === selectedBrand;
    return isCity && isBrand;
  });

  // Unique list of medical brands
  const brands = ['ALL', 'Pharmacity', 'Nhà Thuốc Long Châu', 'An Khang', 'Tư Nhân'];

  const getBrandBadgeColor = (brand: string) => {
    switch (brand) {
      case 'Pharmacity':
        return 'bg-blue-600 text-white border-blue-600';
      case 'Nhà Thuốc Long Châu':
        return 'bg-amber-600 text-white border-amber-600';
      case 'An Khang':
        return 'bg-emerald-600 text-white border-emerald-600';
      default:
        return 'bg-white text-black border-white';
    }
  };

  const handleFocusPharmacy = (pharmacy: PharmacyData) => {
    setSelectedPharmacy(pharmacy);
    setMapCenter({ lat: pharmacy.lat, lng: pharmacy.lng });
    setMapZoom(15.5);
  };

  return (
    <section className="w-full border-b-8 border-white bg-black py-16 px-4 md:px-8 relative" id="pharmacy-locator">
      <div className="max-w-7xl mx-auto">
        {/* Header summary */}
        <div className="mb-12">
          <h2 className="font-display text-xs uppercase tracking-[0.3em] text-[#FF0000] font-bold border-b border-[#FF0000] pb-2">
            BẢN ĐỒ HIỆU THUỐC ĐỊA PHƯƠNG / LOCAL PHARMACIES
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
            Locate authorized local pharmacies in Vietnam supplying anti-itch balms & repellent armor (OSM Free Libre Engine)
          </p>
        </div>

        {/* Main layout block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Cities / Brand filters & Pharmacy List */}
          <div className="lg:col-span-5 flex flex-col h-[650px] bg-zinc-950 border-2 border-white p-4 md:p-6 space-y-4 relative">
            
            <div className="absolute top-0 right-0 bg-white text-black font-mono text-[9px] px-2 py-0.5 uppercase font-bold border-b-2 border-l-2 border-black z-10">
              STORES IN RANGE
            </div>

            {/* City Toggles */}
            <div className="space-y-1">
              <label className="font-mono text-2xs font-extrabold text-zinc-500 uppercase tracking-widest">
                XÁC ĐỊNH ĐỊA BÀN (SELECT URBAN BASES)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng'] as const).map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`font-display font-black text-xs uppercase tracking-tight py-2 px-1 text-center border-2 transition-all cursor-pointer ${
                      selectedCity === city
                        ? 'bg-[#FF0000] text-white border-[#FF0000]'
                        : 'bg-black text-zinc-400 border-zinc-800 hover:bg-white hover:text-black hover:border-white'
                    }`}
                  >
                    {city === 'TP. Hồ Chí Minh' ? 'Sài Gòn' : city}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand filter */}
            <div className="space-y-1">
              <label className="font-mono text-2xs font-extrabold text-zinc-500 uppercase tracking-widest">
                LỌC CHUỖI NHÀ THUỐC (FILTER STORES BY BRAND)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`font-mono text-2xs font-bold uppercase tracking-tight py-1 px-2 border transition-all cursor-pointer ${
                      selectedBrand === b
                        ? 'bg-[#FF0000] text-white border-[#FF0000]'
                        : 'bg-black text-zinc-400 border-zinc-850 hover:bg-white hover:text-black hover:border-white'
                    }`}
                  >
                    {b === 'ALL' ? 'Tất cả' : b.replace('Nhà Thuốc ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrolling List */}
            <div className="flex-1 overflow-y-auto border-2 border-white bg-black p-2 space-y-2.5 custom-scrollbar min-h-0">
              {filteredPharmacies.length > 0 ? (
                filteredPharmacies.map((pharm) => {
                  const isFocused = selectedPharmacy?.id === pharm.id;
                  return (
                    <div
                      key={pharm.id}
                      onClick={() => handleFocusPharmacy(pharm)}
                      className={`group cursor-pointer p-3 border-2 transition-all flex flex-col justify-between ${
                        isFocused
                          ? 'border-white bg-[#FF0000] text-white'
                          : 'border-zinc-805 bg-black text-white hover:bg-white hover:text-black hover:border-white'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h4 className={`font-display font-black text-base uppercase tracking-tight leading-tight transition-colors ${
                          isFocused ? 'text-white' : 'text-white group-hover:text-black'
                        }`}>
                          {pharm.name}
                        </h4>
                        <span className={`shrink-0 font-mono text-[9px] font-extrabold px-1.5 py-0.5 border uppercase ${getBrandBadgeColor(pharm.brand)}`}>
                          {pharm.brand.replace('Nhà Thuốc ', '')}
                        </span>
                      </div>

                      <p className={`font-mono text-2xs mt-2 flex items-start gap-1 ${
                        isFocused ? 'text-white/90' : 'text-zinc-400'
                      }`}>
                        <MapPin className={`w-3 h-3 shrink-0 mt-0.5 ${isFocused ? 'text-white' : 'text-[#FF0000]'}`} />
                        <span>{pharm.address}</span>
                      </p>

                      <div className={`grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-dashed font-mono text-[10px] ${
                        isFocused ? 'border-white/20' : 'border-zinc-900'
                      }`}>
                        <div className={`flex items-center gap-1 font-bold ${isFocused ? 'text-white' : 'text-zinc-500'}`}>
                          <Phone className="w-3 h-3 text-current" />
                          <span>{pharm.phone}</span>
                        </div>
                        <div className={`flex items-center gap-1 justify-end font-bold ${isFocused ? 'text-white' : 'text-zinc-500'}`}>
                          <Clock className="w-3 h-3 text-current" />
                          <span>{pharm.hours}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex flex-col justify-center items-center text-center p-4">
                  <AlertCircle className="w-8 h-8 text-zinc-600 mb-2" />
                  <p className="font-mono text-xs text-zinc-500 uppercase font-black">
                    Không tìm thấy hiệu thuốc phù hợp với bộ lọc.
                  </p>
                </div>
              )}
            </div>

            {/* Map list summary */}
            <div className="font-mono text-2xs text-zinc-500 flex justify-between items-center bg-black p-2 border border-zinc-800">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                {filteredPharmacies.length} STORES ONLINE
              </span>
              <span>GEO_SAT ACTIVE</span>
            </div>

          </div>

          {/* Right panel: OpenStreetMap Dark tactical visualizer with zero api keys */}
          <div className="lg:col-span-7 h-[650px] border-4 border-white bg-black relative flex flex-col items-shadow overflow-hidden">
            
            {/* Loading Cover */}
            {!leafletLoaded ? (
              <div className="absolute inset-0 bg-black flex flex-col justify-center items-center font-mono text-xs text-white z-25 space-y-2 uppercase p-8 text-center">
                <div className="w-8 h-8 rounded-none border-2 border-red-650 border-t-transparent animate-spin mb-3"></div>
                <div className="tracking-widest font-black text-red-650">GEO_MATRIX INFRASTRUCTURE INITIATING</div>
                <div className="text-zinc-500 text-3xs">LOADING OPENSTREETMAP LEAFLET DRIVER...</div>
              </div>
            ) : null}

            {/* Main Interactive Leaflet Map Div */}
            <div className="w-full h-full relative">
              <div id={mapContainerId} className="w-full h-full brut-leaflet-map" style={{ minHeight: '100%', height: '100%' }} />

              {/* Overlaid HUD status panel on custom tracker */}
              <div className="absolute bottom-4 left-4 bg-black text-white border-4 border-white p-3 brut-shadow text-xs font-mono max-w-xs space-y-1.5 z-[1000] pointer-events-none uppercase">
                <div className="font-black text-[#FF0000] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF0000] inline-block animate-ping"></span>
                  VECTOR DETECT ENGINE ACTIVE
                </div>
                <div>GRID: OPENSTREETMAP (SECURE FREE API)</div>
                <div className="border-t border-zinc-800 my-1 pt-1 text-zinc-400">
                  SECTOR: <span className="text-white font-bold">{selectedCity}</span>
                </div>
                {selectedPharmacy && (
                  <div className="text-[10px] text-zinc-400">
                    TARGET: <span className="text-[#FF0000] font-black">{selectedPharmacy.name}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
