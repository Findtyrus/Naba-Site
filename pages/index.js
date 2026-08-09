import Head from 'next/head';
import Image from 'next/image';

const leadership = [
  { name: 'Tyrus Burton', role: 'President', image: '/leadership/tyrus-burton.webp' },
  { name: 'Nehemiah Dawson', role: 'Vice President', image: '/leadership/nehemiah-dawson.webp' },
  { name: 'Nikkiyona Evans', role: 'Secretary', image: '/leadership/nikkiyona-evans.webp' },
  { name: 'Courtney Bourrage', role: 'Treasurer', image: '/leadership/courtney-bourrage.webp' },
  { name: 'Khadejah Sanders', role: 'Marketing Director', image: '/leadership/khadejah-sanders.webp' },
  { name: 'Makiya Thompson', role: 'Membership Director', image: '/leadership/makiya-thompson.webp' },
];

const events = [
  { date: 'Aug 26', day: 'Wed', title: 'Interest Meeting & Kickoff', type: 'Chapter Meeting 01', time: '6:00–7:30 PM', status: 'Confirmed' },
  { date: 'Sep 1', day: 'Tue', title: 'MSU Accounting Student Career Fair', type: 'Campus Event', time: 'No chapter meeting', status: 'Campus' },
  { date: 'Sep 9', day: 'Wed', title: 'Full Career Fair Expo Prep', type: 'Chapter Meeting 02', time: '6:00–7:30 PM', status: 'Confirmed' },
  { date: 'Sep 15', day: 'Tue', title: 'MSU Full Fall Career Expo', type: 'Campus Event', time: 'No chapter meeting', status: 'Campus' },
  { date: 'Sep 23', day: 'Wed', title: 'Lifting As We Climb', type: 'Volunteer & Service Day', time: 'Time to be announced', status: 'Details Soon' },
  { date: 'Sep 30', day: 'Wed', title: 'Marketing Yourself on Social Media', type: 'Chapter Meeting 03 · TJ Green', time: '6:00–7:30 PM', status: 'Confirmed' },
  { date: 'Oct 14', day: 'Wed', title: 'Firm Recruiter Speaker Session', type: 'Professional Development', time: '6:00–7:30 PM', status: 'In Talks' },
  { date: 'Oct 21', day: 'Wed', title: 'Game Night', type: 'Chapter Social', time: 'Time to be announced', status: 'Details Soon' },
  { date: 'Nov 4', day: 'Wed', title: 'Internship & Early Career Panel', type: 'Professional Development', time: '6:00–7:30 PM', status: 'Confirmed' },
  { date: 'Nov 11', day: 'Wed', title: 'Final Application Push & Interview Prep', type: 'Chapter Meeting 04 · Collaboration Possible', time: '6:00–7:30 PM', status: 'Confirmed' },
  { date: 'Nov 18', day: 'Wed', title: 'Speaker Session', type: 'Professional Development', time: '6:00–7:30 PM', status: 'In Talks' },
  { date: 'Nov 19', day: 'Thu', title: 'End of Semester Celebration', type: 'Chapter Event', time: 'Time to be announced', status: 'Details Soon' },
];

