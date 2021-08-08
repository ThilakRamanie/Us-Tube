import React from 'react';
import SearchBar from './searchBar';
import Youtube from '../apis/youtube';
import Videoslist from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component {
    state =  {videos:[],selectedVideo:null};
    componentDidMount() {
        this.onSearchSubmit('/');
    }
    onSearchSubmit = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q:term
            }
        });
        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
        console.log(response);
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <Videoslist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;