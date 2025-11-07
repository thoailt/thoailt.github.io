# 🚀 Quick Start Guide

Quick guide to deploy your website to GitHub Pages with domain **thoailt.com**.

---

## ✅ Quick Checklist

### Step 1: Prepare Content (5-10 minutes)

```bash
# 1. Update personal information
# Edit file: data/siteConfig.json
# - name, title, email, bio, social links
# - education, awards

# 2. Add avatar
# File: public/images/avatar.jpg (400x400px)

# 3. Add publications (if any)
# File: data/publications.json

# 4. Write blog posts (optional)
# Create .md files in the posts/ directory
```

### Step 2: Test Locally (2-3 minutes)

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000 and check

# Build static site
npm run export

# Test production build
npx serve out
```

### Step 3: Push to GitHub (2 minutes)

```bash
# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/thoailt/thoailt.github.io.git

# Commit and push
git add .
git commit -m "Initial deployment"
git push -u origin main
```

### Step 4: Enable GitHub Pages (1 minute)

1. Go to https://github.com/thoailt/thoailt.github.io
2. Click **Settings** → **Pages**
3. Source: Select **GitHub Actions**
4. Wait for deployment to complete (1-2 minutes)

### Step 5: Configure DNS (5 minutes)

Go to your domain management page and add:

**A Records:**
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

**CNAME Record:**
```
Type: CNAME, Name: www, Value: thoailt.github.io
```

### Step 6: Set Custom Domain (1 minute)

1. Go to **Settings → Pages**
2. Custom domain: Enter `thoailt.com`
3. Click **Save**
4. Check ✅ **Enforce HTTPS**

### Step 7: Wait & Verify (24-48 hours)

DNS propagation can take 1-48 hours. Check:

```bash
# Check DNS
nslookup thoailt.com

# Or check online:
# https://dnschecker.org/
```

---

## 📋 Pre-Configured Files

✅ The following files are ready:

- ✅ `public/CNAME` → `thoailt.com`
- ✅ `next.config.js` → Static export enabled
- ✅ `data/siteConfig.json` → URL = `https://thoailt.com`
- ✅ `.github/workflows/deploy.yml` → Auto deploy on push
- ✅ `.gitignore` → Ignore /out, node_modules, etc.

❌ You need to do:

- ⚠️ Update personal information in `data/siteConfig.json`
- ⚠️ Add avatar: `public/images/avatar.jpg`
- ⚠️ Add OG image: `public/images/og-image.jpg`
- ⚠️ Setup contact form (see CONTACT_FORM_SETUP.md)

---

## 🎯 Important Commands

```bash
# Development
npm run dev              # Run dev server

# Build
npm run export           # Build static site → /out

# Test production
npx serve out            # Test /out folder

# Deploy
git add .
git commit -m "Update"
git push origin main     # Auto deploy via GitHub Actions
```

---

## 📁 Files to Edit

| File | Purpose | Required |
|------|---------|----------|
| `data/siteConfig.json` | Personal info, SEO, education, awards | ✅ REQUIRED |
| `data/publications.json` | Your publications | Optional |
| `posts/*.md` | Blog posts | Optional |
| `public/images/avatar.jpg` | Profile picture | ✅ REQUIRED |
| `public/images/og-image.jpg` | Social sharing image | Recommended |

---

## 🔗 Important Links

- **Live site:** https://thoailt.com
- **GitHub repo:** https://github.com/thoailt/thoailt.github.io
- **Deployment guide:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Contact form setup:** [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

---

## ❓ FAQs

**Q: How long does deployment take?**
A: GitHub Actions usually takes 1-2 minutes. DNS propagation takes 1-48 hours.

**Q: How do I know deployment is complete?**
A: Go to the Actions tab in your repo, and check if the workflow has a green ✅ checkmark.

**Q: Custom domain not working?**
A: Wait 24-48 hours for DNS propagation. Check DNS with `nslookup thoailt.com`.

**Q: How do I update the website?**
A: Edit files → commit → push. GitHub Actions will automatically deploy.

**Q: Contact form not sending emails?**
A: See CONTACT_FORM_SETUP.md to setup FormSpree or Web3Forms.

---

## 🆘 Need Help?

**See detailed guides:**
- 📖 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Complete guide
- 📧 [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) - Contact form setup
- 📝 [README.md](README.md) - Project overview

**Testing tools:**
- DNS Check: https://dnschecker.org/
- OpenGraph Test: https://www.opengraph.xyz/
- Page Speed: https://pagespeed.web.dev/

---

**Good luck! 🎉**
