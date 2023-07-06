const Card = ({ title, content, imgLink }) => {
  return (
    <div className="card">
      <img alt="Pic" src={imgLink}></img>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
