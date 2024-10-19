const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay muted loop playsInline>
        <source src="intro-skyidea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
