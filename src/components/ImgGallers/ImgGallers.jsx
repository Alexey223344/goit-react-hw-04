import ImgCard from "../ImgCard/ImgCard";

const ImgGallers = ({ dataImg, openModal }) => {
  return (
    <div>
      {Array.isArray(dataImg) && dataImg.length > 0 ? (
        dataImg.map((item) => <ImgCard key={item.id} dataImage={item} openModal={openModal} />)
      ) : (
        <p>No images</p>
      )}
    </div>
  );
};
export default ImgGallers;
