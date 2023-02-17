import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Homepage.css";
import Song from "./Song";

const Homepage = () => {
  const songs = useSelector((state) => state.song.songData);
  //   const isError = useSelector((state) => state.song.isErrorSong);
  //   const isLoading = useSelector((state) => state.song.isLoadingSong);
  //   const query = useSelector((state) => state.search);

  return (
    <Container fluid id="homepageContainer">
      <h2>Welcome</h2>
      <Row>
        {songs &&
          songs.map((song) => {
            return <Song key={song.id} s={song} />;
          })}
      </Row>
    </Container>
  );
};

export default Homepage;
