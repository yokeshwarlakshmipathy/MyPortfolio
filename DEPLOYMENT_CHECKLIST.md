# ✅ Deployment Checklist

Follow this checklist before deploying your portfolio to a live server.

## 📋 Pre-Deployment Checklist

### Content Updates
- [ ] Updated personal information in `src/data.js`
  - [ ] Name, email, phone
  - [ ] GitHub URL: `https://github.com/yokeshwarlakshmipathy`
  - [ ] LinkedIn URL: `https://www.linkedin.com/in/yokeshwar-l-209376196/`
  - [ ] Location

- [ ] Updated project links in `src/data.js`
  - [ ] GitHub repository URLs for projects
  - [ ] Live demo URLs for projects

- [ ] Added resume PDF
  - [ ] File: `public/resume.pdf`
  - [ ] Resume download button will work automatically

- [ ] Added profile photo
  - [ ] File: `public/photo.jpg`
  - [ ] Photo will display in About section automatically

### Testing
- [ ] Tested locally with `npm run dev`
- [ ] All sections display correctly
- [ ] All links work
- [ ] Dark/Light mode toggle works
- [ ] Mobile responsive design works
- [ ] Built project: `npm run build`
- [ ] Previewed build: `npm run preview`

### Configuration
- [ ] Reviewed `vite.config.js` base path
  - For GitHub Pages: Update to `/MyPortfolio/` (if repo name is MyPortfolio)
  - For Netlify/Vercel: Keep as `/`

---

## 🚀 Deployment Steps

### Choose Your Platform

#### Option 1: Netlify (Recommended - Easiest)
1. [ ] Built project: `npm run build`
2. [ ] Dragged `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. [ ] Site is live!

#### Option 2: GitHub Pages
1. [ ] Installed gh-pages: `npm install --save-dev gh-pages`
2. [ ] Updated base path in `vite.config.js` if needed
3. [ ] Deployed: `npm run deploy`
4. [ ] Enabled Pages in GitHub Settings → Pages
5. [ ] Site is live!

#### Option 3: Vercel
1. [ ] Installed Vercel CLI: `npm install -g vercel`
2. [ ] Deployed: `vercel`
3. [ ] Site is live!

---

## ✅ Post-Deployment Verification

After deploying, verify:

- [ ] Site loads correctly
- [ ] All images display (photo, favicon)
- [ ] Resume download works
- [ ] All external links work (GitHub, LinkedIn)
- [ ] Contact form displays (functionality optional)
- [ ] Dark/Light mode works
- [ ] Mobile view is responsive
- [ ] All sections are accessible
- [ ] SEO meta tags are present (check page source)

---

## 🔧 Troubleshooting

If something doesn't work:

1. **404 Errors:**
   - Check base path in `vite.config.js`
   - Verify all paths start with `/`

2. **Assets Not Loading:**
   - Ensure files are in `public` folder
   - Check file names match exactly

3. **Build Errors:**
   - Check Node.js version (18+)
   - Clear cache: `rm -rf node_modules package-lock.json && npm install`

4. **Deployment Issues:**
   - Check deployment logs in hosting platform
   - Verify build command: `npm run build`
   - Verify output directory: `dist`

---

## 📚 Resources

- **Quick Guide:** [QUICK_DEPLOY.md](QUICK_DEPLOY.md)
- **Full Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Summary:** [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)

---

## 🎉 Ready to Deploy!

Once all items are checked, you're ready to go live! Choose your platform and deploy! 🚀
