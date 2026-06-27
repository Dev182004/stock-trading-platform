import {
  faChartColumn,
  faCircleNotch,
  faCirclePlus,
  faCoins,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket,select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faCirclePlus} className="me-3" />
            Account Opening
          </h4>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Online Account Opening
            </a>
            <a className="text-decoration-none" href="">
              Offline Account Opening
            </a>
            <a className="text-decoration-none" href="">
              Company, Partnership and HUF Account Opening
            </a>
            <a className="text-decoration-none" href="">
              NRI Account Opening
            </a>
            <a className="text-decoration-none" href="">
              Charges at Zerodha
            </a>
            <a className="text-decoration-none" href="">
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <a className="text-decoration-none" href="">
              Getting Started
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h3 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faUser} className="me-3" />
            Your Zerodha Account
          </h3>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Login Credentials
            </a>
            <a className="text-decoration-none" href="">
              Account Modification and Segment Addition
            </a>
            <a className="text-decoration-none" href="">
              DP ID and bank details
            </a>
            <a className="text-decoration-none" href="">
              Your Profile
            </a>
            <a className="text-decoration-none" href="">
              Transfer and conversion of shares
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h3 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faChartColumn} className="me-3" />
            Your Zerodha Account
          </h3>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Margin / leverage, product and Order types
            </a>
            <a className="text-decoration-none" href="">
              Kite Web and Mobile
            </a>
            <a className="text-decoration-none" href="">
              Trading FAQs
            </a>
            <a className="text-decoration-none" href="">
              Corporate Actions
            </a>
            <a className="text-decoration-none" href="">
              Sentinel
            </a>
            <a className="text-decoration-none" href="">
              Kite API
            </a>
            <a className="text-decoration-none" href="">
              Pi and other platforms
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faWallet} className="me-3" />
            Funds
          </h4>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Adding funds
            </a>
            <a className="text-decoration-none" href="">
              Withdrawing funds
            </a>
            <a className="text-decoration-none" href="">
              Fund statement
            </a>
            <a className="text-decoration-none" href="">
              eMandate and Auto-pay
            </a>
            <a className="text-decoration-none" href="">
              Failed fund transfers
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h3 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faCircleNotch} className="me-3" />
            Console
          </h3>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Login Credentials
            </a>
            <a className="text-decoration-none" href="">
              Account Modification and Segment Addition
            </a>
            <a className="text-decoration-none" href="">
              DP ID and bank details
            </a>
            <a className="text-decoration-none" href="">
              Your Profile
            </a>
            <a className="text-decoration-none" href="">
              Transfer and conversion of shares
            </a>
            <a className="text-decoration-none" href="">
              Reports and Tax Statements
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h3 className="fs-5 mb-5">
            <FontAwesomeIcon icon={faCoins} className="me-3" />
            Coin
          </h3>
          <div className="d-flex flex-column gap-2">
            <a className="text-decoration-none" href="">
              Understanding Mutual Funds
            </a>
            <a className="text-decoration-none" href="">
              Coin Web and Mobile App
            </a>
            <a className="text-decoration-none" href="">
              Investments and SIPs
            </a>
            <a className="text-decoration-none" href="">
              Redemption and Dividends
            </a>
            <a className="text-decoration-none" href="">
              Government Securities and Bonds
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
