import "./Tech.scss";

export default function Tech({ doc, url, text, style }) {
  return (
    <div className="tech">
      <a href={doc}>
        <img src={url} style={style} />
        <p>{text}</p>
      </a>
    </div>
  );
}
