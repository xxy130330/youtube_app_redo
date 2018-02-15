
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyCQaZ4y-G1zYqgBM6DHxo46-E44FF-9eg0';



//create a new components.  This components should produce some HTML

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term){
        YTSearch({
                key: API_KEY,
                searchTerm: term
            },
            (data) => {
                this.setState({
                    videos: data,
                    selectedVideo: data[0]
                })
            }
        );
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={(term) => {this.videoSearch(term)}}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
                />
            </div>
        )
    }
}





//Take this components's generated HTML and put it on the page( in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));

