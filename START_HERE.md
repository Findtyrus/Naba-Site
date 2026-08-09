# 🚀 NABA MSU Website - START HERE

Welcome! Your **strategic** chapter website is ready. This isn't just a website — it's built to execute your V/TO, hit your membership goals, and attract sponsors.

---

## What You Have

A professional, strategic website designed to **recruit freshmen/sophomores, showcase your 3 uniques, deliver on your guarantee, and hit your semester targets** (20 members, $1K funding).

**Strategic Features:**
- ✅ Hero focused on your value prop ("Transform your career before you graduate")
- ✅ Core values section (Servant Leadership, Initiative, Do What We Say, All In)
- ✅ Your 3 uniques front and center (NABA Conferences, Company Visits, Chapter Expertise)
- ✅ Your guarantee prominently displayed (Resume, LinkedIn, Headshot)
- ✅ Semester goals visible (20 members, $1K raised)
- ✅ Target market messaging (freshman/sophomore business majors)
- ✅ E-board showcase with member bios
- ✅ Event calendar (easy to update)
- ✅ Sponsorship packages with clear ROI
- ✅ Member resources hub
- ✅ Mobile-responsive design
- ✅ Deploys FREE to Vercel in 5 minutes
- ✅ Updates automatically when you push changes

---

## Step 1: Edit Your Content (20 minutes)

**All your content is in ONE file:**  
`pages/index.js`

Open it and look for this line (around line 5):
```javascript
const CHAPTER_CONFIG = {
```

Everything below that is your content. Update (in order):

### Mission, Tagline & Values
```javascript
mission: "Your chapter mission statement",
tagline: "Your value prop (e.g., 'Transform your career before you graduate')",

values: [
  { name: "Servant Leadership", tagline: "We give before we get" },
  // ... update as needed
]
```

### Your 3 Uniques
```javascript
uniques: [
  {
    title: "NABA Conferences",
    description: "Access national conferences..."
  },
  // ... keep your 3 differentiators here
]
```

### Your Guarantee
```javascript
guarantee: [
  "A professional resume tailored for accounting roles",
  // ... update with what members actually get
]
```

### Semester Goals
```javascript
goals: {
  semester: {
    year: "Fall 2024 - Spring 2025",
    members: 20,
    funding: "$1,000"
  },
  next_year: {
    year: "2025-2026",
    members: 40,
    funding: "$2,500"
  }
}
```

### E-Board (Keep the structure, update names/info)
```javascript
{
  name: "YOUR NAME",
  role: "YOUR ROLE",
  major: "YOUR MAJOR",
  hometown: "YOUR HOMETOWN, MS",
  fun_fact: "Something fun about you",
  dream: "Your career goal" // only for President
}
```

### Events (Add your actual events)
```javascript
{
  name: "Event Name",
  date: "September 14, 2024",
  time: "6:00 PM",
  location: "Building Name"
}
```

### Sponsorship Tiers (Gold/Silver/Bronze Model)
Your sponsorship structure is already built! It includes:

**Gold Partner - $2,500** (Premium "Most Popular" tier)
- Prominent logo on homepage + sponsors page
- Table at ALL chapter events (3-4 per semester)
- Speaking opportunity at a major event
- Resume distribution to all members
- LinkedIn featured post
- Job board access
- Company office visit
- Recognition in all communications

**Silver Partner - $1,500** (Active Partnership)
- Logo on website
- Table at 2 recruiting events
- Resume access to interested members
- LinkedIn mentions (2 posts)
- Job board access

**Bronze Partner - $750** (Supporting Partnership)
- Listed as sponsor on website
- Table at 1 recruiting event
- Resume access
- Social media mention

**Keep as-is or adjust pricing** to match your market. The structure is built in!

### Contact
```javascript
email: "NABA.msstate@outlook.com",
meeting_time: "Thursdays, 5:30 PM",
meeting_location: "Adkerson School of Accountancy, Mississippi State Campus",
groupme: "https://groupme.com/join_group/116336042/bcB7jGS3",
instagram: "https://instagram.com/msu.naba",
linkedin: "https://linkedin.com/company/naba-mississippi-state"
```

