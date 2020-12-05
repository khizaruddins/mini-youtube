import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='video-item item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className='ui grid'>
        <div className='ui row'>
          <div className='six wide column'>
            <img
              className='ui small image'
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </div>
          <div className='ten wide column'>
            <div className='header'>{video.snippet.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
