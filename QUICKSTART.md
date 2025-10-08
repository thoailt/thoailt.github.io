# Quick Start Guide

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev
# → Visit http://localhost:5174

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Edit Content

### 1. Update Config
Edit `public/contents/config.yml`:
```yaml
title: Your Name
page-top-title: Your Name
top-section-bg-text: Your Field
home-subtitle: Your Name
copyright-text: '2025 © Your Name'
```

### 2. Update Content Files
- **About:** `public/contents/home.md`
- **Publications:** `public/contents/publications.md`
- **Awards:** `public/contents/awards.md`

### 3. Replace Images
- **Avatar:** `public/assets/img/avt-transparent.png`
- **Favicon:** `public/assets/LOGO-HCMUE-02.svg`

## 🎨 Customize Design

### Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'primary': '#6366f1',    // Change this
      'secondary': '#8b5cf6',  // Change this
    },
  },
}
```

### Fonts
Edit `src/index.css`:
```css
@theme {
  --font-newsreader: 'Newsreader', serif;
  --font-mulish: 'Mulish', sans-serif;
}
```

## 🚀 Deploy

### Option 1: GitHub Actions (Automatic)
```bash
git add .
git commit -m "Update website"
git push origin main
```
→ Automatically deploys to GitHub Pages!

### Option 2: Manual Deploy
```bash
npm run build
# Upload dist/ folder to your hosting
```

## 📁 Project Structure

```
src/
├── components/      # React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Section.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── Card.jsx
├── hooks/          # Custom hooks
│   ├── useConfig.js
│   └── useMarkdown.js
├── App.jsx
├── main.jsx
└── index.css

public/
├── contents/       # Your content (edit here!)
│   ├── config.yml
│   ├── home.md
│   ├── publications.md
│   └── awards.md
└── assets/         # Images
    └── img/
```

## 🔧 Key Features

✅ **Lazy Loading** - Components load when needed
✅ **Code Splitting** - Smaller initial bundle
✅ **Smooth Animations** - 60fps Framer Motion
✅ **Markdown Support** - Write content easily
✅ **LaTeX Math** - KaTeX rendering
✅ **Responsive** - Mobile-first design
✅ **SEO Ready** - Proper meta tags

## 📱 Performance Tips

1. **Images:** Use WebP format, compress before upload
2. **Markdown:** Keep files under 100KB
3. **Animations:** Already optimized with `viewport={{ once: true }}`
4. **Build:** Run `npm run build` to get optimized bundle

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Vite will automatically find another port
npm run dev
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Slow animations?**
- Reduce `duration` in component files
- Check browser DevTools Performance tab

## 📚 Tech Stack

- React 19
- Vite 7
- TailwindCSS v4
- Framer Motion
- react-markdown
- KaTeX

---

🎉 **Ready to customize!** Edit content files in `public/contents/` and run `npm run dev`
