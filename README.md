# Má mày muỗi - Vietnam Mosquito Alert Website

A brutalism-designed website displaying mosquito risk levels across Vietnamese regions and areas, with recommendations for treatments and nearby pharmacies.

## 🦟 Features

### 1. **Landing Page**
- Minimalist brutalism design with black background
- Red circle wireframe containing a black & white mosquito PNG image
- Call-to-action button for navigation

### 2. **Regional Mosquito Risk Dashboard**
- Interactive Google Map showing Vietnam's regions
- Color-coded risk levels (Critical, High, Medium, Low)
- Region list with clickable cards
- Detailed information on mosquito types and risk levels

### 3. **Recommended Treatments**
- Comprehensive list of recommended medications
- Information on application methods and benefits
- Warnings and safety precautions
- Prevention guide with tips

### 4. **Pharmacy Locator**
- Google Maps integration showing nearby pharmacies
- Filter pharmacies by region (North, Central, South)
- Display available medicines at each location
- Contact information and operating hours

## 🎨 Design Features

- **Color Scheme**: Black (#000000), White (#FFFFFF), Red (#FF0000)
- **Typography**: Bold, geometric, brutalist aesthetic
- **Layout**: Grid-based, stark design with thick borders
- **Responsive**: Mobile-friendly layout

## 📋 Data Included

### Regions (8 major Vietnamese cities)
- Hà N���i, TP. Hồ Chí Minh, Đà Nẵng, Cần Thơ, Huế, Hải Phòng, Hải Dương, Ninh Bình

### Recommended Medicines (8 items)
- DEET, Icaridin, Permethrin, Hydrocortisone, Antihistamine, Sunscreen, Mosquito nets, Insecticides

### Pharmacies (8 locations)
- Distributed across North, Central, and South Vietnam
- Each with realistic contact information and medicine availability

## 🚀 Setup Instructions

### 1. Get Google Maps API Key
- Visit [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project
- Enable Maps JavaScript API
- Create an API key
- Replace `YOUR_GOOGLE_MAPS_API_KEY` in `index.html`

### 2. Add Mosquito Image
- Create or download a black & white PNG mosquito image
- Save as `mosquito.png` in the repository root
- The image will be displayed in the red circle on the landing page

### 3. Deploy to GitHub Pages
- Push all files to your repository
- Go to Settings → Pages
- Select `main` branch as source
- Your site will be live at `https://LanAnh129.github.io/Test-website/`

## 📁 File Structure

```
├── index.html          # Main HTML page
├── styles.css          # Brutalism CSS styling
├── script.js           # Interactive functionality
├── data.js             # Region, medicine, and pharmacy data
├── mosquito.png        # Black & white mosquito image
└── README.md           # This file
```

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Maps**: Google Maps JavaScript API
- **Hosting**: GitHub Pages
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Responsive Design

- Desktop: Full layout with side-by-side content
- Tablet: Optimized grid layout
- Mobile: Single column layout with adjusted font sizes

## ⚠️ Important Notes

1. **Google Maps API Key**: Required for map functionality. Keep it secure.
2. **Mosquito Image**: Must be a PNG file with transparent background for best results.
3. **Data Updates**: Update region risk levels in `data.js` as needed.
4. **Pharmacy Information**: Add or update pharmacy data in `data.js`.

## 🎯 Color Reference

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Black | #000000 |
| Text | White | #FFFFFF |
| Accents | Red | #FF0000 |
| Borders | White/Red | #FFFFFF / #FF0000 |
| Risk - Critical | Red | #FF0000 |
| Risk - High | Orange | #FF6600 |
| Risk - Medium | Yellow | #FFFF00 |
| Risk - Low | Green | #00CC00 |

## 📞 Contact & Support

For questions about mosquito-borne diseases or treatments, consult with local health authorities or medical professionals.

---

**Created for Public Health Awareness - Vietnam Mosquito Alert**
