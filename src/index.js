
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCQaZ4y-G1zYqgBM6DHxo46-E44FF-9eg0';

//create a new components.  This components should produce some HTML

const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    )
};






//Take this components's generated HTML and put it on the page( in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));

