import React from 'react';
import SearchBar from './SearchBar';
import youtubeApi from './../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async (term) => {
    const result = await youtubeApi.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0],
    });
  };

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <h4 style={{ textAlign: 'center' }}>Mini Youtube App</h4>

        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
