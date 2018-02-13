import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const imageURL = video.snippet.thumbnails.default.url;


    return (
        <li className='list-group-item'>
            <div className='video-list media'>
                <div className='media-list'>
                    <img className='media-object' src={imageURL} alt=""/>
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;