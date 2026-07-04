import { Card } from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import { applications } from '../data/mockData.js';

export default function Applications() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div><h1>Applications</h1><p className="muted">Manage job-specific CV versions and interview progress.</p></div>
        <Button>New Application</Button>
      </div>
      <Card>
        <table className="table">
          <thead><tr><th>Company</th><th>Role</th><th>Match</th><th>Readiness</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.company}>
                <td>{app.company}</td><td>{app.role}</td><td>{app.match}</td><td>{app.readiness}</td>
                <td><Badge tone={app.status === 'Ready' ? 'found' : app.status === 'Draft' ? 'partial' : 'recommended'}>{app.status}</Badge></td>
                <td><Button variant="ghost" size="small">Open</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
