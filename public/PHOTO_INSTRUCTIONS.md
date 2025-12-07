# How to Add Your Photo

## Quick Steps:

1. **Prepare your photo:**
   - Use a professional headshot or portrait
   - Recommended size: 400x400 pixels or larger (square format works best)
   - File formats: JPG, PNG, or WebP
   - File size: Keep it under 500KB for faster loading

2. **Name your photo:**
   - Rename your photo file to: `photo.jpg` (or `photo.png`)

3. **Place the file:**
   - Copy your photo file into the `public` folder
   - The path should be: `public/photo.jpg`

4. **Update the data file (if needed):**
   - Open `src/data.js`
   - Find the `about` section
   - The photo path should be: `photo: "/photo.jpg"`
   - If you used a different filename or format, update it here

5. **Done!**
   - Your photo will automatically appear in the About section
   - If the photo doesn't load, check:
     - File is in the `public` folder
     - Filename matches what's in `src/data.js`
     - File format is supported (JPG, PNG, WebP)

## Example:
```
MyPortfolio/
  └── public/
      ├── photo.jpg  ← Your photo goes here
      ├── vite.svg
      └── resume-placeholder.txt
```

## Alternative: Using a Different Path

If you want to use a different filename or location:
1. Place your photo in the `public` folder with your preferred name
2. Update `src/data.js`:
   ```javascript
   photo: "/your-photo-name.jpg"
   ```

## Using an Online Image

If you want to use an image from a URL:
1. Update `src/data.js`:
   ```javascript
   photo: "https://your-image-url.com/photo.jpg"
   ```
