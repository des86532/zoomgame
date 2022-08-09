import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const MainView = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const modalOpen = () => {
    setShow(true);
  };

  const modalCancel = () => {
    setShow(false);
  };

  const modalConfirm = () => {
    navigate("/start");
  };

  return (
    <>
      <img
        src={require("../assets/images/bg_welcome.png")}
        alt=""
        width="100%"
      />
      <img
        src={require("../assets/images/btn_start_game.png")}
        onClick={modalOpen}
        alt=""
        width="40%"
      />
      <Modal show={show} onCancel={modalCancel} onConfirm={modalConfirm} />
    </>
  );
};

export default MainView;
