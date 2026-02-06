# CFIS Semester 2 Timetable PWA

A modern, responsive Progressive Web App for managing CFIS semester 2 timetables with offline capabilities and installable functionality.

## 📱 Features

### Core Functionality
- **Interactive Timetable**: View daily schedules with color-coded subjects
- **Real-time Clock**: Live updating clock showing current time
- **Live Class Indicator**: Highlights currently ongoing classes
- **Day Navigation**: Easy switching between Monday-Friday schedules

### Enhanced UI/UX
- **Beautiful Dark Theme**: Modern dark interface with glass morphism effects
- **Smooth Animations**: Elegant transitions and hover effects
- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Accessibility**: Keyboard navigation and proper focus states

### Advanced Features
- **Detailed Subject Popups**: Click any class to see comprehensive information
- **Copy Functionality**: One-click copying of subject details to clipboard
- **PWA Installation**: Install as a standalone app on mobile devices
- **Offline Support**: Works without internet connection after initial load

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for local development server)

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd cfis-timetable-pwa
```

2. **Serve the application:**
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using any static server
```

3. **Open in browser:**
Navigate to `http://localhost:8000`

### Installation as PWA
1. Open the app in a supported browser
2. Look for the "Install App" button in the header
3. Click to install as a standalone application
4. Access from your home screen like any native app

## 📊 Data Structure

### Subjects
The timetable includes these subjects:
- **Mathematics II** (Theory)
- **Applied Physics II** (Theory)
- **Environmental Science** (Theory)
- **Fundamentals of Electrical & Electronics Engineering** (Theory)
- **Problem Solving & Programming** (Theory)
- **Communication Skills in English** (Block)
- **PSP Lab / Engineering Workshop** (Lab)
- **FEE Lab** (Lab)
- **Applied Physics Lab** (Lab)

### Schedule
- **Monday to Friday**: 9:00 AM to 4:00 PM
- **Lunch Break**: 12:10 PM to 12:50 PM
- **Short Breaks**: Between certain periods
- **Lab Sessions**: Extended practical periods

## 🛠️ Technical Details

### Architecture
- **Frontend**: Vanilla JavaScript with ES6 modules
- **Styling**: CSS3 with custom properties and animations
- **Storage**: Service Worker for offline caching
- **Deployment**: Static hosting ready

### File Structure
```
cfis-timetable-pwa/
├── assets/           # Icons and images
├── css/             # Stylesheets
│   ├── app.css      # Main application styles
│   ├── glass.css    # Glass morphism effects
│   ├── modal.css    # Modal dialog styles
│   └── theme.css    # Color themes and variables
├── js/              # JavaScript modules
│   ├── data.js      # Timetable data and subjects
│   ├── modal.js     # Modal functionality
│   ├── pwa.js       # PWA features and service worker
│   └── ui.js        # Main UI logic
├── index.html       # Main HTML entry point
├── manifest.json    # PWA manifest
├── sw.js           # Service worker
└── README.md       # This file
```

### Browser Support
- Chrome 67+
- Firefox 63+
- Safari 11.1+
- Edge 79+

## 🔧 Development

### Local Development
```bash
# Start development server
npm install -g serve
serve .

# Or with Python
python3 -m http.server 8000
```

### Building
This is a static site - no build process required. Simply serve the files directly.

### Testing
Open `test.html` in your browser to run functionality tests.

## 🎨 Customization

### Changing Colors
Modify CSS custom properties in `css/theme.css`:
```css
:root {
  --accent: #4f9cff;    /* Primary accent color */
  --lab: #22c55e;       /* Lab session color */
  --bg: #0b0f14;        /* Background color */
}
```

### Adding Subjects
Edit `js/data.js`:
```javascript
export const SUBJECTS = {
  // Add new subject here
  NEW_SUB: {
    name: "New Subject Name",
    faculty: "Faculty Name",
    code: "Course Code",
    type: "Theory/Lab/Block"
  }
};
```

### Modifying Schedule
Update the `TIMETABLE` object in `js/data.js` with your schedule data.

## 📱 PWA Features

### Installation Benefits
- **Offline Access**: Works without internet
- **Home Screen Icon**: Launch like native apps
- **Full Screen**: Immersive experience
- **Push Notifications**: (Can be extended)

### Service Worker
Handles caching of:
- Main HTML file
- CSS and JavaScript assets
- Static resources

## 🔒 Privacy & Security

- **No Data Collection**: All data stored locally
- **No External Requests**: Pure client-side application
- **Secure Context**: Works over HTTPS
- **Private Browsing**: No tracking or analytics

## 🐛 Troubleshooting

### Common Issues

**Modal not appearing:**
- Check browser console for JavaScript errors
- Ensure all CSS files are loaded properly

**PWA installation not working:**
- Verify browser supports PWA features
- Check that you're serving over HTTPS (or localhost)
- Clear browser cache and try again

**Styles not loading:**
- Verify CSS file paths in `index.html`
- Check browser developer tools for 404 errors

### Browser Compatibility
If experiencing issues:
1. Update to latest browser version
2. Try incognito/private browsing mode
3. Clear browser cache and cookies
4. Disable browser extensions temporarily

## 🤝 Contributing

Feel free to fork and improve this project! Areas for contribution:
- Additional features
- Bug fixes
- UI/UX improvements
- Performance optimizations
- Documentation enhancements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web standards
- Inspired by clean, minimalist design principles
- Designed specifically for educational institution timetabling needs

---
*Made with ❤️ for CFIS Students*