# Contributing to Your Portfolio

This guide will help you maintain and customize your portfolio website.

## Quick Guide for Non-Developers

You don't need to know React or programming to update your portfolio! Just edit JSON and Markdown files.

### Updating Your Information

1. **Personal Info**: Edit `data/siteConfig.json`
2. **Publications**: Edit `data/publications.json`
3. **Blog Posts**: Add new `.md` files in `posts/` folder

### Updating Personal Information

1. Open `data/siteConfig.json`
2. Update fields like name, title, email, bio, social links
3. Add/update education and awards
4. Save the file

### Adding a New Publication

1. Add PDF to `public/papers/` (optional)
2. Open `data/publications.json`
3. Copy an existing publication entry
4. Update with your publication details
5. Save the file

Example:
```json
{
  "id": "pub-1",
  "title": "Your Paper Title",
  "authors": ["Your Name", "Co-Author"],
  "venue": "Conference/Journal Name",
  "year": 2024,
  "doi": "10.1109/...",
  "url": "https://...",
  "pdf": "/papers/filename.pdf",
  "abstract": "Paper abstract...",
  "type": "conference",
  "tags": ["Machine Learning", "AI"]
}
```

### Writing a New Blog Post

1. Create a new file in `posts/` folder
2. Name it: `YYYY-MM-DD-post-title.md` (e.g., `2024-03-15-my-post.md`)
3. Add frontmatter at the top:

```markdown
---
title: "My Blog Post Title"
date: "2024-03-15"
author: "Your Name"
tags: ["Tag1", "Tag2"]
excerpt: "Brief description"
---

# My Blog Post Title

Your content here...
```

4. Write your content using Markdown
5. Save the file

### HTML Formatting in JSON Files

You can use HTML tags in certain JSON fields (like `bio` and `abstract`):

```json
{
  "bio": "I'm a <strong>teaching assistant</strong> at <em>HCMUE</em>. Visit my <a href='https://github.com/yourusername'>GitHub</a>."
}
```

See [HTML_FORMATTING_GUIDE.md](HTML_FORMATTING_GUIDE.md) for more details.

## For Developers

### Setting Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

### Code Structure

- **Components**: Reusable React components
- **Pages**: Next.js pages (file-based routing)
- **Data**: JSON configuration files
- **Posts**: Markdown blog posts
- **Public**: Static assets

### Making Code Changes

1. Create a new branch: `git checkout -b feature/my-change`
2. Make your changes
3. Test locally: `npm run dev`
4. Build and test: `npm run export`
5. Commit: `git commit -m "Description of change"`
6. Push: `git push origin feature/my-change`

### Adding New Components

1. Create component in `components/` directory
2. Export it from the component file
3. Import and use in pages
4. Update types if using TypeScript

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing component patterns
- Ensure responsive design (mobile-first)
- Maintain accessibility (semantic HTML, ARIA labels)

### Testing Checklist

Before deploying:

- [ ] Site builds without errors (`npm run export`)
- [ ] All pages load correctly (/, /about, /publications, /blog, /contact)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Avatar displays correctly
- [ ] Responsive on mobile, tablet, and desktop
- [ ] Lighthouse scores: 90+ (Performance, Accessibility, SEO)
- [ ] No console errors
- [ ] Blog posts render correctly
- [ ] Filter/search functionality works
- [ ] Back to top button appears on scroll

### Deployment

The site auto-deploys via GitHub Actions when you push to `main` branch.

Manual deployment:
```bash
npm run export
# Upload /out folder to hosting
```

## Common Customizations

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... add more shades
        600: '#0284c7', // Main color
        700: '#0369a1',
      },
    },
  },
}
```

### Adding New Sections to About Page

1. Open `pages/about/index.tsx`
2. Add new section component
3. Update data in `data/siteConfig.json` if needed

### Modifying Navigation

Edit `data/siteConfig.json`:

```json
{
  "navigation": [
    { "name": "About", "path": "/about" },
    { "name": "Publications", "path": "/publications" },
    { "name": "Blog", "path": "/blog" },
    { "name": "Contact", "path": "/contact" }
  ]
}
```

### Modifying Layout

Edit `components/Layout.tsx` to change:
- Header placement
- Footer content
- Overall page structure

## Getting Help

- Read the main [README.md](README.md)
- Check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for deployment help
- See [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for contact form setup
- Review [HTML_FORMATTING_GUIDE.md](HTML_FORMATTING_GUIDE.md) for HTML formatting
- Check [Next.js docs](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)

## Best Practices

1. **Keep data separate**: Don't hardcode content in components
2. **Use semantic HTML**: Proper heading hierarchy, landmarks
3. **Optimize images**: Compress before adding to `/public`
   - Avatar: 400x400px recommended
   - OG image: 1200x630px recommended
4. **Write accessible code**: Alt text, ARIA labels, keyboard navigation
5. **Test thoroughly**: Check on multiple browsers and devices
6. **Commit often**: Small, focused commits with clear messages
7. **Preview before deploying**: Always run `npm run dev` locally first

## File Naming Conventions

- **Components**: PascalCase (`ProjectCard.tsx`)
- **Pages**: lowercase (`index.tsx`, `[slug].tsx`)
- **Data files**: camelCase (`siteConfig.json`)
- **Blog posts**: `YYYY-MM-DD-title.md`
- **Images**: lowercase-with-hyphens (`project-name.jpg`)

## Important Files

| File | Purpose |
|------|---------|
| `data/siteConfig.json` | Personal info, SEO, navigation, education, awards |
| `data/publications.json` | Publications list |
| `posts/*.md` | Blog posts |
| `public/CNAME` | Custom domain configuration |
| `next.config.js` | Next.js build settings |
| `.github/workflows/deploy.yml` | GitHub Actions deployment |

## Questions?

Feel free to:
- Open an issue on GitHub
- Reach out via contact info in your portfolio
- Refer to the documentation links in README

Happy coding! 🎉
