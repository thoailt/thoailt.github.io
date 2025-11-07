# 🚀 Deployment Guide to GitHub Pages with Custom Domain

Complete guide to deploy your portfolio website to **thoailt.github.io** and connect it with domain **thoailt.com**.

---

## 📋 Pre-Deployment Checklist

- [x] ✅ `.gitignore` file is properly configured
- [x] ✅ `public/CNAME` file created with domain `thoailt.com`
- [x] ✅ `next.config.js` configured for static export
- [x] ✅ `data/siteConfig.json` has correct URL (`https://thoailt.com`)
- [x] ✅ GitHub Actions workflow is ready
- [ ] ⚠️ Update personal information in `data/siteConfig.json`
- [ ] ⚠️ Add avatar to `public/images/avatar.jpg`
- [ ] ⚠️ Add OG image to `public/images/og-image.jpg`

---

## 🔧 STEP 1: Update Personal Information

### 1.1. Edit `data/siteConfig.json`

Open the file and update:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "email@thoailt.com",
  "phone": "Your Phone",
  "location": "Your Location",
  "bio": "Your short bio...",
  "avatar": "/images/avatar.jpg",

  "social": {
    "github": "https://github.com/thoailt",
    "linkedin": "https://linkedin.com/in/your-profile",
    "twitter": "https://twitter.com/your-handle",
    "scholar": "https://scholar.google.com/citations?user=YOUR_ID",
    "orcid": "https://orcid.org/YOUR_ORCID"
  }
}
```

### 1.2. Add Avatar and OG Image

```bash
# Add your profile picture
# File: public/images/avatar.jpg
# Recommended size: 400x400px (square)

# Add OpenGraph image for social sharing
# File: public/images/og-image.jpg
# Recommended size: 1200x630px
```

### 1.3. Update Education & Awards

In `data/siteConfig.json`, update:

```json
{
  "education": [
    {
      "degree": "Your Degree",
      "institution": "University Name",
      "location": "City, Country",
      "year": "2020 - 2024",
      "description": "Detailed description...",
      "gpa": "3.8/4.0"
    }
  ],
  "awards": [
    {
      "title": "Award Name",
      "organization": "Organization",
      "year": "2024",
      "description": "Award description..."
    }
  ]
}
```

### 1.4. Add Publications

Edit `data/publications.json`:

```json
[
  {
    "id": "pub-1",
    "title": "Paper Title",
    "authors": ["Your Name", "Co-Author"],
    "venue": "Conference/Journal Name",
    "year": 2024,
    "doi": "10.1109/...",
    "pdf": "/papers/filename.pdf",
    "type": "journal",
    "tags": ["Machine Learning"]
  }
]
```

### 1.5. Write Blog Posts

Create files in `posts/` directory:

```markdown
---
title: "Blog Post Title"
date: "2024-11-07"
author: "Your Name"
tags: ["Tag1", "Tag2"]
excerpt: "Short description..."
---

# Blog Post Content

Write your content here...
```

---

## 📦 STEP 2: Test Build Locally

Before deployment, test locally:

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000 and check

# 3. Build static site
npm run export

# 4. Test production build
npx serve out
# Open http://localhost:3000 and check again
```

**Testing Checklist:**
- [ ] All pages load correctly (/, /about, /publications, /blog, /contact)
- [ ] Avatar displays correctly
- [ ] Navigation works
- [ ] Back to top button works
- [ ] Contact form displays correctly
- [ ] No errors in console (F12)

---

## 🔄 STEP 3: Push Code to GitHub

### 3.1. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 3.2. Push to GitHub

**NOTE:** Since you already have the `thoailt.github.io` repo, you'll push new code to replace the old one.

#### Option 1: Force Push (Complete Replacement)

⚠️ **WARNING:** This will DELETE all old code!

```bash
# Add remote (if not already added)
git remote add origin https://github.com/thoailt/thoailt.github.io.git

# Or if remote exists, update URL
git remote set-url origin https://github.com/thoailt/thoailt.github.io.git

# Force push (complete replacement)
git push -f origin main
```

#### Option 2: Backup Before Push

```bash
# 1. Backup old repo
# Go to GitHub → Settings → Rename repository to "thoailt.github.io-old"

# 2. Create new repo named "thoailt.github.io"

# 3. Push new code
git remote add origin https://github.com/thoailt/thoailt.github.io.git
git branch -M main
git push -u origin main
```

---

## ⚙️ STEP 4: Configure GitHub Pages

### 4.1. Enable GitHub Pages

1. Go to repo: https://github.com/thoailt/thoailt.github.io
2. Click **Settings** tab
3. Scroll down to **Pages** (left menu)
4. In **Build and deployment**:
   - **Source**: Select **GitHub Actions**
   - (NOT "Deploy from a branch")

### 4.2. Check GitHub Actions

1. Go to **Actions** tab in repo
2. Wait for **"Deploy to GitHub Pages"** workflow to complete (1-2 minutes)
3. If successful, you'll see a green ✅ checkmark
4. If error, click to view logs

**Common Errors:**
- **npm ci fails**: Run `npm install` then commit `package-lock.json`
- **Build fails**: Check TypeScript or React errors
- **Permission denied**: Check Settings → Pages → Source must be "GitHub Actions"

