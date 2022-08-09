const Modal = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-background"></div>
      <div className="content">
        <div className="text">
          請問您是否已前往<b>大門口遊客服務中心</b>取得解謎道具紙？
        </div>
        <div className="btn-group">
          <img
            src={require("../assets/images/btn_no.png")}
            alt=""
            className="btn"
            onClick={onCancel}
          />
          <img
            src={require("../assets/images/btn_yes.png")}
            alt=""
            className="btn"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
