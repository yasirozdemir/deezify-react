import "../styles/Player.css";
import pasha from "../assets/pasha.png";
import { useDispatch, useSelector } from "react-redux";
import { addSongToList, removeSongFromList } from "../redux/actions";
import ReactAudioPlayer from "react-audio-player";

const Player = () => {
  const dispatch = useDispatch();

  const selectedSong = useSelector((state) => state.song.selectedSong);
  const likedSongs = useSelector((state) => state.lists.likedSongs);
  const isLiked = likedSongs.some((s) => selectedSong.id === s.id);

  console.log(selectedSong);

  return (
    <footer className="fixed-bottom d-flex align-items-center justify-content-between">
      <div className="d-flex footer-info align-items-center w-30">
        {selectedSong ? (
          <img src={selectedSong.album.cover} width="56" alt="current song" />
        ) : (
          <img src={pasha} width="56" alt="current song" />
        )}
        <div className="d-flex flex-column px-3 justify-content-center">
          {selectedSong ? (
            <>
              <h6>{selectedSong.artist.name}</h6>
              <span>{selectedSong.title_short}</span>
            </>
          ) : (
            <>
              <h6>Pasha the cat</h6>
              <span>Meow :)</span>
            </>
          )}
        </div>
        {isLiked ? (
          <button
            id="dislikeButton"
            className="btn-transparent px-2"
            onClick={() => {
              dispatch(removeSongFromList(selectedSong.id));
            }}
          >
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
            </svg>
          </button>
        ) : (
          <button
            className="btn-transparent px-2"
            onClick={() => {
              dispatch(addSongToList(selectedSong));
            }}
          >
            <svg role="img" height="16" width="16" aria-hidden="true">
              <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
            </svg>
          </button>
        )}
        <button className="btn-transparent px-2">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" fillRule="evenodd">
              <path
                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                fillRule="nonzero"
              ></path>
              <path d="M10 8h4v3h-4z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="w-30">
        <ReactAudioPlayer
          src={selectedSong.preview}
          controls
          className="w-100"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <div className="d-flex justify-content-end w-30">helo</div>
    </footer>
  );
};

export default Player;