---

## 🌐 STEP 5: Configure Custom Domain (thoailt.com)

### 5.1. Configure DNS at Domain Provider

Go to your domain management page (GoDaddy, Namecheap, Cloudflare, etc.) and add DNS records:

#### Option A: Using A Records (Recommended)

Add **A Records**:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

Add **CNAME Record** for www:

```
Type: CNAME
Name: www
Value: thoailt.github.io
```

#### Option B: Using CNAME (Simpler but no apex domain)

```
Type: CNAME
Name: @
Value: thoailt.github.io
```

### 5.2. Configure in GitHub

1. Go to **Settings → Pages**
2. In **Custom domain**:
   - Enter: `thoailt.com`
   - Click **Save**
3. Wait for DNS check (1-2 minutes)
4. When DNS check succeeds:
   - ✅ Check **Enforce HTTPS** (required)

### 5.3. Check DNS Propagation

```bash
# Check if DNS has propagated
nslookup thoailt.com
# Or
dig thoailt.com

# Should see GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

**Note:** DNS propagation can take from a few minutes to 48 hours.

---

## ✅ STEP 6: Verify Deployment

### 6.1. Test URLs

Check these URLs work:

- [ ] https://thoailt.com
- [ ] https://www.thoailt.com
- [ ] https://thoailt.com/about
- [ ] https://thoailt.com/publications
- [ ] https://thoailt.com/blog
- [ ] https://thoailt.com/contact

### 6.2. Test HTTPS

- [ ] Auto-redirect from HTTP → HTTPS
- [ ] SSL certificate works (see lock icon in browser)
- [ ] No mixed content warnings

### 6.3. Test SEO & Social Sharing

1. **Test OpenGraph:**
   - Paste URL to: https://www.opengraph.xyz/
   - Check preview is correct

2. **Test Twitter Card:**
   - Paste URL to: https://cards-dev.twitter.com/validator
   - Check preview

3. **Test Google Search:**
   - URL Inspection: https://search.google.com/search-console
   - Submit URL for Google to index

---

## 🔄 STEP 7: Update Workflow for Future Changes

Every time you want to update the website:

```bash
# 1. Edit files (content, images, code...)

# 2. Test locally
npm run dev

# 3. Build and test
npm run export
npx serve out

# 4. Commit changes
git add .
git commit -m "Update: description of changes"

# 5. Push to GitHub
git push origin main

# 6. GitHub Actions will auto-deploy
# Wait 1-2 minutes, refresh thoailt.com to see changes
```

---

## 🐛 Troubleshooting

### Issue 1: 404 Not Found on pages

**Cause:** Next.js static export needs trailing slash

**Solution:** File `next.config.js` already has `trailingSlash: true`, ensure it's not removed.

### Issue 2: Custom domain not working

**Checklist:**
- [ ] File `public/CNAME` contains `thoailt.com`
- [ ] DNS records added correctly
- [ ] DNS has propagated (wait 24-48h)
- [ ] GitHub Pages Settings has custom domain `thoailt.com`
- [ ] HTTPS is enforced

### Issue 3: GitHub Actions fails

**Check:**
- Go to Actions tab → Click failed workflow
- Read logs to find error
- Usually TypeScript errors, missing files, or build errors

**Common fix:**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 4: Images not loading

**Cause:** Incorrect path or file doesn't exist

**Check:**
- Files are in `public/` directory?
- Path in code is correct (starts with `/`)?
- Example: `/images/avatar.jpg` not `images/avatar.jpg`

### Issue 5: Contact form not sending emails

**Solution:** See `CONTACT_FORM_SETUP.md` to setup FormSpree or Web3Forms.

---

## 📝 Important Files

| File | Purpose |
|------|---------|
| `public/CNAME` | Specify custom domain |
| `next.config.js` | Next.js build configuration |
| `data/siteConfig.json` | Personal info, SEO, navigation |
| `data/publications.json` | Publications list |
| `.github/workflows/deploy.yml` | GitHub Actions auto-deploy |
| `.gitignore` | Files to ignore in git |

---

## 🎯 Final Checklist

Before announcing your website:

- [ ] All personal information updated
- [ ] Avatar and OG image added
- [ ] Education and Awards filled
- [ ] Publications added (at least 1-2)
- [ ] Blog posts written (at least 1-2)
- [ ] Contact form setup (FormSpree/Web3Forms)
- [ ] Custom domain `thoailt.com` works
- [ ] HTTPS enabled
- [ ] Website responsive on mobile
- [ ] SEO tags checked
- [ ] Social sharing preview looks good
- [ ] Google Analytics added (optional)

---

## 🆘 Need Help?

**Reference Documentation:**
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- GitHub Pages Custom Domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- GitHub Actions: https://docs.github.com/en/actions

**Common Resources:**
- Test DNS: https://dnschecker.org/
- Test OpenGraph: https://www.opengraph.xyz/
- Test Speed: https://pagespeed.web.dev/

---

## 🎉 Congratulations!

If you've completed all steps above, your website is now LIVE at:

**🌐 https://thoailt.com**

Share this link and start building your personal brand! 🚀

---

**Last updated:** 2024-11-07
**Version:** 1.0
