import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

// Create new component that produce some HTML
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBc5GxM9yFkYcTFqsmfce6SljKqRIeLbsQ';

class App extends Component {

  constructor(props) {
  	super(props);
  	this.state = { videos: [],
    selectedVideo: null
  };
  this.videoSearch('react.js');
}

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, 
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {
    const videoSearch = _
      .debounce((term) => {
        this.videoSearch(term) 
      }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange = {
          videoSearch} />
          <p>&nbsp;</p>
        <VideoDetail video = {
          this.state.selectedVideo }/>
        <VideoList
          onVideoSelect = { 
            selectedVideo => 
              this.setState( { selectedVideo } 
            ) 
          }
          videos = {
            this.state.videos } />
      </div>
    );
  }
}

export default App;
