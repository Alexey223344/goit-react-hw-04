import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ dataImage, openModal }) => {
  return (
    <ul>
      {dataImage.map(item => (
        <ImageCard key={item.id} dataImage={item} openModal={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;