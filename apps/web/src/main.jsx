import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const capabilities = [
  ["Products", "Understand ingredients, nutrition and the facts that matter before you buy."],
  ["Receipts", "Turn paper receipts into searchable purchases, returns and warranty memory."],
  ["Documents", "Know what a letter is, what you need to do, and when you need to do it."],
  ["Living", "Create playful Baby Speak and Pet Speak moments designed for entertainment."]
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">Aider Lens</a>
        <div className="nav-actions">
          <a href="#how">How it works</a>
          <a href="#download">Download</a>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">AI FOR THE PHYSICAL WORLD</div>
        <h1>Point.<br />Understand.<br /><span>Act.</span></h1>
        <p>
          Aider Lens understands what you are looking at — products, receipts,
          paperwork and more — then turns it into useful information and action.
        </p>
        <div className="store-row" id="download">
          <button disabled> App Store · Coming soon</button>
          <button disabled>Google Play · Coming soon</button>
        </div>
      </section>

      <section className="lens-demo" id="how">
        <div className="scanner">
          <div className="scan-corners" />
          <div className="scan-line" />
          <div className="detected">Detected · Product</div>
        </div>
        <div className="demo-copy">
          <div className="eyebrow">ONE LENS. NO MODES TO PICK.</div>
          <h2>Aider decides what it sees.</h2>
          <p>
            Open the camera and point. The app routes the scan automatically and
            produces the right digital experience.
          </p>
        </div>
      </section>

      <section className="grid">
        {capabilities.map(([title, body]) => (
          <article key={title}>
            <div className="card-dot" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="vault">
        <div>
          <div className="eyebrow">MEMORY, NOT JUST SCANNING</div>
          <h2>Your physical world becomes searchable.</h2>
        </div>
        <p>
          Save purchases, return windows, warranties, important documents,
          deadlines and product discoveries in one private Vault.
        </p>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Aider Lens</span>
        <span>by appaider</span>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
