# 🔗 Complete Setup: GitHub + Netlify (Recommended)

## 📋 Overview

**Why connect GitHub to Netlify?**
- ✅ Automatic deployment on every push
- ✅ Version control for your portfolio
- ✅ Easy updates (just push to GitHub)
- ✅ Deployment history
- ✅ Free SSL + CDN

---

## Step 1: Push Your Code to GitHub

### 1.1 Add All Files
```bash
git add .
```

### 1.2 Commit Changes
```bash
git commit -m "Complete portfolio with photo and resume - ready for deployment"
```

### 1.3 Push to GitHub
```bash
git push origin main
```

**Done!** Your code is now on GitHub at:
`https://github.com/yokeshwarlakshmipathy/MyPortfolio`

---

## Step 2: Connect GitHub to Netlify

### 2.1 Go to Netlify
1. Open browser
2. Go to: **https://app.netlify.com**
3. **Sign up** or **Sign in** (use GitHub to sign in - easier!)

### 2.2 Add New Site
1. Click **"Add new site"** button
2. Select **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Search for your repository: **"MyPortfolio"**
6. Click on **"MyPortfolio"**

### 2.3 Configure Build Settings
Netlify should auto-detect, but verify these settings:

**Build settings:**
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### 2.4 Deploy!
1. Click **"Deploy site"** button
2. Wait 2-3 minutes for first deployment
3. ✅ **Your site is live!**

You'll get a URL like: `https://myportfolio-123456.netlify.app`

---

## ✅ What Happens Next?

### Automatic Deployments
- Every time you push to GitHub → Netlify automatically rebuilds and deploys
- No need to drag & drop manually anymore!

### Update Your Portfolio
1. Make changes to your code
2. Run: `git add .`
3. Run: `git commit -m "Update description"`
4. Run: `git push origin main`
5. ✅ Netlify automatically deploys the update!

---

## 🎯 Customize Your Site

### Change Site Name
1. Go to Netlify dashboard
2. Click on your site
3. Go to **"Site settings"** → **"Change site name"**
4. Enter: `yokeshwar-portfolio` (or your preferred name)
5. New URL: `https://yokeshwar-portfolio.netlify.app`

### Add Custom Domain (Optional)
1. Go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `yokeshwar.dev`)
4. Follow DNS setup instructions

---

## 📋 Quick Reference

### Your Repository:
`https://github.com/yokeshwarlakshmipathy/MyPortfolio`

### Commands to Remember:
```bash
# Make changes, then:
git add .
git commit -m "Your commit message"
git push origin main
# Netlify automatically deploys!
```

---

## ✅ Verification

After deployment, check:
- [ ] Site loads: `https://your-site.netlify.app`
- [ ] Photo shows in About section
- [ ] Resume opens correctly
- [ ] All sections work
- [ ] Mobile responsive

---

## 🎉 Benefits of This Setup

1. **Version Control** - All your code is safe on GitHub
2. **Auto-Deploy** - Push to GitHub = Auto deploy
3. **Easy Updates** - Just commit and push
4. **Deployment History** - See all past deployments
5. **Free & Fast** - Free hosting + fast CDN

---

Ready? Let's do it step by step! 🚀

