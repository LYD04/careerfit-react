import { UploadCloud } from "lucide-react";
import Button from "../components/Button.jsx";
import { TextArea, TextInput } from "../components/Input.jsx";
import { textMap } from "../assets/textMap.js";

export default function UploadJD({ onNavigate }) {
  return (
    <div className="page-content narrow">
      {/* <p className="step-label">Step 1 of 3</p> */}
      <h1>{textMap.UploadJD}</h1>
      <div className="form-grid two jd">
        <TextInput label="Target company" placeholder="Google Korea" />
        <TextInput label="Target role" placeholder="Marketing Intern" />
      </div>
      <p className="muted">{textMap.uploadJDExplanation}</p>

      <div className="upload-area">
        <UploadCloud size={42} />
        <h2>{textMap.uploadJDWayExplanation}</h2>
        <p>{textMap.fileFormat}</p>
        <Button variant="secondary">{textMap.uploadFile}</Button>
      </div>

      <TextArea
        label={textMap.pasteJD}
        placeholder={textMap.pasteJDPlaceholder}
        rows={8}
      />
      <div className="right-actions">
        <Button onClick={() => onNavigate("analysis")}>
          {textMap.analyse}
        </Button>
      </div>
    </div>
  );
}
