# NABA Mississippi State Chapter Website

A professional, modern website for the NABA (National Association of Black Accountants) student chapter at Mississippi State University.

## Features

✨ **Professional Design** - Clean, modern aesthetic with MSU maroon & NABA gold branding  
🎯 **Recruitment-Focused** - Clear value prop for prospective members  
💼 **Sponsorship Hub** - Easy-to-update sponsor tiers and partner info  
📅 **Event Management** - Upcoming events calendar  
🎓 **Resources** - Central hub for study materials and career support  
⚡ **Lightning Fast** - Built with Next.js, deployed on Vercel  
✏️ **Easy to Maintain** - All content in one config section, no coding needed  

## Tech Stack

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

## Getting Started

### Local Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Deploy (auto-updates on every push)

## Editing Content

**All content lives in `pages/index.js`** at the top in the `CHAPTER_CONFIG` object.

Edit:
- Chapter mission & tagline
- E-board member info
- Events calendar
- Sponsorship tiers
- Member resources
- Contact information

Save your changes and push to GitHub — your site updates automatically.

## Customization

### Colors
Colors are controlled via Tailwind classes throughout the file:
- `bg-red-800` (maroon)
- `bg-amber-500` (gold)
- `text-gray-700` (body text)

Edit `tailwind.config.js` to change the color palette.

### Add Member Photos
Replace placeholder divs with `<img>` tags pointing to photos in the `/public/photos/` folder.

### Add Custom Sections
Add new sections by copying existing pattern (container → grid → content).

## File Structure

```
pages/
  └── index.js          # Main website component
styles/
  └── globals.css       # Global styles
public/                 # Static assets (add photos here)
package.json
tailwind.config.js
next.config.js
```

## Deployment

Automatic deployment:
- Every push to `main` branch → site updates in ~2 minutes
- No manual deployment needed

Custom domain:
- In Vercel dashboard, add your domain (naba.msu.edu, etc.)

## Need Help?

See `DEPLOY.md` for detailed instructions on editing and maintaining the site.

---

**Built for NABA MSU to inspire and support the next generation of Black accountants. 🐾**
