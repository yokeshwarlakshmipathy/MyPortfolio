# 🚀 Step-by-Step: Deploy to Netlify

## ✅ Pre-Flight Check
- ✅ Build completed successfully
- ✅ `dist` folder is ready
- ✅ All files included (photo.jpg, resume.pdf)

---

## 📋 Step-by-Step Instructions

### Step 1: Open Netlify Drop
1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Go to: **https://app.netlify.com/drop**
3. You'll see a page that says "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"

### Step 2: Locate Your `dist` Folder
1. Open File Explorer
2. Navigate to: `C:\Users\YOKESHWAR L\OneDrive\Documents\projects\MyPortfolio\dist`
3. You should see these files/folders inside:
   - `index.html`
   - `assets/` folder
   - `photo.jpg`
   - `Yokeshwar_L_Resume.pdf`
   - `vite.svg`

### Step 3: Drag & Drop
1. **Drag** the entire `dist` folder from File Explorer
2. **Drop** it onto the Netlify drop zone (the area on the webpage)
3. You'll see upload progress

### Step 4: Wait for Deployment
- Netlify will automatically:
  - Upload your files
  - Deploy your site
  - Generate a URL
- This takes about 30-60 seconds

### Step 5: Your Site is Live! 🎉
- You'll see: "Your site is live!"
- Your URL will be something like: `https://amazing-site-123456.netlify.app`
- Click "Open site" to view it!

---

## 🎯 What Happens Next

### Your Portfolio is Live!
- ✅ Accessible from anywhere
- ✅ Free SSL certificate (HTTPS)
- ✅ Fast CDN
- ✅ Auto-updates on every new deployment

### Optional: Custom Domain
1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS setup instructions

### Optional: Change Site Name
1. Click "Site settings"
2. Click "Change site name"
3. Enter your preferred name
4. Your new URL: `https://your-name.netlify.app`

---

## 🔄 For Future Updates

### Option 1: Drag & Drop Again
- Just rebuild: `npm run build`
- Drag the new `dist` folder to Netlify

### Option 2: Connect to GitHub (Recommended)
1. In Netlify dashboard, click "Add new site" → "Import an existing project"
2. Connect your GitHub account
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. ✅ Every push to GitHub will auto-deploy!

---

## ✅ Verification Checklist

After deployment, check:
- [ ] Site loads correctly
- [ ] Photo displays in About section
- [ ] Resume opens when clicking "View Resume"
- [ ] Resume downloads correctly
- [ ] All sections display properly
- [ ] Dark/Light mode toggle works
- [ ] Mobile view looks good (try on phone)
- [ ] All links work (GitHub, LinkedIn)

---

## 🆘 Troubleshooting

**Issue: Site shows blank page**
- Make sure you dragged the `dist` folder, not the whole project
- Wait a few minutes for propagation

**Issue: Images not showing**
- Clear browser cache (Ctrl+F5)
- Check if files are in `dist` folder

**Issue: Resume not working**
- Check file is named correctly in `dist` folder
- Try direct link: `yoursite.netlify.app/Yokeshwar_L_Resume.pdf`

---

## 🎉 You're All Set!

Your professional portfolio is now live on the internet!

Share your URL with:
- Recruiters
- LinkedIn profile
- Email signature
- Job applications

Good luck! 🚀

