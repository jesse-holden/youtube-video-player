import { combineReducers } from "redux";

function getVideosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_VIDEOS":
      return action.payload;
    default:
      return state;
  }
}

function selectVideoReducer(video = null, action) {
  switch (action.type) {
    case "SELECT_VIDEO":
      return action.payload;
    default:
      return video;
  }
}

export default combineReducers({
  videos: getVideosReducer,
  selectedVideo: selectVideoReducer
});
