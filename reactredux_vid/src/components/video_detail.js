import React from 'react';

const VideoDetail = ({video}) => {
  const vidTitle = {
    paddingTop: "10px",
    fontWeight: "bold",
    fontSize: "18px",
  };
  if(!video) {
    return (<div>Loading...</div>);
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="url" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div style={ vidTitle }>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoDetail;
