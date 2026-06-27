export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 spWrapperHero">
        <h3>Support portal</h3>
        <a className="link-light" href="">
          Track Tickets
        </a>
      </div>

      <div className="p-5 spWrapperHero">
        <div className="mb-5">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics
            <br /> to create a ticket
          </h1>
          <input
            className="mb-4 border-0"
            style={{ width: "90%", borderRadius: "10px", padding: "1.2em" }}
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <a className="link-light me-3" href="">
            Track account opening
          </a>
          <a className="link-light me-3" href="">
            Track segment activation
          </a>
          <a className="link-light me-3" href="">
            Intraday margins
          </a>
          <a className="link-light me-3" href="">
            Kite user manual
          </a>
        </div>

        <div>
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol>
            <li className="mb-3">
              <a className="link-light" href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a className="link-light" href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
