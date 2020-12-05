import React from 'react';

const parseUTCDateObj = (dateValue) => {
  let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  let month = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let date = new Date(dateValue);

  return (
    date.getUTCDate().toLocaleString() +
    ' ' +
    day[date.getUTCDay()] +
    ' ' +
    month[date.getUTCMonth()] +
    ' ' +
    date.getUTCFullYear()
  );
};

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} frameborder='0' title='video player'></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <div className='middle aligned content'>
          <div className='extra content'>
            Channel name: {video.snippet.channelTitle}
          </div>
          <div className='copyright'>
            published At: {parseUTCDateObj(video.snippet.publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
