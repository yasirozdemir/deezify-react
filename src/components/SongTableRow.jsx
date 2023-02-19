import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { secToMinSec } from "../utils";

const SongTableRow = ({ song, index }) => {
  return (
    <Row className="songRow align-items-center">
      <div className="d-flex align-items-center">
        <button>
          <svg role="img" height="16" width="16" viewBox="0 0 24 24">
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </button>
        {/* <button>
          <svg role="img" height="16" width="16" viewBox="0 0 24 24">
            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        </button>
        <img
          alt="equaliser"
          src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
          width="14"
          height="14"
        />
        <span>{index}</span> */}
      </div>
      <Col>
        <div className="songTitle">{song.title}</div>
        <Link to={"/artist/" + song.artist.id}>{song.artist.name}</Link>
      </Col>
      <div className="d-flex align-items-center">
        <button className="mx-4">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
          </svg>
        </button>
        <span className="mx-2">
          {secToMinSec(song.duration, "m")}:{secToMinSec(song.duration, "s")}
        </span>
        <button>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
          </svg>
        </button>
      </div>
    </Row>
  );
};

export default SongTableRow;
