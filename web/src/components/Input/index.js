export default function Input({ label, name, ...rest }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input type="text" id={name} {...rest} />
    </div>
  );
}
