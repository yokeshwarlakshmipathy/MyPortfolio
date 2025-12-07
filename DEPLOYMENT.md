# 🚀 Deployment Guide

Complete guide to deploy your portfolio to a live server. Multiple hosting options available!

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:
- [ ] Updated all placeholder links (GitHub, LinkedIn, project URLs)
- [ ] Added your resume PDF to `public/resume.pdf`
- [ ] Added your photo to `public/photo.jpg`
- [ ] Tested locally with `npm run build` and `npm run preview`
- [ ] Reviewed all content for accuracy

---

## Option 1: GitHub Pages (Free)

### Method A: Manual Deployment

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update repository name in vite.config.js:**
   - If your repo is `MyPortfolio`, it's already configured
   - If different, update the base path in `vite.config.js`

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **gh-pages** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/MyPortfolio/`

### Method B: Automatic Deployment (GitHub Actions)

The workflow file is already configured at `.github/workflows/deploy.yml`.

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **That's it!** Every push to main will automatically deploy.

---

## Option 2: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (Quickest)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live instantly! ✨

### Method B: Git Integration (Auto-deploy)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Netlify"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click **Add new site** → **Import an existing project**
   - Connect your GitHub account
   - Select your repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **Deploy site**

4. **Auto-deployment enabled!** Every push will auto-deploy.

The `netlify.toml` file is already configured - no additional setup needed!

---

## Option 3: Vercel (Fast & Modern)

### Method A: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose production deployment
   - Your site is live!

### Method B: Git Integration

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel"
   git push origin main
   ```

2. **Deploy:**
   - Go to [Vercel](https://vercel.com/)
   - Click **Add New Project**
   - Import your GitHub repository
   - Vercel auto-detects Vite - just click **Deploy**!

The `vercel.json` file is already configured - it works out of the box!

---

## Option 4: Custom Domain Setup

### For Netlify:
1. Go to **Domain settings** in Netlify dashboard
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate is automatically generated (HTTPS)

### For Vercel:
1. Go to **Settings** → **Domains** in Vercel dashboard
2. Add your domain
3. Configure DNS records as shown
4. SSL is automatic

### For GitHub Pages:
1. Create a `CNAME` file in your repository root:
   ```
   yourdomain.com
   ```
2. Configure DNS records in your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR-USERNAME.github.io`
3. Enable custom domain in GitHub Pages settings

---

## 🔧 Configuration Details

### vite.config.js
- For GitHub Pages: Set base path to `'/REPO-NAME/'`
- For Netlify/Vercel/Custom Domain: Use `'/'`

### Build Command
All platforms use: `npm run build`

### Output Directory
All platforms use: `dist`

---

## 🐛 Troubleshooting

### 404 Errors on GitHub Pages
- Check that base path in `vite.config.js` matches your repository name
- Ensure GitHub Pages is serving from `gh-pages` branch
- Clear browser cache and try again

### Assets Not Loading
- Verify all assets are in the `public` folder
- Check that asset paths start with `/` (absolute paths)
- Rebuild the project: `npm run build`

### Build Errors
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Review build logs in your hosting platform

### Routing Issues (404 on refresh)
- All hosting platforms are configured with proper redirects
- Check that `netlify.toml` or `vercel.json` redirects are in place

---

## 📊 Comparison

| Platform | Free Tier | Custom Domain | Auto-Deploy | Setup Time |
|----------|-----------|---------------|-------------|------------|
| GitHub Pages | ✅ Yes | ✅ Yes | ✅ With Actions | 5 min |
| Netlify | ✅ Yes | ✅ Yes | ✅ Yes | 2 min |
| Vercel | ✅ Yes | ✅ Yes | ✅ Yes | 2 min |

**Recommendation:** Netlify or Vercel for easiest setup, GitHub Pages if you want everything in GitHub.

---

## 🎯 Quick Start (Choose One)

### GitHub Pages (5 minutes):
```bash
npm install --save-dev gh-pages
npm run deploy
# Then enable Pages in GitHub Settings
```

### Netlify (2 minutes):
```bash
npm run build
# Drag dist folder to netlify.com/drop
```

### Vercel (2 minutes):
```bash
npm install -g vercel
vercel
```

---

## 📚 Need More Help?

- Review the main [README.md](README.md)
- Check deployment logs in your hosting platform
- Test locally first: `npm run build && npm run preview`

Happy deploying! 🚀