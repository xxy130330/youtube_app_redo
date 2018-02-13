
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyCQaZ4y-G1zYqgBM6DHxo46-E44FF-9eg0';



//create a new components.  This components should produce some HTML

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],

        };
        YTSearch({
                key: API_KEY,
                term:'surfboards'
            },
            (data) => {
                this.setState({
                    videos: data
                })
            }
        );
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}





//Take this components's generated HTML and put it on the page( in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));

