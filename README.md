# Thoai Le - Academic Personal Website

A modern academic personal website built with **React**, **Vite**, and **TailwindCSS**.

🌐 **Live:** [https://thoailt.com](https://thoailt.com)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Styled with TailwindCSS v4
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 📝 **Markdown Support** - Write content in Markdown
- 🔢 **LaTeX Math** - Full support for mathematical formulas via KaTeX
- 🎯 **Easy to Customize** - Simple configuration via YAML
- 🚀 **Smooth Animations** - Powered by Framer Motion

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite 7
- **Styling:** TailwindCSS v4
- **Markdown:** react-markdown + remark/rehype plugins
- **Math:** KaTeX
- **Icons:** React Icons
- **Animations:** Framer Motion

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/thoailt/thoailt.github.io.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

### Edit Configuration
Modify `public/contents/config.yml`:
```yaml
title: Your Name
page-top-title: Your Name
top-section-bg-text: Your Field
home-subtitle: Your Name
copyright-text: '2025 &copy; <a href="https://yoursite.com">Your Name</a>'
```

### Edit Content
Update markdown files in `public/contents/`:
- `home.md` - About section
- `publications.md` - Publications list
- `awards.md` - Awards and achievements

### Replace Images
- Background: `public/assets/img/bg.jpg`
- Avatar: `public/assets/img/avt-transparent.png`
- Favicon: `public/assets/LOGO-HCMUE-02.svg`

## 🚀 Deployment

### GitHub Pages
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages

3. Configure your custom domain in repository settings

### Automated Deployment
The project is configured for GitHub Pages deployment. Simply push to the `main` branch.

## 📄 License

This project is based on the original template by [Sen Li](https://github.com/senli1073/senli1073.github.io), rebuilt with modern React stack.

MIT License - Feel free to use and modify for your own purposes.

## 🙏 Credits

- Original template: [Sen Li](https://github.com/senli1073/senli1073.github.io)
- Built by: [Thoai Le](https://github.com/thoailt)
