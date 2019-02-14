import React, { Component } from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";
import "./VideoItem.css";

class VideoItem extends Component {
  handleClick = event => {
    this.props.selectVideo(this.props.video);
  };

  render() {
    return (
      <div className="video-item ui segment" onClick={this.handleClick}>
        <img src={this.props.video.snippet.thumbnails.default.url} alt="" />
        <h4>{this.props.video.snippet.title}</h4>
        <p>{this.props.video.snippet.channelId}</p>
      </div>
    );
  }
}

export default connect(
  null,
  { selectVideo }
)(VideoItem);
