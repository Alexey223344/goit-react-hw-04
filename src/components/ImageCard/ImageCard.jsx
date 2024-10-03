
  const ImageCard = ({ dataImg, openModal }) => {
      const { urls, description, likes } = dataImg;

  return (
    <li>
      <div>
        <img
          onClick={() => openModal({ url: urls.full, name: description })}
          src={urls.small}
          alt={description}
        />
      </div>
      <div>
        <p>Like:{likes}</p>
      </div>
    </li>
  );
};
export default ImageCard;
