import { VietnamRegionData, RemedyData, PharmacyData } from './types';

export const vietnamRegions: VietnamRegionData[] = [
  // Southern
  {
    id: 'hcm',
    name: 'TP. Hồ Chí Minh',
    region: 'Southern',
    level: 'HIGH',
    percentage: 82,
    description: 'Highly populated urban center prone to rapid water stagnation during the monsoon season (May - November). Massive risk of Dengue Fever (Sốt Xuất Huyết).',
    peakSeason: 'May - November',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Zika Virus', 'Chikungunya']
  },
  {
    id: 'cantho',
    name: 'Cần Thơ',
    region: 'Southern',
    level: 'HIGH',
    percentage: 91,
    description: 'Mekong Delta wetlands, rich canal networks, and fruit orchards create ideal year-round breeding spots for mosquitoes, especially Culex species.',
    peakSeason: 'June - December',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Viêm Não Nhật Bản', 'Vết cắn sưng tấy']
  },
  {
    id: 'bentre',
    name: 'Bến Tre',
    region: 'Southern',
    level: 'HIGH',
    percentage: 86,
    description: 'Coconut-growing areas feature stagnant rainwater caught in split shells and leaves. Very high density of Aedes aegypti.',
    peakSeason: 'July - November',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Zika Virus']
  },
  // Northern
  {
    id: 'hanoi',
    name: 'Hà Nội',
    region: 'Northern',
    level: 'MEDIUM',
    percentage: 58,
    description: 'Extreme seasonal changes. Activity spikes with warm humid spring rains and late autumn weather. Lower activity in dry cold winter.',
    peakSeason: 'March - May & September - November',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Viêm Não Nhật Bản']
  },
  {
    id: 'hoabinh',
    name: 'Hòa Bình',
    region: 'Northern',
    level: 'HIGH',
    percentage: 79,
    description: 'Mountainous terrain with natural stream beds and dense vegetation. High risk of forest-dwelling mosquito varieties.',
    peakSeason: 'May - October',
    diseases: ['Sốt Rét (Malaria)', 'Sốt Xuất Huyết', 'Zika']
  },
  {
    id: 'quangninh',
    name: 'Quảng Ninh',
    region: 'Northern',
    level: 'LOW',
    percentage: 35,
    description: 'Coastal areas feel strong salt-laden wind flow, restricting mosquito travel near the bays. Inland forests still carry native risks.',
    peakSeason: 'April - September',
    diseases: ['Sốt Rét (Malaria)', 'Sốt Xuất Huyết']
  },
  // Central
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: 'Central',
    level: 'MEDIUM',
    percentage: 49,
    description: 'Ocean winds restrict stagnant pools near the beaches. Coastal urban grid remains active with mosquitoes during rainy seasons.',
    peakSeason: 'August - December',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Viêm Não Nhật Bản']
  },
  {
    id: 'daklak',
    name: 'Đắk Lắk',
    region: 'Central',
    level: 'HIGH',
    percentage: 89,
    description: 'Central Highlands coffee and rubber plantations hold standing puddles of fertilizer water. High risk for both Dengue and Highland Malaria.',
    peakSeason: 'May - November',
    diseases: ['Sốt Rét (Malaria)', 'Sốt Xuất Huyết (Dengue)', 'Zika']
  },
  {
    id: 'hue',
    name: 'Thừa Thiên Huế',
    region: 'Central',
    level: 'HIGH',
    percentage: 77,
    description: 'Famous for long persistency of autumn rainy seasons (mưa dầm). High humidity combined with ancient citadel architecture creates ideal breeding basins.',
    peakSeason: 'September - January',
    diseases: ['Sốt Xuất Huyết (Dengue)', 'Viêm Não Nhật Bản']
  }
];

