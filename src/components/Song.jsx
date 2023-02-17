import { Col, Card } from "react-bootstrap";

const Song = ({ s }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={2}>
      <Card className="songCard mb-3 p-2">
        <div className="img-wrapper">
          <Card.Img src={s.album.cover_medium} alt="song cover" />
          <button className="btn-transparent">
            <div className="play-button-cards d-flex align-items-center justify-content-center">
              <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
              </svg>
            </div>
          </button>
        </div>
        <Card.Body>
          <h5 className="card-title text-truncate">{s.title}</h5>
          <h6 className="card-subtitle">{s.artist.name}</h6>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Song;