const values = ['All In', 'Intention', 'Morals', 'Service'];
const fiveEs = ['Engage', 'Empower', 'Educate', 'Enhance', 'Elevate'];
const chapterLife = [
  { image: '/chapter-life/member-8078.webp', title: 'A room full of ambition', detail: 'Chapter kickoff' },
  { image: '/chapter-life/member-8083.webp', title: 'The finish line', detail: 'Graduate recognition' },
  { image: '/chapter-life/member-8088.webp', title: 'Community in action', detail: 'Youth service' },
  { image: '/chapter-life/member-8082.webp', title: 'Building our network', detail: 'SOAR Convention & Expo' },
  { image: '/chapter-life/member-8073.webp', title: 'Industry in the room', detail: 'Professional speaker session' },
  { image: '/chapter-life/member-8085.webp', title: 'Showing up together', detail: 'Chapter gathering' },
  { image: '/chapter-life/member-8084.webp', title: 'Bulldog excellence', detail: 'Mississippi State graduation' },
  { image: '/chapter-life/member-8075.webp', title: 'Connection beyond class', detail: 'Chapter social' },
  { image: '/chapter-life/member-8087.webp', title: 'Career preparation', detail: 'Résumé development' },
  { image: '/chapter-life/member-8074.webp', title: 'Lifting as we climb', detail: 'Habitat for Humanity' },
  { image: '/chapter-life/member-8080.webp', title: 'Welcoming new members', detail: 'Interest meeting' },
  { image: '/chapter-life/member-8081.webp', title: 'Ready to soar', detail: 'SOAR Convention & Expo' },
  { image: '/chapter-life/member-8077.webp', title: 'Learning from leaders', detail: 'Professional development' },
  { image: '/chapter-life/member-8079.webp', title: 'Growing in community', detail: 'General body meeting' },
  { image: '/chapter-life/member-8086.webp', title: 'Chapter culture', detail: 'Game night' },
  { image: '/chapter-life/member-8076.webp', title: 'Making memories', detail: 'Chapter social' },
  { image: '/chapter-life/chapter-meeting.webp', title: 'Chapter community', detail: 'General body meeting' },
  { image: '/chapter-life/conference-1.webp', title: 'Professional connection', detail: 'NABA conference' },
  { image: '/chapter-life/graduation-1.webp', title: 'Celebrating achievement', detail: 'Mississippi State graduation' },
  { image: '/chapter-life/habitat-service.webp', title: 'Lifting as we climb', detail: 'Habitat for Humanity' },
  { image: '/chapter-life/conference-2.webp', title: 'Representing MSU', detail: 'NABA conference' },
  { image: '/chapter-life/graduation-2.webp', title: 'Bulldog excellence', detail: 'Mississippi State graduation' },
  { image: '/chapter-life/conference-3.webp', title: 'Learning together', detail: 'NABA conference' },
  { image: '/chapter-life/graduation-3.webp', title: 'A milestone earned', detail: 'Graduate recognition' },
  { image: '/chapter-life/conference-4.webp', title: 'Beyond the classroom', detail: 'Chapter travel' },
];
const interestForm = 'https://docs.google.com/forms/d/e/1FAIpQLSddYFlQ678lvgGnGc_J--1XCTJGWHpT9nrdsRnyrvTRC8dSuQ/viewform';
const linktree = 'https://linktr.ee/naba.msstate';
const groupMe = 'https://groupme.com/join_group/116336042/bcB7jGS3';
const nationalMembership = 'https://www.nabainc.org/join';
const linkedIn = 'https://www.linkedin.com/in/naba-mississippi-state-bb7586246';
const instagram = 'https://www.instagram.com/naba.msstate/';