export const chemicalRemedies: RemedyData[] = [
  {
    id: 'saovang',
    name: 'Golden Star Balm',
    vietnameseName: 'Cao Sao Vàng',
    type: 'BALM',
    brand: 'OPC Pharmaceutical',
    description: 'The legendary Vietnamese aromatic ointment. Instantly relieves itching and burning sensations from insect and mosquito bites with its volatile essential oils.',
    usage: 'Rub a tiny amount directly on the mosquito bite area. Avoid scratching.',
    ingredients: 'Camphor, Menthol, Peppermint oil, Cajuput oil, Cinnamon oil, Holy basil oil',
    priceRange: '10.000đ - 18.000đ',
    rating: 4.9
  },
  {
    id: 'phatlinh',
    name: 'Buddha Brand Medicated Oil',
    vietnameseName: 'Dầu Phật Linh Trường Sơn',
    type: 'BALM',
    brand: 'Trường Sơn',
    description: 'A classic general-purpose liquid medicated oil found in almost every Vietnamese household. Highly effective in diffusing bite inflammation and alleviating pain.',
    usage: 'Apply 1-2 drops onto the bite and massage gently.',
    ingredients: 'Peppermint oil, Menthol, Clove oil, Eucalyptol, Camphor',
    priceRange: '12.000đ - 25.000đ',
    rating: 4.8
  },
  {
    id: 'soffell',
    name: 'Soffell Repellent Cream',
    vietnameseName: 'Kem Chống Muỗi Soffell',
    type: 'REPELLENT',
    brand: 'Soffell / PT Herlina Indah',
    description: 'Vietnamese national standard anti-mosquito cream. Protects skin up to 8 hours. Available in pleasant Orange Peel or Geranium flower scents.',
    usage: 'Apply evenly across exposed areas like arms, neck, and legs.',
    ingredients: 'DEET 13%',
    priceRange: '25.000đ - 45.000đ',
    rating: 4.7
  },
  {
    id: 'remos_rep',
    name: 'Remos Mosquito Repellent Spray',
    vietnameseName: 'Xịt Chống Muỗi Remos',
    type: 'REPELLENT',
    brand: 'Rhoto-Mentholatum Vietnam',
    description: 'Modern, quick-dry defense spray. Contains Aloe Vera and Vitamin E to soothe skin while preventing mosquitoes from landing.',
    usage: 'Spray on skin from 10-15cm distance. Rub in. For kids, spray on hands then massage onto their skin.',
    ingredients: 'Diethyltoluamide (DEET) 15%',
    priceRange: '38.000đ - 60.000đ',
    rating: 4.6
  },
  {
    id: 'remos_itch',
    name: 'Remos Anti-Itch Gel',
    vietnameseName: 'Gel Remos Kháng Khuẩn Trị Ngứa',
    type: 'CREAM',
    brand: 'Rhoto-Mentholatum Vietnam',
    description: 'Anti-inflammatory, antibacterial formula specifically engineered to halt brutal itching, reduce swelling, and prevent skin infections from intense scratching.',
    usage: 'Apply a local layer to the bite 2 to 3 times matching peak itch spikes.',
    ingredients: 'Antihistamine, Diphenhydramine, Lidocaine, Allantoin, Isopropylmethylphenol',
    priceRange: '45.000đ - 55.000đ',
    rating: 4.8
  },
  {
    id: 'bachho',
    name: 'White Tiger Balm',
    vietnameseName: 'Bạch Hổ Hoạt Lạc Cao',
    type: 'BALM',
    brand: 'Bảo Linh',
    description: 'An advanced, heavy-menthol traditional balm formulation popular in central/southern Vietnam for deep muscle warming and relief of toxic bugs bites.',
    usage: 'Massage a moderate amount inside the target zone, avoiding open wounds.',
    ingredients: 'Methyl Salicylate, Camphor, Menthol, Peppermint oil, Cajuput oil',
    priceRange: '22.000đ - 35.000đ',
    rating: 4.7
  },
  {
    id: 'dep_mekophar',
    name: 'D.E.P Skin Ointment (10g)',
    vietnameseName: 'Thuốc mỡ bôi da D.E.P Mekophar điều trị ghẻ ngứa (10g)',
    type: 'MEDICINE',
    brand: 'Mekophar Chemical Pharmaceutical',
    description: 'Highly effective local skin protection and repellent ointment. Famously indicated for treatment of itchiness, insect/mosquito bites, and scabies (ghẻ ngứa).',
    usage: 'Apply a thin layer directly to the clean skin areas needing treatment or protection, 2-3 times daily.',
    ingredients: 'Diethyl phthalate (D.E.P) 9.5g, Excipients q.s.f 10g',
    priceRange: '10.000đ - 15.000đ',
    rating: 4.8
  }
];

