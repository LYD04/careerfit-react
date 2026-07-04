import { BarChart3, Briefcase, FileText, LayoutDashboard, MessageSquare, Settings, Target, User } from 'lucide-react';

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'upload', label: 'CV Upload', icon: FileText },
  { key: 'analysis', label: 'CV Analysis', icon: BarChart3 },
  { key: 'improvement', label: 'CV Builder', icon: Target },
  { key: 'interview', label: 'Interview Prep', icon: MessageSquare },
  { key: 'applications', label: 'Applications', icon: Briefcase },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">CareerFit AI</div>
      <nav>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`nav-item ${active === item.key ? 'active' : ''}`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
