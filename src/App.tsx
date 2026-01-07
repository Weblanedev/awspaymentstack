import "./App.css";

function App() {
  return (
    <main className="coming-soon-wrapper">
      <div className="sky-background">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
      </div>

      <section className="coming-soon-card">
        <p className="eyebrow">Coming soon</p>
        <h1 className="lede">
          We are crafting a modern experience tailored to every screen size so
          you can stay close to the drops you care about most.
        </h1>
      </section>
    </main>
  );
}

export default App;
