import Button from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { TextInput } from "../components/Input.jsx";
import { user } from "../data/mockData.js";

export default function Profile() {
  return (
    <div className="page-content narrow">
      <h1>Profile & Career Goals</h1>
      <p className="muted">
        Define your target roles and preferences for better coaching.
      </p>
      <Card>
        <div className="form-grid two">
          <TextInput label="Full name" defaultValue={user?.name} />
          <TextInput label="University" defaultValue={user?.university} />
          <TextInput label="Target role" defaultValue={user?.targetRole} />
          <TextInput
            label="Target industry"
            defaultValue="Education, Tech, Marketing"
          />
          <TextInput label="Preferred location" defaultValue="Seoul" />
          <TextInput
            label="Experience level"
            defaultValue="Student / Entry-level"
          />
        </div>
        <div className="right-actions">
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}
