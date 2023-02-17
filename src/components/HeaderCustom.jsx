import { Link } from "react-router-dom";
import "../styles/HeaderCustom.css";
import pasha from "../assets/pasha.png";
import { Dropdown } from "react-bootstrap";

const HeaderCustom = () => {
  return (
    <div id="header">
      <div className="d-flex align-items-center" style={{ height: "80px" }}>
        <div className="ml-2 btn-group" role="group">
          <button type="button" id="prevButton" aria-label="Go back">
            <svg
              // fix me l8r
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="#fff"
            >
              <path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path>
            </svg>
          </button>
          <button
            // fix me l8r
            type="button"
            id="nextButton"
            className="ml-3 d-none d-md-inline-flex"
            aria-label="Go forward"
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="#fff"
            >
              <path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path>
            </svg>
          </button>
        </div>

        <div className="btn-group ml-auto mr-2">
          <Dropdown alignRight>
            <Dropdown.Toggle
              variant="dark"
              id="dropdownButton"
              className="d-flex"
            >
              <img
                src={pasha}
                style={{ borderRadius: "50%", width: "28px", height: "28px" }}
                alt="user"
              />
              <span className="d-flex align-items-center">
                <span
                  className="d-none d-lg-inline mx-2"
                  style={{ minWidth: "60px" }}
                >
                  username
                </span>
                <svg
                  className="d-none d-lg-inline"
                  fill="#fff"
                  role="img"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  style={{ marginInlineEnd: "6px" }}
                >
                  <path d="M14 6l-6 6-6-6h12z"></path>
                </svg>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="mt-1">
              <Link to="/" className="dropdown-item d-flex" type="button">
                Account <i className="bi bi-box-arrow-up-right ml-auto"></i>
              </Link>
              <Link to="/" className="dropdown-item mt-1" type="button">
                Profile
              </Link>
              <Link
                to="/"
                className="dropdown-item mt-1 pb-1"
                type="button"
                style={{ borderBottom: "solid 0.5px rgb(59, 55, 55)" }}
              >
                Settings
              </Link>
              <Link to="/" className="dropdown-item my-1" type="button">
                {" "}
                Log out{" "}
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustom;
