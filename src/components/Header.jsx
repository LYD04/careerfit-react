import { Search } from 'lucide-react';

export default function Header({ user }) {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search applications..." />
      </div>
      <div className="avatar" aria-label="User profile">{user.name.slice(0, 1)}</div>
    </header>
  );
}
