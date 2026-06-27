import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import googlePlayBadge from "../../../Images/googlePlayBadge.svg";
import appstoreBadge from "../../../Images/appstoreBadge.svg";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} ></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a className="text-decoration-none me-5" href={tryDemo}>
              Try Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="text-decoration-none" href={learnMore}>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          <div className="mt-3">
            <a className="me-4" href={googlePlay}>
              <img src={googlePlayBadge}></img>
            </a>
            <a href={appStore}>
              <img src={appstoreBadge}></img>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
