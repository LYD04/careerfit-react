import { BarChart3, CheckCircle2, Target } from 'lucide-react';
import { Card, MetricCard } from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import { applications, keywordGaps, metrics, user } from '../data/mockData.js';

export default function Dashboard({ onNavigate }) {
  const icons = [<BarChart3 size={22} />, <CheckCircle2 size={22} />, <Target size={22} />];
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1>Welcome back, {user.name}</h1>
          <p className="muted">Current target role: {user.targetRole}</p>
        </div>
        <Button onClick={() => onNavigate('upload')}>New Analysis</Button>
      </div>

      <div className="metric-grid">
        {metrics.map((metric, index) => <MetricCard key={metric.label} {...metric} icon={icons[index]} />)}
      </div>

      <div className="dashboard-grid">
        <Card>
          <div className="section-header"><h2>Recent Applications</h2><Button variant="ghost" onClick={() => onNavigate('applications')}>View all</Button></div>
          <div className="app-list">
            {applications.slice(0, 3).map((app) => (
              <div className="app-row" key={app.company}>
                <div><strong>{app.company}</strong><p>{app.role}</p></div>
                <Badge tone={app.status === 'Ready' ? 'found' : 'partial'}>{app.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="section-header"><h2>Next Actions</h2></div>
          <ol className="action-list">
            <li>Add measurable results to internship bullet points.</li>
            <li>Prepare an honest answer for missing GA4 experience.</li>
            <li>Practice three role-specific interview questions.</li>
          </ol>
          <Button onClick={() => onNavigate('improvement')}>Improve CV</Button>
        </Card>
      </div>

      <Card>
        <div className="section-header"><h2>Missing Keywords</h2><Button variant="ghost" onClick={() => onNavigate('analysis')}>View analysis</Button></div>
        <div className="badge-row">
          {keywordGaps.filter(k => k.status !== 'Found').map(k => <Badge key={k.keyword} tone={k.status}>{k.keyword}</Badge>)}
        </div>
      </Card>
    </div>
  );
}
