export function Card({ children, className = '' }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function MetricCard({ label, value, helper, icon }) {
  return (
    <Card className="metric-card">
      <div className="metric-header">
        {icon ? <div className="icon-box">{icon}</div> : null}
        <p className="metric-label">{label}</p>
      </div>
      <h3>{value}</h3>
      <p className="muted">{helper}</p>
    </Card>
  );
}
