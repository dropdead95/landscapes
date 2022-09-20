import "./TopSection.css";

function topSection({ imageSrc }) {
  return (
    <div className="top-section">
      <img src={imageSrc} alt="travel" className="top-section__image" />
      <h1 className="top-section__title">Travel made simple</h1>
    </div>
  );
}

export default topSection;
