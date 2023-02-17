import { Link } from "react-router-dom";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="py-3 sidebar-fix">
        <div>
          <div className="row m-3 flex-column flex-md-row">
            <div className="col-9 p-0 row flex-column flex-md-row">
              <div className="d-flex p-0 mr-1 flex-column col">
                <span>Company</span>
                <Link to="/">About</Link>
                <Link to="/">Jobs</Link>
                <Link to="/">For the Record</Link>
              </div>
              <div className="d-flex p-0 mr-1 mt-3 mt-md-0 flex-column col">
                <span>Communities</span>
                <Link to="/">For Artists</Link>
                <Link to="/">Developers</Link>
                <Link to="/">Advertising</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Vendors</Link>
              </div>
              <div className="d-flex p-0 mr-1 mt-3 mt-md-0 flex-column col">
                <span>Useful Links</span>
                <Link to="/">Support</Link>
                <Link to="/">Free Mobile App</Link>
              </div>
            </div>
            <div
              className="d-flex col-3 p-0 ml-md-auto"
              style={{ marginInlineStart: "-15px" }}
            >
              <div
                className="socialLinks ml-auto mt-3 mt-md-0"
                style={{ minWidth: "120px" }}
              >
                <Link to="/" type="button" className="btn">
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link to="/" type="button" className="btn ml-md-2">
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link to="/" type="button" className="btn ml-md-2">
                  <img src={facebook} alt="facebook" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
