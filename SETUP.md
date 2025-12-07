# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Information

#### Update Social Links
Edit `src/data.js`:
```javascript
export const personalInfo = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  // Update other fields as needed
};
```

#### Add Your Resume
1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button will automatically link to it

#### Update Project Links
Edit `src/data.js` - update the `projects` array:
```javascript
{
  github: "https://github.com/YOUR_USERNAME/PROJECT_NAME",
  live: "https://your-project-demo.com",
}
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 4. Build for Production
```bash
npm run build
```

## 📝 Important Notes

- **GitHub Pages**: The `vite.config.js` has `base: '/MyPortfolio/'` configured. Update this to match your repository name.
- **Contact Form**: Currently frontend-only. To enable email sending, integrate with EmailJS, Formspree, or your own backend.
- **Theme**: Dark/Light mode preference is saved in localStorage.

## 🎨 Customization Tips

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Update the Google Fonts link in `index.html`
3. **Animations**: Adjust Framer Motion animations in component files
4. **Content**: All content is in `src/data.js` for easy editing

## 📦 Deployment

See the main README.md for detailed deployment instructions to GitHub Pages, Netlify, or Vercel.

Happy coding! 🎉
