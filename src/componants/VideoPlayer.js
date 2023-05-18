import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=tj9-MGHCs38" // Replace with your video URL
        controls // Enable player controls
        width="100%" // Set the desired width
        height="auto" // Set the desired height or maintain aspect ratio
      />
    </div>
  );
};

export default VideoPlayer;