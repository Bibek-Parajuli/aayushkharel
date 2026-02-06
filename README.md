# Love Mail - Valentine's Day Website 💕

A beautiful, interactive Valentine's Day website built with React and Tailwind CSS featuring an envelope opening animation and love letter experience.

## Features

- 🎨 Beautiful gradient backgrounds and romantic color scheme
- 💌 Interactive envelope opening animation
- 📝 Elegant love letter with custom fonts
- 🎉 Celebration page with heart rain animation
- 📱 Fully responsive design
- ⚡ Smooth transitions and animations
- 🧩 Clean, modular component architecture

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Fonts** - Typography (Great Vibes, Playfair Display)

## Project Structure

```
valentine-love-mail/
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── FloralDecoration.jsx    # Floral decoration component
│   │   ├── HeartPattern.jsx        # Background heart pattern
│   │   ├── HeartRain.jsx           # Celebration heart rain effect
│   │   └── PageContainer.jsx       # Page layout wrapper
│   ├── pages/
│   │   ├── LandingPage.jsx         # Initial page with envelope
│   │   ├── EnvelopePage.jsx        # Envelope opening animation
│   │   ├── LetterPage.jsx          # Love letter content
│   │   └── CelebrationPage.jsx     # Final celebration page
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Update Personal Information

1. **Name in EnvelopePage.jsx:**
   ```jsx
   <h2 className="font-script text-4xl text-valentine-red mb-4">
     Your Name Here
   </h2>
   ```

2. **Photo in EnvelopePage.jsx:**
   ```jsx
   <img
     src="your-image-url-here"
     alt="Love"
     className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
   />
   ```

3. **Letter content in LetterPage.jsx:**
   - Update the greeting and message paragraphs

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  valentine: {
    red: '#DC143C',      // Main red color
    pink: '#FFB6C1',     // Light pink
    cream: '#FFF8DC',    // Cream background
    darkred: '#8B0000',  // Dark red accent
  }
}
```

## Component Details

### Pages
- **LandingPage**: Initial page with animated envelope
- **EnvelopePage**: Envelope opening with card reveal
- **LetterPage**: Love letter content
- **CelebrationPage**: Final celebration with user interaction

### Reusable Components
- **Button**: Customizable button with variants and sizes
- **PageContainer**: Consistent page layout wrapper
- **HeartPattern**: Animated background heart pattern
- **FloralDecoration**: Decorative floral elements
- **HeartRain**: Animated falling hearts effect

## Animation Features

- Floating animations for hearts and elements
- Heartbeat pulse effect
- Envelope opening 3D transformation
- Fade-in and scale-in transitions
- Smooth page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own Valentine's Day surprises! 💝

## Credits

- Design inspiration from TikTok @fayy.creates
- Built with ❤️ for Valentine's Day 2026
