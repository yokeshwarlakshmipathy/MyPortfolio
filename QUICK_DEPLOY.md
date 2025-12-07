# ⚡ Quick Deployment Guide

Choose your hosting platform and deploy in minutes!

## 🎯 Fastest Options (2 minutes)

### 1. Netlify (Drag & Drop)

```bash
npm run build
```

Then:
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dist` folder
3. Done! Your site is live! 🎉

---

### 2. Vercel (CLI)

```bash
npm install -g vercel
vercel
```

Follow prompts → Done! ✅

---

## 📦 GitHub Pages (5 minutes)

```bash
# Install deployment package
npm install --save-dev gh-pages

# Deploy
npm run deploy

# Then enable GitHub Pages in repository Settings → Pages
```

Your site: `https://YOUR-USERNAME.github.io/MyPortfolio/`

---

## 🔄 Auto-Deploy (Set Once, Deploy Forever)

### For Netlify or Vercel:

1. Push your code to GitHub
2. Connect repository in Netlify/Vercel dashboard
3. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Every push = automatic deployment! 🚀

---

## ⚙️ Before Deploying

- [ ] Update links in `src/data.js`
- [ ] Add resume to `public/resume.pdf`
- [ ] Add photo to `public/photo.jpg`
- [ ] Test build: `npm run build && npm run preview`

---

## 📚 Need More Details?

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Custom domain setup
- Troubleshooting
- Advanced configurations
- Comparison of platforms

---

**That's it! Your portfolio is ready for the world! 🌍**
