import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Target,
} from "lucide-react";
import Button from "../components/Button.jsx";

export default function Landing({ onStart }) {
  return (
    <main className="landing-page">
      <nav className="landing-nav">
        <div className="brand">CareerFit AI</div>
        {/* <div className="landing-links">
          <a>Features</a>
          <a>How it works</a>
          <a>Pricing</a>
          <Button onClick={onStart}>Login</Button>
        </div> */}
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">JD-aware career coaching</p>
          <h1>Build a CV that fits the job, not just the template.</h1>
          <p>
            Upload your CV, paste a job description, and receive personalized
            feedback to improve your resume, close skill gaps, and prepare for
            interviews.
          </p>
          <div className="hero-actions">
            <Button onClick={onStart}>
              Get Started <ArrowRight size={18} />
            </Button>
            {/* <Button variant="secondary">Try Demo Analysis</Button> */}
          </div>
        </div>

        <div className="hero-card">
          <div className="card-topline">
            <span>CV Match Analysis</span>
            <BadgeText>Live</BadgeText>
          </div>
          <div className="score-large">78%</div>
          <div className="progress">
            <span style={{ width: "78%" }} />
          </div>
          <div className="split-list">
            <div>
              <h4>Strengths</h4>
              <p>
                <CheckCircle2 size={16} /> Marketing campaigns
              </p>
              <p>
                <CheckCircle2 size={16} /> Content planning
              </p>
            </div>
            <div>
              <h4>Missing</h4>
              <p>GA4</p>
              <p>CRM</p>
              <p>Reporting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-row">
        <Feature
          icon={<Target />}
          title="JD-CV Match"
          text="Compare your CV against role requirements."
        />
        <Feature
          icon={<FileText />}
          title="CV Rewriter"
          text="Rewrite weak bullets into role-specific achievements."
        />
        <Feature
          icon={<MessageSquare />}
          title="Mock Interview"
          text="Practice likely questions generated from your target job."
        />
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function BadgeText({ children }) {
  return <span className="mini-badge">{children}</span>;
}
