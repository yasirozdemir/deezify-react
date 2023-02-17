import { url } from "../../utils";

export const SET_SONG_DATA = "SET_SONG_DATA";
export const SET_SONG_ERROR = "SET_SONG_ERROR";
export const SET_SONG_LOADING = "SET_SONG_LOADING";

export const getSongData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + "queen");
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
