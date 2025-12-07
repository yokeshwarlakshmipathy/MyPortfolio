# 📸 How to Add Your Photo and Resume

## 🎯 Quick Overview

**Both files go in the `public` folder** - Files in the `public` folder are automatically copied during build and are accessible when your site is live!

---

## 📷 Step 1: Add Your Photo

### Option A: Using a Photo File (Recommended)

1. **Prepare your photo:**
   - Use a professional headshot or portrait
   - **Recommended size:** 400x400 pixels or larger (square format works best)
   - **File formats:** JPG, PNG, or WebP
   - **File size:** Keep it under 500KB for faster loading
   - Tip: Use image editing software to crop/resize if needed

2. **Name your photo:**
   - Rename your photo file to: **`photo.jpg`** 
   - (or `photo.png` if you prefer PNG format)

3. **Place the file:**
   - Copy your photo file into the **`public`** folder
   - The path should be: `public/photo.jpg`
   
   ```
   MyPortfolio/
     └── public/
         ├── photo.jpg  ← Your photo goes here
         ├── resume.pdf ← Your resume goes here
         └── vite.svg
   ```

4. **Verify in code (Optional):**
   - Open `src/data.js`
   - Check that the photo path is: `photo: "/photo.jpg"`
   - If you used a different filename (e.g., `photo.png`), update it here:
     ```javascript
     photo: "/photo.png"
     ```

5. **Done!** 
   - Your photo will automatically appear in the About section
   - It will work both locally and when deployed!

### Option B: Using an Online Image URL

If you want to host your photo online (e.g., on GitHub, Imgur, or your own server):

1. Upload your photo to an image hosting service
2. Copy the image URL
3. Update `src/data.js`:
   ```javascript
   photo: "https://your-image-url.com/photo.jpg"
   ```

---

## 📄 Step 2: Add Your Resume

### Option A: Using a PDF File (Recommended)

1. **Prepare your resume:**
   - Export your resume as a PDF file
   - **File format:** PDF (.pdf)
   - **File size:** Keep it under 2MB for faster loading
   - Make sure it's the latest version!

2. **Name your resume:**
   - Rename your resume file to: **`resume.pdf`**

3. **Place the file:**
   - Copy your resume PDF into the **`public`** folder
   - The path should be: `public/resume.pdf`
   
   ```
   MyPortfolio/
     └── public/
         ├── photo.jpg  ← Your photo
         ├── resume.pdf ← Your resume goes here
         └── vite.svg
   ```

4. **Done!**
   - The "View Resume" button in the Hero section will automatically work
   - The resume viewer will display your PDF
   - The download option inside the viewer will work
   - It will work both locally and when deployed!

### Option B: Using an Online PDF URL

If you want to host your resume online:

1. Upload your resume PDF to a file hosting service
2. Copy the PDF URL
3. Update the resume references in:
   - `src/sections/Hero.jsx` (if you want to change the resume link)
   - `src/components/ResumeViewer.jsx` (if you want to change the resume link)

---

## ✅ Verification Steps

After adding your files:

1. **Test locally:**
   ```bash
   npm run dev
   ```
   - Check that your photo appears in the About section
   - Click "View Resume" button - it should open your PDF
   - Try downloading the resume

2. **Test the build:**
   ```bash
   npm run build
   npm run preview
   ```
   - Verify everything works in the production build

---

## 🚀 Important Notes for Live Deployment

### ✅ Files in `public` folder are automatically included:

- When you run `npm run build`, Vite automatically copies all files from `public/` to `dist/`
- Your files will be accessible at:
  - `yoursite.com/photo.jpg`
  - `yoursite.com/resume.pdf`
- **No additional configuration needed!**

### 📁 File Structure After Build:

```
dist/                    ← This is what gets deployed
  ├── assets/
  │   └── (compiled JS/CSS)
  ├── photo.jpg         ← Your photo (copied from public/)
  ├── resume.pdf        ← Your resume (copied from public/)
  └── index.html
```

---

## 🔍 Troubleshooting

### Photo not showing?
- ✅ Check file is in `public/` folder
- ✅ Check filename matches what's in `src/data.js` (case-sensitive!)
- ✅ Check file format is supported (JPG, PNG, WebP)
- ✅ Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Resume not opening?
- ✅ Check file is in `public/` folder
- ✅ Check filename is exactly `resume.pdf`
- ✅ Check PDF file is not corrupted
- ✅ Try opening the PDF directly: `http://localhost:5173/resume.pdf`

### Still having issues?
- Make sure you're using the correct file paths:
  - Photo: `public/photo.jpg` → referenced as `/photo.jpg`
  - Resume: `public/resume.pdf` → referenced as `/resume.pdf`
- The `/` at the start means it's looking in the root of the `public` folder

---

## 📝 Summary

1. **Photo:** 
   - Place `photo.jpg` in `public/` folder
   - Already configured in `src/data.js`

2. **Resume:**
   - Place `resume.pdf` in `public/` folder
   - Already configured in Hero section and ResumeViewer

3. **Deploy:**
   - Files in `public/` are automatically included when you deploy
   - Works on all hosting platforms (GitHub Pages, Netlify, Vercel)

**That's it!** No code changes needed, just add the files to the `public` folder! 🎉