const sponsorshipTiers = [
  {
    name: 'Premier Partner',
    price: '$1,500',
    description: 'A lead partnership for organizations seeking sustained engagement with our chapter.',
    benefits: ['Premier website recognition', 'Featured professional-development program', 'Priority presence at chapter events', 'Recruiting and career engagement opportunity', 'Recognition across chapter communications'],
  },
  {
    name: 'Supporting Partner',
    price: '$750',
    description: 'A strong platform for firms and organizations to connect with chapter members.',
    benefits: ['Website and event recognition', 'Partnership on one chapter program', 'Career or recruiting spotlight', 'Two social-media acknowledgements'],
  },
  {
    name: 'Community Partner',
    price: '$300',
    description: 'An accessible way to support student programming and chapter development.',
    benefits: ['Website recognition', 'Recognition at one chapter event', 'Chapter social-media acknowledgement', 'Semester impact update'],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NABA Mississippi State Chapter</title>
        <meta name="description" content="The National Association of Black Accountants student chapter at Mississippi State University." />
      </Head>

      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="NABA Mississippi State home">
          <span className="wordmarkMain">NABA</span>
          <span className="wordmarkRule" />
          <span className="wordmarkSub">Mississippi State University</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#calendar">Calendar</a>
          <a href="#chapter-life">Chapter Life</a>
          <a href="#leadership">Leadership</a>
          <a href="#partners">Partners</a>
          <a className="navCta" href={interestForm} target="_blank" rel="noreferrer">Join the chapter</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroKicker"><span>Mississippi State University</span><span>Fall 2026</span></div>
          <div className="heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">NABA Mississippi State Chapter</p>
              <h1>Where ambition meets opportunity.</h1>
              <p className="heroLead">A student-led community helping Mississippi State students build professional networks, prepare for their careers, serve others, and grow as leaders.</p>
              <div className="heroActions">
                <a className="button buttonPrimary" href={interestForm} target="_blank" rel="noreferrer">Complete interest form</a>
                <a className="button buttonText" href="#calendar">View fall calendar <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="heroMark">
              <Image src="/brand/naba-msu.webp" alt="NABA Mississippi State Chapter" width={800} height={800} priority sizes="(max-width: 800px) 85vw, 38vw" />
            </div>
          </div>
          <div className="heroFoot">
            <span>Engage</span><span>Empower</span><span>Educate</span><span>Enhance</span><span>Elevate</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="sectionLabel"><span>01</span><span>Who we are</span></div>
          <div className="aboutIntro">
            <h2>Access expands when we build it together.</h2>
            <p>We engage, empower, and educate underserved business leaders and institutions, advancing a connected growth ecosystem that expands access to networks, resources, and opportunities.</p>
          </div>
          <div className="missionGrid">
            <article>
              <p className="eyebrow">Our mission</p>
              <p>Through our 5 Es, we enhance skills, elevate voices, and embody our commitment to lifting as we climb.</p>
            </article>
            <article>
              <p className="eyebrow">Our vision</p>
              <p>We path and pave the way to a more just world so Black Business Leaders can achieve the best version of themselves at every point of their journey.</p>
            </article>
          </div>
          <div className="principles">
            <div>
              <p className="eyebrow">The 5 Es</p>
              <ol>{fiveEs.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
            </div>
            <div>
              <p className="eyebrow">Our values</p>
              <ol>{values.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
            </div>
          </div>
        </section>

        <section className="section calendar" id="calendar">
          <div className="sectionLabel light"><span>02</span><span>Fall programming</span></div>
          <div className="calendarHeader">
            <div><p className="eyebrow">Fall 2026</p><h2>A semester built around preparation, connection, and service.</h2></div>
            <p>Meeting locations and final event details will be shared with members through GroupMe and chapter communications.</p>
          </div>
          <div className="eventList">
            {events.map((event, index) => (
              <article className="eventRow" key={`${event.date}-${event.title}`}>
                <div className="eventNumber">{String(index + 1).padStart(2, '0')}</div>
                <div className="eventDate"><strong>{event.date}</strong><span>{event.day}</span></div>
                <div className="eventName"><p>{event.type}</p><h3>{event.title}</h3></div>
                <div className="eventMeta"><span>{event.time}</span><span className={`status ${event.status === 'Confirmed' ? 'confirmed' : ''}`}>{event.status}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section chapterLife" id="chapter-life">
          <div className="sectionLabel"><span>03</span><span>Chapter life</span></div>
          <div className="chapterLifeHeader">
            <div><p className="eyebrow">In the room and in the community</p><h2>More than meetings.</h2></div>
            <p>From professional conferences and chapter programs to service and graduation, our members build relationships and celebrate each other at every stage of the journey.</p>
          </div>
          <div className="lifeGrid">
            {chapterLife.map((photo, index) => (
              <figure className={`lifePhoto lifePhoto${index + 1}`} key={photo.image}>
                <div className="lifeImage">
                  <Image src={photo.image} alt={`${photo.title} — ${photo.detail}`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 32vw" />
                </div>
                <figcaption><span>{photo.detail}</span><strong>{photo.title}</strong></figcaption>
              </figure>
            ))}
          </div>
          <a className="instagramLink" href={instagram} target="_blank" rel="noreferrer">See more chapter moments on Instagram <span aria-hidden="true">↗</span></a>
        </section>

        <section className="section leadership" id="leadership">
          <div className="sectionLabel"><span>04</span><span>Chapter leadership</span></div>
          <div className="leadershipHeader">
            <div><p className="eyebrow">2026–2027 Executive Board</p><h2>Meet our leadership team.</h2></div>
            <p>Our executive board develops programming, builds partnerships, and creates a welcoming professional community for Mississippi State students.</p>
          </div>
          <div className="leaderGrid">
            {leadership.map((member, index) => (
              <article className={`leaderCard leaderCard${index + 1}`} key={member.name}>
                <div className="leaderImage">
                  <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 700px) 88vw, (max-width: 1100px) 44vw, 29vw" />
                </div>
                <div className="leaderCaption"><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{member.name}</h3><p>{member.role}</p></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section partners" id="partners">
          <div className="sectionLabel"><span>05</span><span>Partnership & support</span></div>
          <div className="partnersHeader">
            <div><p className="eyebrow">Invest in student opportunity</p><h2>Partner with NABA at Mississippi State.</h2></div>
            <p>Partner support helps fund professional-development programming, conference participation, service initiatives, and opportunities that connect students with the business community.</p>
          </div>
          <div className="tierGrid">
            {sponsorshipTiers.map((tier, index) => (
              <article className={`tierCard ${index === 0 ? 'featuredTier' : ''}`} key={tier.name}>
                <div className="tierTop"><span>0{index + 1}</span><p>{index === 0 ? 'Premier' : 'Annual partnership'}</p></div>
                <h3>{tier.name}</h3>
                <p className="tierPrice">{tier.price}<span> / year</span></p>
                <p className="tierDescription">{tier.description}</p>
                <ul>{tier.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                <a href={`mailto:NABA.msstate@outlook.com?subject=${encodeURIComponent(`${tier.name} Inquiry`)}`}>Discuss this partnership <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <div className="donorBand">
            <div><p className="eyebrow">Individual & community giving</p><h3>Support the chapter at any level.</h3></div>
            <p>Alumni, families, and community supporters can contribute toward student travel, programming, and service. Event sponsorships are also available from $250 for organizations that prefer to support one program.</p>
            <a className="button buttonPrimary" href="mailto:NABA.msstate@outlook.com?subject=NABA%20MSU%20Donor%20Inquiry">Become a donor</a>
          </div>
        </section>

        <section className="joinSection" id="join">
          <p className="eyebrow">There is a place for you here.</p>
          <h2>Build your network before you need it.</h2>
          <p>Join NABA at Mississippi State to meet peers, connect with professionals, prepare for recruiting, and serve alongside students committed to lifting as we climb. Students from every major and background are welcome.</p>
          <div className="joinActions">
            <a className="button buttonLight" href={interestForm} target="_blank" rel="noreferrer">Complete interest form</a>
            <a className="button buttonOutline" href={nationalMembership} target="_blank" rel="noreferrer">Join National NABA free</a>
            <a className="button buttonOutline" href={groupMe} target="_blank" rel="noreferrer">Join the GroupMe</a>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>NABA</strong><span>Mississippi State Chapter</span></div>
        <div className="footerLinks"><a href={linktree} target="_blank" rel="noreferrer">Linktree</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:NABA.msstate@outlook.com">Email</a><a href="#top">Back to top ↑</a></div>
        <p>National Association of Black Accountants · Mississippi State University</p>
      </footer>
    </>
  );
}
