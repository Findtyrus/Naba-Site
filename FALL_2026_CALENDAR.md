# 📅 Fall 2026 Calendar & Executive Board Updated

Your website now reflects your **actual Fall 2026 calendar** and **executive board** for this semester.

## Executive Board (2026-2027)

✅ **President** — Tyrus Burton  
✅ **Vice President** — Nehemiah Dawson  
✅ **Secretary** — Nikkiyona Evans  
✅ **Treasurer** — Courtney Bourrage  
✅ **Marketing Director** — Khadejah Sanders  
✅ **Membership Director** — Makiya Thompson  

All officers are displayed on your site with their bios, majors, hometowns, and fun facts.

---

## Fall 2026 Event Calendar

Your website now shows all 12 events from your perspective calendar:

### **August**
- **Aug 26** – Chapter Meeting 1: Interest Meeting & Kickoff (6:00–7:30 PM)

### **September**
- **Sep 1** – MSU Accounting Student Career Fair (All Day)
- **Sep 9** – Chapter Meeting 2: Full Career Fair Expo Prep (6:00–7:30 PM)
- **Sep 15** – MSU Full Fall Career Expo (All Day)
- **Sep 23** – Volunteer Day / Service Day: "Lifting As We Climb"
- **Sep 30** – Chapter Meeting 3: Marketing Yourself on Social Media (6:00–7:30 PM)

### **October**
- **Oct 14** – Firm Recruiter Speaker Session (6:00–7:30 PM)
- **Oct 21** – Game Night Social (6:00 PM)

### **November**
- **Nov 4** – Internship & Early Career Panel (6:00–7:30 PM)
- **Nov 11** – Chapter Meeting 4: Final Application Push & Interview Prep (6:00–7:30 PM)
- **Nov 18** – Speaker Session (6:00–7:30 PM)
- **Nov 19** – End of Semester Celebration (6:00 PM)

---

## What Visitors See

When someone visits your website and scrolls to the **"Upcoming Events"** section, they'll see:

✅ All 12 events displayed chronologically  
✅ Date, time, and location for each event  
✅ Clean, professional event cards  
✅ Mobile-responsive design (looks good on phones)  

---

## How to Update Events Throughout the Semester

As your semester progresses and details change:

### Quick Edit (On GitHub)
1. Go to your repo on github.com
2. Click on `pages/index.js`
3. Click the pencil icon
4. Find the `events:` section (around line 126)
5. Edit the event details (time, location, event name)
6. Commit your changes
7. Site updates in ~2 minutes

### Add New Events
Just copy an existing event structure and paste a new one:
```javascript
{
  name: "Your Event Name",
  date: "Month DD, 2026",
  time: "X:XX PM",
  location: "Your Location"
}
```

### Remove Past Events
Delete the entire event object (from `{` to `}`) when the event has passed.

---

## Strategic Timeline

Your calendar shows a clear progression throughout the semester:

**Early September** → Build buzz (Interest meeting, career fairs)  
**Mid September** → Career preparation (Fair prep, actual expo)  
**Late September** → Community & skill-building (Volunteer day, social media workshop)  
**October** → Industry exposure (Firm recruiters, social connection)  
**November** → Intensive prep (Panels, interview prep, celebration)

This is a **well-designed recruitment pipeline**.

---

## Integration Notes

✅ E-board members are in the correct order (President → VP → Secretary → Treasurer → Directors)  
✅ All events include times and locations where applicable  
✅ Career fairs and all-day events are clearly marked  
✅ The calendar reflects your "Lifting As We Climb" theme in the service day  
✅ Mix of professional (meetings, panels) and social (game night, celebration) events  

---

## What's Next

1. ✅ Your site now has your real calendar
2. ✅ Your site now has your real e-board
3. ⬜ Update any locations that are still "TBD" as you confirm spaces
4. ⬜ Add contact info for event registration
5. ⬜ Update social media links
6. ⬜ Deploy to Vercel

---

## Pro Tips

- **Weekly Updates** → Check the site weekly and update any event details that change
- **Highlight Current Event** → Consider bolding or highlighting the upcoming event in your Chapter Meeting announcements
- **Google Calendar Integration** (Future) → You can eventually sync this to a public Google Calendar for member convenience
- **Mobile Reminder** → Members will see events on their phones, so accurate times matter

---

**Your calendar now tells the story of what NABA MSU is doing this semester.** It shows ambition, intentionality, and commitment to both member development and community service.

That's what recruiters and prospective members want to see.

Now deploy it. 🚀
