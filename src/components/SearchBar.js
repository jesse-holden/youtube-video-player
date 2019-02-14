import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideos, selectVideo } from "../actions";

class SearchBar extends Component {
  state = { text: "" };
  onInputChange = event => {
    this.setState({ text: event.target.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.getVideos(this.state.text);
  };

  async componentDidMount() {
    await this.props.getVideos("cats");
    this.props.selectVideo(this.props.videos[0]);
  }

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <div style={{ width: "80vw" }} className="ui action input">
          <input
            onChange={this.onInputChange}
            value={this.state.text}
            type="text"
            placeholder="Search..."
          />
          <button className="ui button">Search</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  videos: state.videos
});

export default connect(
  mapStateToProps,
  { getVideos, selectVideo }
)(SearchBar);
