# Public Assets Directory

This directory contains static assets that will be served directly by Next.js.

## Directory Structure

```
public/
├── favicon.ico          # Site favicon
├── images/
│   ├── avatar.jpg       # Your profile picture
│   ├── og-image.jpg     # OpenGraph/social media preview image (1200x630px recommended)
│   └── projects/        # Project screenshots
│       ├── code-assistant.jpg
│       ├── doc-generator.jpg
│       ├── collab-platform.jpg
│       ├── fitness-tracker.jpg
│       └── cloud-monitor.jpg
└── papers/              # PDF files of your publications
    ├── deep-learning-code-review.pdf
    ├── microservices-architecture.pdf
    └── ...
```

## Adding Images

1. **Profile Picture** (`images/avatar.jpg`):
   - Square image (e.g., 400x400px)
   - High quality, professional photo
   - Update the path in `data/siteConfig.json`

2. **OpenGraph Image** (`images/og-image.jpg`):
   - Size: 1200x630px (Facebook/Twitter standard)
   - Include your name and title
   - This appears when sharing your site on social media

3. **Project Images** (`images/projects/`):
   - Screenshot or logo of each project
   - Recommended size: 800x600px or 16:9 aspect ratio
   - Update filenames in `data/projects.json`

4. **Publications PDFs** (`papers/`):
   - Upload PDF versions of your papers
   - Update paths in `data/publications.json`

## Optimizing Images

For best performance:
- Use WebP format when possible
- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images for thumbnails)
- Consider using Next.js Image component for automatic optimization

## Favicon

Replace `favicon.ico` with your own favicon. You can generate one at:
- https://favicon.io/
- https://realfavicongenerator.net/

Include multiple sizes for different devices:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```
