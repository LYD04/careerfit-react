import Button from '../components/Button.jsx';
import { Card } from '../components/Card.jsx';

export default function Improvement({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1>CV Improvement Suggestions</h1>
          <p className="muted">Rewrite weak CV lines into role-specific, evidence-based bullet points.</p>
        </div>
        <Button onClick={() => onNavigate('interview')}>Start Interview Prep</Button>
      </div>

      <Card className="comparison-card">
        <div className="compare-col original">
          <p className="metric-label">Original CV</p>
          <h3>Marketing Intern</h3>
          <p>Managed Instagram content and helped with campaign operations.</p>
        </div>
        <div className="compare-col improved">
          <p className="metric-label">Improved CV</p>
          <h3>Marketing Intern</h3>
          <p>Planned and managed short-form Instagram content for influencer campaigns, supporting campaign execution, content scheduling, and performance reporting across social channels.</p>
        </div>
      </Card>

      <Card className="suggestion-card">
        <h2>Why this is better</h2>
        <ul className="action-list">
          <li>Uses stronger action verbs: planned, managed, supported.</li>
          <li>Connects the experience to the job description.</li>
          <li>Adds clearer scope: content scheduling, campaign execution, reporting.</li>
        </ul>
        <div className="button-row">
          <Button>Apply Suggestion</Button>
          <Button variant="secondary">Edit Manually</Button>
          <Button variant="ghost">Skip</Button>
        </div>
      </Card>

      <Card>
        <h2>AI Coach Panel</h2>
        <div className="coach-grid">
          <div><strong>Add metrics</strong><p className="muted">Add lead growth, engagement rate, or conversion data if available.</p></div>
          <div><strong>Use JD keywords honestly</strong><p className="muted">Do not add GA4 as a skill unless you actually used it.</p></div>
          <div><strong>Reduce vague wording</strong><p className="muted">Replace “helped with” with a specific contribution.</p></div>
        </div>
      </Card>
    </div>
  );
}
