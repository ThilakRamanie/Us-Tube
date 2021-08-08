import React from 'react';
import VideoItem from './videoItem';

const videoList = ({videos, onVideoSelect}) => {
    const videosList = videos.map((video)=> {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });
    return (
        <div className="ui middle aligned animated list">{videosList}</div>
    );
}

export default videoList;