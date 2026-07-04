import { CheckCircle2, Target, XCircle } from 'lucide-react';
import Button from '../components/Button.jsx';
import { Card } from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import { keywordGaps, user } from '../data/mockData.js';

export default function Analysis({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1>CV Match Analysis</h1>
          <p className="muted">{user.company} · {user.targetRole}</p>
        </div>
        <div className="button-row">
          <Button variant="secondary" onClick={() => onNavigate('upload')}>Back</Button>
          <Button onClick={() => onNavigate('improvement')}>Improve CV</Button>
        </div>
      </div>

      <div className="analysis-grid">
        <Card className="score-card">
          <p className="metric-label">Overall Match</p>
          <div className="score-large">76%</div>
          <div className="progress"><span style={{ width: '76%' }} /></div>
          <p className="muted">Strong potential, but your CV needs more evidence of analytics and reporting.</p>
        </Card>
        <Card>
          <h2>Priority Fixes</h2>
          <ol className="action-list">
            <li>Add measurable campaign results.</li>
            <li>Clarify reporting experience.</li>
            <li>Prepare answer for missing GA4.</li>
          </ol>
        </Card>
        <Card>
          <h2>Strengths</h2>
          <ul className="clean-list success-list">
            <li><CheckCircle2 size={18} /> Influencer marketing</li>
            <li><CheckCircle2 size={18} /> SNS content planning</li>
            <li><CheckCircle2 size={18} /> Campaign operations</li>
          </ul>
        </Card>
        <Card>
          <h2>Missing Skills</h2>
          <ul className="clean-list error-list">
            <li><XCircle size={18} /> Google Analytics</li>
            <li><XCircle size={18} /> CRM tools</li>
            <li><XCircle size={18} /> A/B testing</li>
          </ul>
        </Card>
      </div>

      <Card>
        <div className="section-header"><h2>Keyword Gap Table</h2><Button variant="ghost" onClick={() => onNavigate('interview')}>Start interview prep</Button></div>
        <table className="table">
          <thead><tr><th>Keyword</th><th>Status</th><th>Recommendation</th></tr></thead>
          <tbody>
            {keywordGaps.map((item) => (
              <tr key={item.keyword}>
                <td>{item.keyword}</td>
                <td><Badge tone={item.status}>{item.status}</Badge></td>
                <td>{item.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