export const vietnamPharmacies: PharmacyData[] = [
  // TP. Hồ Chí Minh (Center roughly lat: 10.7769, lng: 106.7009)
  {
    id: 'pharmacity_hcm1',
    name: 'Pharmacity Nguyễn Huệ',
    brand: 'Pharmacity',
    address: '41 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '1800 6821',
    lat: 10.7741,
    lng: 106.7032,
    hours: '06:00 - 23:30'
  },
  {
    id: 'longchau_hcm1',
    name: 'Nhà Thuốc FPT Long Châu Cách Mạng Tháng 8',
    brand: 'Nhà Thuốc Long Châu',
    address: '420 Cách Mạng Tháng Tám, Phường 11, Quận 3, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '1800 6928',
    lat: 10.7836,
    lng: 106.6710,
    hours: '07:00 - 22:00'
  },
  {
    id: 'ankhang_hcm1',
    name: 'Nhà Thuốc An Khang Nguyễn Thị Minh Khai',
    brand: 'An Khang',
    address: '320 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '1900 1572',
    lat: 10.7712,
    lng: 106.6854,
    hours: '06:30 - 22:00'
  },
  {
    id: 'local_hcm1',
    name: 'Nhà Thuốc Tư Nhân Mỹ Châu',
    brand: 'Tư Nhân',
    address: '389 Hai Bà Trưng, Phường 8, Quận 3, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '028 3820 5419',
    lat: 10.7901,
    lng: 106.6908,
    hours: '07:00 - 22:30'
  },
  {
    id: 'pharmacity_hcm2',
    name: 'Pharmacity Thảo Điền',
    brand: 'Pharmacity',
    address: '15 Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '1800 6821',
    lat: 10.8038,
    lng: 106.7329,
    hours: '06:00 - 23:30'
  },

  // Hà Nội (Center roughly lat: 21.0285, lng: 105.8542)
  {
    id: 'pharmacity_hn1',
    name: 'Pharmacity Hồ Hoàn Kiếm',
    brand: 'Pharmacity',
    address: '12 Đinh Tiên Hoàng, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội',
    city: 'Hà Nội',
    phone: '1800 6821',
    lat: 21.0315,
    lng: 105.8525,
    hours: '06:00 - 23:30'
  },
  {
    id: 'longchau_hn1',
    name: 'Nhà Thuốc FPT Long Châu Khâm Thiên',
    brand: 'Nhà Thuốc Long Châu',
    address: '141 Khâm Thiên, Phường Thổ Quan, Quận Đống Đa, Hà Nội',
    city: 'Hà Nội',
    phone: '1800 6928',
    lat: 21.0195,
    lng: 105.8368,
    hours: '07:00 - 22:00'
  },
  {
    id: 'ankhang_hn1',
    name: 'Nhà Thuốc An Khang Bà Triệu',
    brand: 'An Khang',
    address: '184 Bà Triệu, Phường Nguyễn Du, Quận Hai Bà Trưng, Hà Nội',
    city: 'Hà Nội',
    phone: '1900 1572',
    lat: 21.0152,
    lng: 105.8491,
    hours: '06:30 - 22:00'
  },
  {
    id: 'local_hn1',
    name: 'Nhà Thuốc Tư Nhân Thái Dương',
    brand: 'Tư Nhân',
    address: '12 Láng Hạ, Phường Thành Công, Quận Ba Đình, Hà Nội',
    city: 'Hà Nội',
    phone: '024 3772 1234',
    lat: 21.0198,
    lng: 105.8169,
    hours: '07:00 - 22:30'
  },

  // Đà Nẵng (Center roughly lat: 16.0544, lng: 108.2022)
  {
    id: 'pharmacity_dn1',
    name: 'Pharmacity Hùng Vương',
    brand: 'Pharmacity',
    address: '172 Hùng Vương, Phường Hải Châu II, Quận Hải Châu, Đà Nẵng',
    city: 'Đà Nẵng',
    phone: '1800 6821',
    lat: 16.0682,
    lng: 108.2178,
    hours: '06:00 - 23:30'
  },
  {
    id: 'longchau_dn1',
    name: 'Nhà Thuốc FPT Long Châu Điện Biên Phủ',
    brand: 'Nhà Thuốc Long Châu',
    address: '254 Điện Biên Phủ, Phường Chính Gián, Quận Thanh Khê, Đà Nẵng',
    city: 'Đà Nẵng',
    phone: '1800 6928',
    lat: 16.0638,
    lng: 108.1965,
    hours: '07:00 - 22:00'
  },
  {
    id: 'local_dn1',
    name: 'Nhà Thuốc Tư Nhân Phước Thiện',
    brand: 'Tư Nhân',
    address: '370 Ông Ích Khiêm, Phường Hải Châu II, Quận Hải Châu, Đà Nẵng',
    city: 'Đà Nẵng',
    phone: '0236 382 7772',
    lat: 16.0621,
    lng: 108.2132,
    hours: '07:00 - 23:00'
  }
];