**Already updated with your info!** GroupMe link is included on the contact section.

**Save the file when done.**

---

## Step 2: Deploy to Vercel (5 minutes)

### 2a. Create GitHub Account
Go to **github.com** → Sign up (free) → Verify your email

### 2b. Upload Your Code to GitHub

In your terminal (Mac/Linux/Windows with Git Bash):

```bash
# Navigate to your project folder
cd naba-msu-website

# Initialize Git
git init
git add .
git commit -m "Initial NABA website"

# Create a new repo on github.com first, then run:
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/naba-msu-website.git
git push -u origin main
```

(Replace `YOUR-USERNAME` with your actual GitHub username)

### 2c. Deploy with Vercel

1. Go to **vercel.com** → Sign up (free, use GitHub login)
2. Click **New Project**
3. Find your `naba-msu-website` repo and click **Import**
4. Click **Deploy**
5. Wait 2-3 minutes...

**You're live!** Vercel gives you a free URL like `naba-msu-website.vercel.app`

---

## Step 3: Test Your Site

1. Visit your Vercel URL
2. Click through all sections
3. Test on your phone
4. Make sure links work
5. Verify all your info is correct

---

## Step 4: Share Your Site

Send the link to:
- Chapter members
- Prospective recruits
- Sponsors
- Your email signature
- Social media bios

---

## How to Make Future Changes

You never need to re-deploy. Just:

1. Edit `pages/index.js` on GitHub (click the pencil icon)
2. Make your changes
3. Commit
4. Wait 2 minutes — your site auto-updates

Or edit locally and push to GitHub:
```bash
git add pages/index.js
git commit -m "Updated events"
git push
```

---

## Common Questions

**Q: Can I add member photos?**  
A: Yes! Put photos in `public/photos/` folder and update the image section in `pages/index.js`. See DEPLOY.md for details.

**Q: How do I add a custom domain?**  
A: In Vercel dashboard, add your domain (e.g., naba.msu.edu). Takes 10-15 minutes.

**Q: What if I break something?**  
A: Go back to GitHub, revert your changes, re-commit. Or let me know.

**Q: Can I change colors?**  
A: Yes. Edit the Tailwind color classes throughout `pages/index.js` (look for `bg-red-800`, `text-amber-600`, etc.). Or ask for help.

**Q: How do I add more sections?**  
A: Copy an existing section in `pages/index.js`, paste it below, edit. Each section follows the same pattern.

---

## Files Explained

```
naba-msu-website/
├── pages/
│   ├── index.js          ← YOUR WEBSITE (edit this!)
│   └── _app.js          ← Setup (don't touch)
├── styles/
│   └── globals.css      ← Global styles (don't touch)
├── public/
│   └── photos/          ← Add member photos here
├── package.json         ← Dependencies (don't touch)
├── tailwind.config.js   ← Design settings (don't touch)
├── next.config.js       ← Build settings (don't touch)
├── DEPLOY.md            ← Detailed deployment guide
├── LAUNCH_CHECKLIST.md  ← Pre-launch checklist
└── README.md            ← Full documentation
```

---

## Need Help?

- **Deployment stuck?** → See DEPLOY.md
- **Want detailed instructions?** → See LAUNCH_CHECKLIST.md
- **GitHub commands confusing?** → Use GitHub Desktop app (graphical instead of command line)
- **Want to add custom features?** → Can add later or ask for help

---

## You're Building Something Great

This website is your chapter's digital front door. It shows prospective members who you are, what you do, and how they can join. It shows sponsors why they should invest in NABA MSU. It connects your community.

Keep it updated, keep it fresh, and keep recruiting.

**Hail State! 🐾**

---

**Next Steps:**
1. ✅ Edit `pages/index.js` with your info
2. ✅ Set up GitHub & Vercel
3. ✅ Deploy
4. ✅ Share your link
5. ✅ Update events monthly

Good luck! 🚀
