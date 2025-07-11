import "./Card-exp.scss"

export default function CardExp({ image, company, time, onClick }) {
  return (
    <div className="card-exp" onClick={onClick}>
      <div className="img-header-exp">
        <img src={image} alt={company} className="image-card" />
      </div>
      <div className="exp-card-titles">
        <div className="company-exp">
          <p>{company}</p>
        </div>
        <div className="time-exp">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}
