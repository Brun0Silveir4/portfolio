import "./input.scss";

export default function Input({
  htmlFor,
  title,
  type,
  name,
  id,
  onChange,
  value,
}) {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>
        <p>{title}</p>
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
