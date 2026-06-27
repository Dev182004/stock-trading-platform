import dittoLogo from "../../../Images/dittoLogo.png";
import goldenpiLogo from "../../../Images/goldenpiLogo.png";
import sensibullLogo from "../../../Images/sensibullLogo.svg";
import smallcaseLogo from "../../../Images/smallcaseLogo.png";
import streakLogo from "../../../Images/streakLogo.png";
import zerodhaFundhouse from "../../../Images/zerodhaFundhouse.png";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={smallcaseLogo}></img>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={streakLogo}></img>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={sensibullLogo}></img>
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={zerodhaFundhouse}></img>
          <p className="text-small text-muted">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={goldenpiLogo}></img>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "50%" }} src={dittoLogo}></img>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mb-5"
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}
