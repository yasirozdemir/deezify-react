import { Container, Row, Col } from "react-bootstrap";
import "../styles/Album.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAlbum } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import SongTableRow from "./SongTableRow";
import { secToMinSec } from "../utils";

const Album = () => {
  const dispatch = useDispatch();
  const albumID = useParams().albumID;

  const album = useSelector((state) => state.lists.album);
  const songs = album.tracks.data;

  useState(() => {
    dispatch(setAlbum(albumID));
  }, []);

  return (
    <div className="sidebar-fix">
      <Container fluid id="albumInfoWrapper" className="pt-5">
        {album && (
          <Row className="pt-5 pb-4">
            <Col md={4} lg={3} className="align-self-end">
              <img
                id="albumCover"
                src={album.cover_big}
                className="w-100"
                alt="album cover"
              />
            </Col>
            <Col className="align-self-end">
              <h2 className="d-none d-lg-block">{album.type.toUpperCase()}</h2>
              <h1 id="albumTitle" className="mt-3">
                {album.title}
              </h1>
              <div className="d-flex flex-wrap align-items-center text-white">
                <img
                  id="artistPicture"
                  src={album.artist.picture}
                  alt="artist placeholder"
                />
                <Link to={"/artist/" + album.artist.id} id="artistName">
                  {album.artist.name}
                </Link>
                <span>•</span>
                <span id="year">
                  {format(parseISO(album.release_date), "yyyy")}
                </span>
                <span className="d-none d-lg-block">•</span>
                <span id="numOfSongs" className="d-none d-lg-block">
                  {songs.length} songs,
                </span>
                <span className="d-none d-lg-block">
                  {secToMinSec(album.duration, "m") +
                    " min " +
                    secToMinSec(album.duration, "s") +
                    " sec"}
                </span>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <div id="songsWrapper">
        <Container
          fluid
          id="mediaButtonsWrapper"
          className="d-flex align-items-center"
        >
          <button className="btn-transparent">
            <span
              //   onclick="togglePlay()"
              className="play-button d-flex align-items-center justify-content-center"
            >
              <svg role="img" height="28" width="28" viewBox="0 0 24 24">
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </span>
          </button>
          <button
            // onclick="likeAlbum(this)"
            id="likeButton"
            className="btn-transparent"
          >
            <svg role="img" height="32" width="32" viewBox="0 0 24 24">
              <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
            </svg>
          </button>
          <button className="btn-transparent">
            <svg role="img" height="32" width="32" viewBox="0 0 24 24">
              <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </Container>
        {album && (
          <Container fluid id="musicTableWrapper">
            <Row className="sticky-top">
              <div>#</div>
              <Col>Title</Col>
              <div className="text-right">
                <svg
                  fill="white"
                  role="img"
                  height="16"
                  width="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                  <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                </svg>
              </div>
            </Row>
            {songs.map((s, i) => {
              return <SongTableRow key={s.id} song={s} index={i + 1} />;
            })}

            <p className="m-0">
              {format(parseISO(album.release_date), "MMMM dd, yyyy")}
            </p>
            <small>{album.label}</small>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Album;
