import { url } from "../../utils";

export const SET_SONG_DATA = "SET_SONG_DATA";
export const SET_SONG_ERROR = "SET_SONG_ERROR";
export const SET_SONG_LOADING = "SET_SONG_LOADING";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const ADD_SONG_TO_LIST = "ADD_SONG_TO_LIST";
export const REMOVE_SONG_FROM_LIST = "REMOVE_SONG_FROM_LIST";

export const getSongData = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + query);
      console.log(res);
      if (res.ok) {
        const { data } = await res.json();
        dispatch({
          type: SET_SONG_DATA,
          payload: data,
        });
        dispatch({
          type: SET_SONG_ERROR,
          payload: false,
        });
        dispatch({
          type: SET_SONG_LOADING,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: SET_SONG_ERROR,
          payload: true,
        });
        dispatch({
          type: SET_SONG_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_SONG_ERROR,
        payload: true,
      });
      dispatch({
        type: SET_SONG_LOADING,
        payload: false,
      });
    }
  };
};

export const setSelectedSong = (song) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_SONG,
      payload: song,
    });
  };
};

export const addSongToList = (song) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SONG_TO_LIST,
      payload: song,
    });
  };
};

export const removeSongFromList = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SONG_FROM_LIST,
      payload: id,
    });
  };
};
