import homeHero from "../../../Images/homehero.png";

export default function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                    <img src={homeHero} alt="Hero Image" className="mb-5"></img>
                    <h1 className="mt-5">Invest in Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button style={{width:"20%", margin:"0 auto"}} className="btn btn-primary p-2 fs-5 mb-5">Signup now</button>
            </div>
        </div>
     );
}

