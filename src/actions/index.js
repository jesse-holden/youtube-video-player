import YouTubeAPI from "../apis/YouTube";

export const getVideos = searchTerm => {
  return async dispatch => {
    const response = await YouTubeAPI.get("/search", {
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "snippet",
        q: searchTerm,
        maxResults: 4
      }
    });

    dispatch({
      type: "ADD_VIDEOS",
      payload: response.data.items
    });
  };
};

export const selectVideo = video => ({
  type: "SELECT_VIDEO",
  payload: video
});
