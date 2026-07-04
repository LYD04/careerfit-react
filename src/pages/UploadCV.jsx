import { UploadCloud } from 'lucide-react';
import Button from '../components/Button.jsx';
import { TextArea, TextInput } from '../components/Input.jsx';

export default function UploadCV({ onNavigate }) {
  return (
    <div className="page-content narrow">
      <p className="step-label">Step 1 of 3</p>
      <h1>Upload your CV</h1>
      <p className="muted">Upload a file or paste your CV text. The prototype uses mock data for analysis.</p>

      <div className="upload-area">
        <UploadCloud size={42} />
        <h2>Drag and drop your CV here</h2>
        <p>PDF, DOCX, or TXT supported</p>
        <Button variant="secondary">Upload File</Button>
      </div>

      <TextArea label="Or paste your CV text" placeholder="Paste CV text here..." rows={8} />
      <div className="form-grid two">
        <TextInput label="Target company" placeholder="Google Korea" defaultValue="Google Korea" />
        <TextInput label="Target role" placeholder="Marketing Intern" defaultValue="Marketing Intern" />
      </div>
      <div className="right-actions">
        <Button onClick={() => onNavigate('analysis')}>Continue to Job Description</Button>
      </div>
    </div>
  );
}
