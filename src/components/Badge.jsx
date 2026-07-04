export default function Badge({ children, tone = 'default' }) {
  return <span className={`badge badge-${tone.toLowerCase()}`}>{children}</span>;
}
