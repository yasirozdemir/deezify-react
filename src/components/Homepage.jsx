import { useDispatch, useSelector } from "react-redux";
import { getSongData } from "../redux/actions";

const Homepage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.songData);
  const isError = useSelector((state) => state.song.isErrorSong);
  const isLoading = useSelector((state) => state.song.isLoadingSong);
  const query = useSelector((state) => state.search);
  console.log("songs", songs);
  console.log("isError", isError);
  console.log("isLoading", isLoading);
  console.log("query", query);
  return (
    <div className="sidebar-fix">
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
