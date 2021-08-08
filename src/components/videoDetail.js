import React from 'react';

const videoDetail = ({video}) => {
    if(!video) {
        return <div>Loading</div>;
    }
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            {/* <div className="ui pagination menu">
                <a className="active item">1</a>
                <a className="active item">11</a>
                <a className="active item">111</a>
            </div> */}
        </div>
    );
}

export default videoDetail;