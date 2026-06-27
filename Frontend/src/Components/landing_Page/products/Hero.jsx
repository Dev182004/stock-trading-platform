import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row  mt-5 p-3 text-center">
        <h1>Technology</h1>
        <h5 className="text-muted mt-3 fs-4">
          sleek, modern and intutive trading platforms
        </h5>
        <p className="mt-3 mb-5">
          check out our{" "}
          <a className="text-decoration-none" href="">
            investment offerings <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </p>
      </div>
    </div>
  );
}
