import { useRef, useEffect, useState } from "react";
import cake from "../assets/images/cake.png";

const StartView = () => {
  const canvasRef = useRef(null);
  const requestAnimation = useRef(null);
  const [isSnapshot, setIsSnapshot] = useState(false);

  const takePhoto = () => {
    cancelAnimationFrame(requestAnimation.current);
    setIsSnapshot(true);
  };

  const downloadPhoto = () => {
    const link = document.createElement("a");
    link.href = canvasRef.current.toDataURL("image/png");
    link.setAttribute("download", "photo");
    link.click();
  };

  useEffect(() => {
    const video = document.createElement("video");
    const img = new Image();

    const update = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(
        video,
        0,
        0,
        window.innerWidth,
        (video.videoHeight / video.videoWidth) * window.innerWidth
      );
      img.src = cake;
      ctx.drawImage(img, 0, 0, 100, 100);
      requestAnimation.current = requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.
    };

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((localMediaStream) => {
        video.srcObject = localMediaStream;
        video.addEventListener("loadeddata", function () {
          video.play(); // start playing
          update(); //Start rendering
        });
      })
      .catch((e) => console.error("OH! error", e));
  }, []);

  return (
    <>
      <canvas ref={canvasRef} width={window.innerWidth} height={500}></canvas>
      {isSnapshot ? (
        <button onClick={downloadPhoto}>下載</button>
      ) : (
        <button onClick={takePhoto}>拍照</button>
      )}
    </>
  );
};

export default StartView;
