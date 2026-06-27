import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../Images/logo.svg";

export default function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container  mt-5">
        <div className="row mt-5">
          <div className="col-3 ">
            <img style={{ width: "50%" }} className="mb-3" src={logo}></img>
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div>
              <FontAwesomeIcon icon={faXTwitter} className="me-2" />
              <FontAwesomeIcon icon={faFacebook} className="me-2" />
              <FontAwesomeIcon icon={faInstagram} className="me-2" />
              <FontAwesomeIcon icon={faLinkedin} className="me-2" />
              <FontAwesomeIcon icon={faTelegram} className="me-2" />
            </div>
          </div>
          <div className="col-3  d-flex flex-column gap-2">
            <p>Company</p>
            <a className="a" href="">
              About
            </a>

            <a className="a" href="">
              Products
            </a>

            <a className="a" href="">
              Pricing
            </a>

            <a className="a" href="">
              Referral programme
            </a>

            <a className="a" href="">
              Careers
            </a>

            <a className="a" href="">
              Zerodha tech
            </a>

            <a className="a" href="">
              Press & media
            </a>

            <a className="a" href="">
              Zerodha cares (CSR)
            </a>
          </div>
          <div className="col-3 d-flex flex-column gap-2">
            <p>Support</p>
            <a className="a" href="">
              Contact
            </a>

            <a className="a" href="">
              Support portal
            </a>

            <a className="a" href="">
              Z-Connect blog
            </a>

            <a className="a" href="">
              List of charges
            </a>

            <a className="a" href="">
              Downloads & resources
            </a>
          </div>
          <div className="col-3  d-flex flex-column gap-2">
            <p>Account</p>
            <a className="a" href="">
              About
            </a>

            <a className="a" href="">
              Open an account
            </a>

            <a className="a" href="">
              Fund transfer
            </a>

            <a className="a" href="">
              60 day challenge
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted " style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="d-flex flex-row gap-4 justify-content-center p-3">
          <a className='a' href="">NSE</a>
          <a className='a' href="">BSE</a>
          <a className='a' href="">MCX</a>
          <a className='a' href="">Terms & conditions</a>
          <a className='a' href="">Policies & procedures</a>
          <a className='a' href="">Privacy policy</a>
          <a className='a' href="">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}
