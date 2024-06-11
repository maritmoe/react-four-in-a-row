import mySound from "./assets/applause.mp3";

function Applause() {
  return (
    <>
      <audio id="audio-id" src={mySound} autoPlay={true} />
    </>
  );
}

export default Applause;
