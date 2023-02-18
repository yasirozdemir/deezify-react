import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { secToMinSec } from "../utils";

const SongTableRow = ({ song, index }) => {
  return (
    <Row className="songRow align-items-center">
      <div>{index}</div>
      <Col>
        <div className="songTitle">{song.title}</div>
        <Link to={"/artist/" + song.artist.id}>{song.artist.name}</Link>
      </Col>
      <div>
        {secToMinSec(song.duration, "m")}:{secToMinSec(song.duration, "s")}
      </div>
    </Row>
  );
};

export default SongTableRow;
