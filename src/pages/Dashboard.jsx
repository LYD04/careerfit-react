import { BarChart3, CheckCircle2, Target } from "lucide-react";
import { Card, MetricCard } from "../components/Card.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import {
  applications,
  keywordGaps,
  metrics,
  newActions,
  user,
} from "../data/mockData.js";
import { textMap } from "../assets/textMap.js";

export default function Dashboard({ onNavigate }) {
  const icons = [
    <BarChart3 size={22} />,
    // <CheckCircle2 size={22} />,
    <Target size={22} />,
  ];
  // const icons = [<BarChart3 size={22} />, <CheckCircle2 size={22} />, <Target size={22} />];
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1>
            {textMap.welcome} {user.name}
          </h1>
          <p className="muted">
            {textMap.currentTargetRole}: {user.targetRole}
          </p>
        </div>
        <Button onClick={() => onNavigate("upload")}>
          {textMap.newAnalysis}
        </Button>
      </div>

      <div className="metric-grid">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} {...metric} icon={icons[index]} />
        ))}
      </div>

      <div className="dashboard-grid">
        {/* <Card>
          <div className="section-header">
            <h2>Recent Applications</h2>
            <Button variant="ghost" onClick={() => onNavigate("applications")}>
              View all
            </Button>
          </div>
          <div className="app-list">
            {applications.slice(0, 3).map((app) => (
              <div className="app-row" key={app.company}>
                <div>
                  <strong>{app.company}</strong>
                  <p>{app.role}</p>
                </div>
                <Badge tone={app.status === "Ready" ? "found" : "partial"}>
                  {app.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card> */}
        <Card>
          <div className="section-header">
            <h2>{textMap.newActions}</h2>
          </div>
          <ol className="action-list">
            {newActions.map((action, index) => (
              <li>{action}</li>
            ))}
          </ol>
          <Button onClick={() => onNavigate("improvement")}>
            {textMap.imporoveCV}
          </Button>
        </Card>
      </div>

      <Card>
        <div className="section-header">
          <h2>{textMap.missingKeywords}</h2>
          <Button variant="ghost" onClick={() => onNavigate("analysis")}>
            {textMap.viewAnalysis}
          </Button>
        </div>
        <div className="badge-row">
          {keywordGaps
            .filter((k) => k.status !== "Found")
            .map((k) => (
              <Badge key={k.keyword} tone={k.status}>
                {k.keyword}
              </Badge>
            ))}
        </div>
      </Card>
    </div>
  );
}
