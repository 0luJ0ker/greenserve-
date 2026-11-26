import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Leaf,
  MapPin,
  MoreHorizontal,
  Plus,
  Recycle,
  Sparkles,
  Sprout,
  Sun,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Courtyard refresh",
    type: "Landscape care",
    location: "North campus",
    date: "Today, 10:30 AM",
    status: "In progress",
    tone: "sage",
  },
  {
    icon: Recycle,
    title: "Weekly materials pickup",
    type: "Waste & recycling",
    location: "All locations",
    date: "Tomorrow, 8:00 AM",
    status: "Scheduled",
    tone: "mint",
  },
  {
    icon: Sparkles,
    title: "Low-impact deep clean",
    type: "Eco cleaning",
    location: "Studio B · East wing",
    date: "Nov 28, 2:00 PM",
    status: "Confirmed",
    tone: "peach",
  },
];

const chartBars = [
  { month: "Jun", current: 34, previous: 25 },
  { month: "Jul", current: 48, previous: 33 },
  { month: "Aug", current: 39, previous: 30 },
  { month: "Sep", current: 58, previous: 40 },
  { month: "Oct", current: 49, previous: 35 },
  { month: "Nov", current: 75, previous: 46 },
];

function Brand() {
  return (
    <a className="brand" href="#overview" aria-label="Greenserve home">
      <span className="brand-mark"><Leaf size={19} strokeWidth={2.25} /></span>
      <span>greenserve<span className="brand-period">.</span></span>
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />
      <div className="workspace-switcher">
        <span className="workspace-avatar">N</span>
        <span className="workspace-copy"><strong>Northstar Studio</strong><small>Workspace</small></span>
        <ChevronDown size={15} className="muted-icon" />
      </div>

      <nav className="side-nav" aria-label="Main navigation">
        <p className="nav-label">WORKSPACE</p>
        <a href="#overview" className="nav-item active"><span className="nav-symbol overview-symbol"><span /></span>Overview</a>
        <a href="#services" className="nav-item"><CalendarDays size={17} />Services<span className="nav-count">4</span></a>
        <a href="#impact" className="nav-item"><Leaf size={17} />Impact report</a>
        <a href="#locations" className="nav-item"><MapPin size={17} />Locations</a>
        <p className="nav-label nav-label-spaced">YOUR TEAM</p>
        <a href="#team" className="nav-item"><span className="people-icon"><i /><i /><i /></span>Team members</a>
      </nav>

      <div className="sidebar-bottom">
        <div className="help-card">
          <div className="help-icon"><CircleHelp size={17} /></div>
          <strong>Need a hand?</strong>
          <p>Your Greenserve partner is just a message away.</p>
          <a href="mailto:hello@greenserve.example">Get in touch <ArrowUpRight size={13} /></a>
          <div className="help-art"><Leaf size={68} strokeWidth={0.8} /></div>
        </div>
        <button className="profile-button" type="button">
          <span className="profile-avatar">JM</span>
          <span className="profile-copy"><strong>Jordan Miller</strong><small>Workspace admin</small></span>
          <MoreHorizontal size={19} className="muted-icon" />
        </button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span className="crumb-slash">/</span><strong>Overview</strong></div>
      <div className="topbar-actions">
        <span className="today-label"><span className="online-dot" />All services running smoothly</span>
        <button className="icon-button notification-button" aria-label="Notifications" type="button"><Bell size={18} /><i /></button>
        <span className="top-avatar">JM</span>
      </div>
    </header>
  );
}

function ProgressCard() {
  return (
    <section className="impact-card" id="impact" aria-label="Environmental impact">
      <div className="impact-card-top">
        <div>
          <div className="eyebrow light-eyebrow"><span className="eyebrow-spark">✳</span> YOUR IMPACT THIS MONTH</div>
          <h2>A little better,<br />every day.</h2>
        </div>
        <div className="impact-stamp"><Leaf size={16} /><span>GOOD<br />THINGS<br />GROW</span></div>
      </div>
      <div className="impact-score-row">
        <div><strong>82<span>/100</span></strong><small>Impact score</small></div>
        <div className="score-change"><ArrowUpRight size={15} /> 12% <span>this month</span></div>
      </div>
      <div className="score-track"><span /></div>
      <div className="impact-foot"><span>You're ahead of 68% of teams</span><a href="#impact">See your report <ArrowRight size={13} /></a></div>
    </section>
  );
}

