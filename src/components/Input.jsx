export function TextInput({ label, helper, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input className="input" {...props} />
      {helper ? <small>{helper}</small> : null}
    </label>
  );
}

export function TextArea({ label, helper, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea className="textarea" {...props} />
      {helper ? <small>{helper}</small> : null}
    </label>
  );
}
