import { SET_SONG_DATA, SET_SONG_ERROR, SET_SONG_LOADING } from "../actions";

const inState = {
  songData: [],
  isErrorSong: false,
  isLoadingSong: true,
};

const SongReducer = (state = inState, action) => {
  switch (action.type) {
    case SET_SONG_DATA:
      return {
        ...state,
        songData: action.payload,
      };
    case SET_SONG_ERROR:
      return {
        ...state,
        isErrorSong: action.payload,
      };
    case SET_SONG_LOADING:
      return {
        ...state,
        isLoadingSong: action.payload,
      };
    default:
      return state;
  }
};

export default SongReducer;
