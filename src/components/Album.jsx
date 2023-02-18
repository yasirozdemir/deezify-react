import { Container } from "react-bootstrap";
import "../styles/Album.css";

const Album = () => {
  return (
    <div className="sidebar-fix">
      <Container
        fluid
        id="albumInfoWrapper"
        className="pt-5"
        style={{ backgroundColor: "#505050" }}
      >
        <div className="row pt-5 pb-4">
          <div className="col-md-4 col-lg-3 align-self-end">
            <img
              id="albumCover"
              src=""
              className="w-100"
              alt="img placeholder"
            />
          </div>
          <div className="col align-self-end">
            <h2
              style={{ fontSize: "0.9vw", margin: "0px", fontWeight: "400" }}
              className="d-none d-lg-block"
            >
              Album
            </h2>
            <h1
              id="albumTitle"
              style={{ fontSize: "4.5vw", fontWeight: "900" }}
              className="mt-3"
            >
              Album Title
            </h1>
            <div className="d-flex flex-wrap align-items-center">
              <img
                id="artistPicture"
                src=""
                alt="artist placeholder"
                style={{ width: "24px", height: "24px", borderRadius: "50%" }}
              />
              <a href="#/" id="artistName">
                Artist Name
              </a>
              <span>•</span>
              <span id="year">Year</span>
              <span className="d-none d-lg-block">•</span>
              <span id="numOfSongs" className="d-none d-lg-block">
                X Songs,
              </span>
              <span id="durationOfTrackList" className="d-none d-lg-block">
                a mins b secs
              </span>
            </div>
          </div>
        </div>
      </Container>
      <section id="songsWrapper">
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
              <svg
                role="img"
                height="28"
                width="28"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 uPxdw"
              >
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </span>
          </button>
          <button
            // onclick="likeAlbum(this)"
            className="btn-transparent unlikedAlbum"
            style={{ marginRight: "32px" }}
          >
            <svg
              role="img"
              height="32"
              width="32"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
              className="Svg-sc-ytk21e-0 uPxdw"
            >
              <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
            </svg>
          </button>
          <button className="btn-transparent">
            <svg
              role="img"
              height="32"
              width="32"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
              className="Svg-sc-ytk21e-0 uPxdw"
            >
              <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </Container>
        <div id="musicTableWrapper" className="container-fluid">
          <table className="table table-hover table-dark table-borderless">
            <thead className="sticky-top">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col" className="text-right">
                  <i className="bi bi-clock"></i>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <span>Release Date: Month DD, YYYY</span>
          <br />
          <small>Label</small>
        </div>
      </section>
    </div>
  );
};

export default Album;
