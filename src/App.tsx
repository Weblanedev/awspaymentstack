import "./App.css";

const heroImage = new URL("./assets/workdesk.jpg", import.meta.url).href;

function App() {
  return (
    <main className="coming-soon-wrapper">
      <section className="coming-soon-card">
        <p className="eyebrow">Coming soon</p>
        {/* <h1>Veston is getting a fresh look</h1> */}
        <p className="lede">
          We are
          <br />
          crafting a<br />
          modern
          <br />
          experience
          <br />
          tailored to
          <br />
          every screen
          <br />
          size so you
          <br />
          can stay
          <br />
          close to the
          <br />
          drops you
          <br />
          care about
          <br />
          most.
        </p>
        {/* <p className="body-text">
          Leave the refresh button alone—we will notify you the moment the new experience is ready. In the
          meantime, follow us on your favorite channels for behind-the-scenes updates.
        </p> */}
        {/* <div className="cta-group">
          <button type="button" className="primary-action">Notify me</button>
          <button type="button" className="ghost-action">See updates</button>
        </div>
        <small className="footnote">No spam. Just the good stuff.</small> */}
      </section>

      <figure className="coming-soon-visual" aria-hidden="true">
        <img src={heroImage} alt="" loading="lazy" decoding="async" />
      </figure>
    </main>
  );
}

export default App;
