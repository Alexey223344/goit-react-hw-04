import Modal from "react-modal";

const ImgModal = ({ modalIsOpen, closeModal, imageModal }) => {
  const customStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(1, 1, 1, 0.9)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      with: 1400,
      height: 802,
      padding: 0,
    },
  };

  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Image Modal"
      >
        <div>
          <img src={imageModal.url} alt={imageModal.name} />
        </div>
      </Modal>
    </div>
  );
};
export default ImgModal;
