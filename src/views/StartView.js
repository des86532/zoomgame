import { useRef, useEffect } from "react";

const StartView = () => {
  const videoRef = useRef(null);
  const previewImageRef = useRef(null);

  const takePhoto = () => {
    let canvas = previewImageRef.current;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  };

  const downloadImage = () => {
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = previewImageRef.current.toDataURL();
    link.click();
  };

  useEffect(() => {
    async function getMedia() {
      const option = { audio: false, video: { facingMode: "user" } };
      const stream = await navigator.mediaDevices.getUserMedia(option);
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    }

    getMedia();
  }, []);
  return (
    <>
      <video ref={videoRef} width="750" height="500" controls></video>
      <button onClick={takePhoto}>拍照</button>
      <canvas ref={previewImageRef}></canvas>
      <button onClick={downloadImage}>下載</button>
    </>
  );
};

export default StartView;
