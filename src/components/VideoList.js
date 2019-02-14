import React, { Component } from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    if (!this.props.videos) return "";
    return (
      <aside className="video-list">
        {this.props.videos.map(video => (
          <VideoItem key={video.etag} video={video} />
        ))}
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos
});

export default connect(mapStateToProps)(VideoList);
