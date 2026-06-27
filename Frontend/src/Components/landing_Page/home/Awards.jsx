import largestBroker from "../../../Images/largestBroker.svg";
import pressLogos from "../../../Images/pressLogos.png";


export default function Awards() {
    return ( 
        <div className="container mt-5">
             <div className="row">
                <div className="col-6 p-5">
                    <img src={largestBroker}></img>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india by trading and investing in:</p>
                     <div className="row">
                        <div className="col-6">
                           <ul>
                             <li>
                                <p>Futures and Options</p>
                             </li>
                             <li>
                                <p>Commodity derivatives</p>
                             </li>
                             <li>
                                <p>Currency derivatives</p>
                             </li>
                           </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                             <li>
                                <p>Stocks & IPOs</p>
                             </li>
                             <li>
                                <p>Direct mutual funds</p>
                             </li>
                             <li>
                                <p>Bonds and Govt. Securities</p>
                             </li>
                           </ul>
                        </div>
                     </div>
                     <img src={pressLogos} style={{width: "90%"}}></img>
                </div>
             </div>
        </div>
     );
}
