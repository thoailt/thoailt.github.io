# Portfolio Website

A beautiful, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Deployed at **[thoailt.com](https://thoailt.com)**.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with Tailwind CSS
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🚀 **Fast Performance**: Static site generation for optimal speed
- 📝 **Markdown Blog**: Write blog posts in Markdown
- 🎓 **Education & Awards**: Showcase your academic achievements
- 📚 **Publications**: IEEE-style citations, sortable by year
- 📧 **Contact Form**: Integrated contact form with multiple options
- ♿ **Accessible**: WCAG compliant, semantic HTML
- 🔍 **SEO Optimized**: Meta tags, OpenGraph, Twitter Cards
- 🔝 **Back to Top**: Smooth scroll button
- 🎯 **Custom Domain**: Supports custom domain configuration

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build static site
npm run export

# Test production build
npx serve out
```

## 📁 Project Structure

```
portfolio-website/
├── components/          # React components
│   ├── Header.tsx      # Navigation with smooth scroll
│   ├── Footer.tsx      # Footer with social links
│   ├── Layout.tsx      # Page wrapper
│   ├── SEO.tsx         # SEO meta tags
│   ├── BackToTop.tsx   # Scroll to top button
│   └── ...
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── about/          # About page
│   ├── publications/   # Publications page
│   ├── blog/          # Blog pages
│   └── contact/       # Contact page
├── data/              # JSON configuration
│   ├── siteConfig.json   # Site settings, SEO, education, awards
│   └── publications.json # Publications data
├── posts/             # Markdown blog posts
├── public/            # Static assets
│   ├── CNAME          # Custom domain configuration
│   ├── images/        # Images
│   └── papers/        # PDF publications
└── styles/
    └── globals.css    # Global styles
```

## 🎯 Customization

### 1. Update Personal Information

Edit `data/siteConfig.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "bio": "Your bio...",
  "avatar": "/images/avatar.jpg",
  "seo": {
    "siteUrl": "https://thoailt.com"
  }
}
```

### 2. Add Education & Awards

In `data/siteConfig.json`:

```json
{
  "education": [...],
  "awards": [...]
}
```

### 3. Add Publications

Edit `data/publications.json`:

```json
[
  {
    "title": "Paper Title",
    "authors": ["Your Name", "Co-Author"],
    "venue": "Conference/Journal Name",
    "year": 2024,
    "doi": "10.1109/...",
    "type": "journal"
  }
]
```

### 4. Write Blog Posts

Create Markdown files in `posts/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-11-07"
author: "Your Name"
tags: ["Tag1", "Tag2"]
excerpt: "Brief description..."
---

# Your Blog Post

Content here...
```

### 5. Add Images

- **Avatar**: `public/images/avatar.jpg` (400x400px)
- **OG Image**: `public/images/og-image.jpg` (1200x630px)
- **Project Images**: `public/images/projects/`
- **Papers**: `public/papers/`

## 🚀 Deployment

This site is configured for GitHub Pages with custom domain support.

**📖 See detailed deployment guide:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### Quick Deploy

```bash
# 1. Update your information in data/siteConfig.json
# 2. Add your avatar to public/images/avatar.jpg
# 3. Push to GitHub
git add .
git commit -m "Initial deployment"
git push origin main

# 4. Enable GitHub Pages in repo settings
# Settings → Pages → Source: GitHub Actions

# 5. Visit https://thoailt.com
```

## 📧 Contact Form Setup

The contact form needs a backend service to work. Choose one:

**📖 See setup guide:** [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

Recommended options:
- **FormSpree** (50 submissions/month free)
- **Web3Forms** (unlimited, free)
- **EmailJS** (200 emails/month free)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: Marked, Gray Matter
- **Deployment**: GitHub Pages + GitHub Actions
- **Custom Domain**: thoailt.com

## 📝 Key Files

| File | Purpose |
|------|---------|
| `public/CNAME` | Custom domain configuration |
| `next.config.js` | Next.js build settings |
| `data/siteConfig.json` | Site configuration, SEO, personal info |
| `.github/workflows/deploy.yml` | Auto-deployment workflow |
| `.gitignore` | Git ignore rules |

## 🔄 Update Workflow

```bash
# 1. Make changes (edit content, add images, etc.)
npm run dev  # Test locally

# 2. Build and verify
npm run export
npx serve out

# 3. Commit and push
git add .
git commit -m "Update: description"
git push origin main

# 4. GitHub Actions auto-deploys to thoailt.com
```

## 🎨 Features Overview

### Pages

- **Home** (`/`): Hero with avatar, recent publications, latest blog posts
- **About** (`/about`): Full bio, education, awards & honors
- **Publications** (`/publications`): All publications with filters
- **Blog** (`/blog`): All blog posts with search
- **Contact** (`/contact`): Contact form and information

### Components

- **Responsive Navigation**: Mobile-friendly menu
- **Back to Top Button**: Appears on scroll
- **SEO Optimization**: Meta tags for all pages
- **Social Sharing**: OpenGraph and Twitter Cards
- **Smooth Scroll**: Navigation and back to top

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [Contact Form Setup](CONTACT_FORM_SETUP.md) - Email integration guide
- [Contributing Guide](CONTRIBUTING.md) - How to customize the site

## 🐛 Troubleshooting

### Common Issues

**Site not deploying?**
- Check GitHub Actions tab for errors
- Ensure Settings → Pages → Source is "GitHub Actions"

**Custom domain not working?**
- Verify `public/CNAME` contains `thoailt.com`
- Check DNS settings at domain provider
- Wait 24-48h for DNS propagation

**Images not loading?**
- Ensure files are in `public/` directory
- Use absolute paths: `/images/file.jpg`

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Marked](https://marked.js.org/)

---

**Live at:** [https://thoailt.com](https://thoailt.com)

**Last Updated:** November 2024
