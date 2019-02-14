import React, { Component } from "react";

export class VideoDetail extends Component {
  render() {
    if (!this.props.video)
      return (
        <iframe
          title="YouTube Video"
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/AIpXjFwVdIE"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );

    return (
      <div className="video-detail ui container">
        <iframe
          title="YouTube Video"
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <article className="ui segment">
          <h3>{this.props.video.snippet.title}</h3>
          <p>{this.props.video.snippet.description}</p>
        </article>
      </div>
    );
  }
}

export default VideoDetail;
