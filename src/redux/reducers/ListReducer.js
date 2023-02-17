import { ADD_SONG_TO_LIST, REMOVE_SONG_FROM_LIST } from "../actions";

const inState = {
  likedSongs: [],
};

const ListReducer = (state = inState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_LIST:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    case REMOVE_SONG_FROM_LIST:
      return {
        ...state,
        likedSongs: state.likedSongs.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ListReducer;
