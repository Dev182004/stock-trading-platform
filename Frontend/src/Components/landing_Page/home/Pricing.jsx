import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-3">
              <h1 className="mb-3">
                <FontAwesomeIcon icon={faIndianRupeeSign} />0
              </h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            <div className="col-6 border p-3">
              <h1 className="mb-3">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
