import "./Tech.scss"

export default function Tech({ url, text }) {
  return (
    <div className="tech">
      <img src={url} />
      <p>{text}</p>
    </div>
  );
}
