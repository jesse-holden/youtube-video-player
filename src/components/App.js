import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "10px"
        }}
        className="ui container grid column center-text"
      >
        <div className="row">
          <h1>YouTube Video Search</h1>
        </div>
        <div className="row container">
          <SearchBar />
        </div>

        <div className="ui grid raised very padded container segment">
          <div className="column ten wide ">
            <VideoDetail video={this.props.video} />
          </div>
          <div className="column six wide">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  video: state.selectedVideo
});

export default connect(mapStateToProps)(App);
