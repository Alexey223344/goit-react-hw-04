import ImageCard from "../ImageCard/ImageCard";

const ImgGallers = ({ dataImg, openModal }) => {
  return (
    <div>
      {Array.isArray(dataImg) && dataImg.length > 0 ? (
        dataImg.map((item) => <ImageCard key={item.id} dataImage={item} openModal={openModal} />)
      ) : (
        <p>No images</p>
      )}
    </div>
  );
};
export default ImgGallers;
