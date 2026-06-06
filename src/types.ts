export type RegionType = 'Northern' | 'Central' | 'Southern';
export type AssessmentLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface VietnamRegionData {
  id: string;
  name: string;
  region: RegionType;
  level: AssessmentLevel;
  percentage: number; // Mosquito density index 0-100%
  description: string;
  peakSeason: string;
  diseases: string[];
}

export type RemedyType = 'BALM' | 'REPELLENT' | 'MEDICINE' | 'CREAM';

export interface RemedyData {
  id: string;
  name: string;
  vietnameseName: string;
  type: RemedyType;
  brand: string;
  description: string;
  usage: string;
  ingredients: string;
  priceRange: string; // e.g. "15.000đ - 30.000đ"
  rating: number; // 1-5 scale
}

export interface PharmacyData {
  id: string;
  name: string;
  brand: 'Pharmacity' | 'Nhà Thuốc Long Châu' | 'An Khang' | 'Tư Nhân';
  address: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Đà Nẵng';
  phone: string;
  lat: number;
  lng: number;
  hours: string;
}