function ImpactChart() {
  return (
    <section className="panel chart-panel" aria-labelledby="chart-heading">
      <div className="panel-heading">
        <div><div className="eyebrow">MAKING A DIFFERENCE</div><h2 id="chart-heading">Your footprint, trending down</h2></div>
        <button className="select-button" type="button">Last 6 months <ChevronDown size={14} /></button>
      </div>
      <div className="chart-summary">
        <strong>−24<span>%</span></strong><span className="summary-label">less operational waste<br />than your first month</span>
        <span className="chart-legend"><i className="legend-current" />This year <i className="legend-previous" />Baseline</span>
      </div>
      <div className="chart" role="img" aria-label="Monthly operational waste index has declined compared to the baseline from June to November">
        <div className="chart-grid"><span>100</span><span>75</span><span>50</span><span>25</span></div>
        <div className="chart-columns">
          {chartBars.map((bar) => <div className="chart-month" key={bar.month}>
            <div className="bars"><span className="bar previous-bar" style={{ height: `${bar.previous}%` }} /><span className="bar current-bar" style={{ height: `${bar.current}%` }} /></div>
            <span className="month-label">{bar.month}</span>
          </div>)}
        </div>
      </div>
      <p className="chart-note"><span className="note-leaf"><Leaf size={13} /></span> That's like taking <strong>18 cars</strong> off the road for a day.</p>
    </section>
  );
}

function ServiceList() {
  return (
    <section className="panel services-panel" id="services" aria-labelledby="services-heading">
      <div className="panel-heading services-heading">
        <div><div className="eyebrow">ON THE CALENDAR</div><h2 id="services-heading">Coming up</h2></div>
        <a href="#services" className="text-link">All services <ArrowRight size={14} /></a>
      </div>
      <div className="service-list">
        {services.map(({ icon: Icon, title, type, location, date, status, tone }) => <article className="service-row" key={title}>
          <div className={`service-icon ${tone}`}><Icon size={18} strokeWidth={1.8} /></div>
          <div className="service-main"><strong>{title}</strong><span>{type} <i /> <MapPin size={12} /> {location}</span></div>
          <div className="service-when"><Clock3 size={13} />{date}</div>
          <span className={`status-pill ${status === "In progress" ? "status-progress" : ""}`}><i />{status}</span>
          <button className="row-menu" aria-label={`More options for ${title}`} type="button"><MoreHorizontal size={18} /></button>
        </article>)}
      </div>
      <a className="mobile-all-link" href="#services">View all services <ArrowRight size={14} /></a>
    </section>
  );
}

function MetricCards() {
  return (
    <section className="metrics-grid" aria-label="Workspace summary">
      <article className="metric-card">
        <div className="metric-top"><span className="metric-icon mint-icon"><CalendarDays size={17} /></span><span className="metric-trend"><ArrowUpRight size={13} /> 8%</span></div>
        <span className="metric-value">12</span><span className="metric-label">Services this month</span>
        <div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </article>
      <article className="metric-card">
        <div className="metric-top"><span className="metric-icon peach-icon"><Recycle size={17} /></span><span className="metric-context">This month</span></div>
        <span className="metric-value">340 <small>kg</small></span><span className="metric-label">Materials diverted</span>
        <div className="metric-caption"><Check size={12} /> 40 kg more than last month</div>
      </article>
      <article className="metric-card">
        <div className="metric-top"><span className="metric-icon sky-icon"><Wind size={17} /></span><span className="metric-context">Across 3 locations</span></div>
        <span className="metric-value">1.2 <small>tons</small></span><span className="metric-label">CO₂e avoided</span>
        <div className="metric-caption"><Sun size={12} /> A brighter kind of business</div>
      </article>
    </section>
  );
}

function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="welcome-copy"><div className="eyebrow welcome-eyebrow">TUESDAY, NOVEMBER 25</div><h1>Good morning, Jordan <span>✳</span></h1><p>Your spaces are in good hands. Here’s how you’re making a difference.</p></div>
      <a href="#request" className="primary-button"><Plus size={17} strokeWidth={2.5} /> Request a service</a>
      <div className="banner-decoration"><div className="sun-disc" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="plant plant-one"><i /><i /><i /></div><div className="plant plant-two"><i /><i /><i /><i /></div><div className="banner-spark">✳</div><div className="banner-spark small-spark">✳</div></div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="app-shell" id="overview">
      <Sidebar />
      <main className="main-area">
        <Header />
        <div className="page-content">
          <WelcomeBanner />
          <div className="content-grid">
            <div className="main-column"><MetricCards /><ServiceList /></div>
            <div className="right-column"><ProgressCard /><ImpactChart /><section className="tip-card"><span className="tip-icon"><Sun size={17} /></span><div><strong>A small idea for this week</strong><p>Try a reusable cup station in your busiest meeting room.</p></div><ArrowDownRight size={17} className="tip-arrow" /></section></div>
          </div>
          <footer className="page-footer"><span>© 2025 Greenserve</span><span>Thoughtful service for a lighter footprint <Leaf size={12} /></span><a href="#help">Privacy & support</a></footer>
        </div>
      </main>
    </div>
  );
}
