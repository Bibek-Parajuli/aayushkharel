# Setup Guide - Love Mail Valentine Website

## Quick Start

Follow these steps to set up and customize your Valentine's Day website.

## Step 1: Install Dependencies

```bash
cd valentine-love-mail
npm install
```

## Step 2: Customize Your Content

### Edit the Configuration File

Open `src/config.js` and update the following:

```javascript
export const CONFIG = {
  // Change the recipient's name
  recipientName: 'Your Love\'s Name',
  recipientNickname: 'Nickname',
  
  // Replace with your own photo URL
  photoUrl: 'https://your-image-url.com/photo.jpg',
  
  // Customize the letter content
  letter: {
    greeting: 'My Dearest [Name],',
    paragraph1: 'Your personalized message here...',
    paragraph2: 'Your continued message here...',
  },
  
  // Customize celebration messages
  celebration: {
    question: 'Will you be my Valentine?',
    subtitle: 'Your subtitle here...',
    successTitle: 'You made my day!',
    successMessage: 'Your success message...',
    successSubtitle: 'Your success subtitle...',
  },
};
```

## Step 3: Add Your Photo

### Option 1: Use an External URL
Update the `photoUrl` in `src/config.js` with a direct link to your image:
```javascript
photoUrl: 'https://example.com/your-photo.jpg'
```

### Option 2: Use a Local Image
1. Create an `assets/images` folder in `src/`
2. Add your photo (e.g., `couple-photo.jpg`)
3. Import and use it:

```javascript
// In src/config.js
import couplePhoto from './assets/images/couple-photo.jpg';

export const CONFIG = {
  photoUrl: couplePhoto,
  // ... rest of config
};
```

## Step 4: Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

## Step 5: Customize Colors (Optional)

Edit `tailwind.config.js` to change colors:

```javascript
theme: {
  extend: {
    colors: {
      valentine: {
        red: '#DC143C',      // Main color
        pink: '#FFB6C1',     // Accent color
        cream: '#FFF8DC',    // Background
        darkred: '#8B0000',  // Dark accent
      }
    }
  }
}
```

## Step 6: Adjust Animations (Optional)

Edit animation timings in `src/config.js`:

```javascript
timings: {
  envelopeOpenDelay: 500,        // Delay before envelope opens (ms)
  envelopeOpenDuration: 1000,    // How long envelope takes to open (ms)
  cardRevealDelay: 2000,         // How long card shows before next page (ms)
  pageTransitionDelay: 300,      // Delay for page transitions (ms)
}
```

## Step 7: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

## Deployment Options

### Option 1: Netlify
1. Create account at netlify.com
2. Drag and drop the `dist` folder
3. Your site is live!

### Option 2: Vercel
1. Create account at vercel.com
2. Import your GitHub repository
3. Deploy automatically

### Option 3: GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Images not showing?
- Make sure the image URL is correct and publicly accessible
- Check browser console for errors
- Try using a different image hosting service

### Fonts not loading?
- Check your internet connection
- Google Fonts should load automatically
- Clear browser cache and reload

### Animations not working?
- Make sure all dependencies are installed
- Check for JavaScript errors in console
- Try a different browser

## Advanced Customization

### Add More Pages
1. Create a new page component in `src/pages/`
2. Import it in `App.jsx`
3. Add it to the page flow

### Change Animations
Edit the animation classes in `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'your-animation 2s ease-in-out infinite',
}
keyframes: {
  'your-animation': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  }
}
```

## Tips for Best Results

1. **Photo Quality**: Use high-resolution images (at least 400x400px)
2. **Message Length**: Keep paragraphs concise for better readability
3. **Testing**: Test on mobile devices before sharing
4. **Timing**: Adjust animation timings to your preference
5. **Personal Touch**: Add your own creative modifications!

## Need Help?

- Check the README.md for component details
- Review the code comments in each file
- Test changes locally before deploying

## Have Fun! 💕

This website is designed to create a memorable Valentine's Day experience. 
Make it personal, make it special, and most importantly, make it yours!
