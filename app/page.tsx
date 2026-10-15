export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top">
          <svg className="seal" viewBox="0 0 64 64" aria-hidden="true">
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="none"
              stroke="#c6a36a"
              strokeWidth="1"
            />
            <circle
              cx="32"
              cy="32"
              r="24"
              fill="none"
              stroke="#f0d7a8"
              strokeWidth="0.6"
            />
            <text
              x="32"
              y="37"
              textAnchor="middle"
              fill="#f4efe6"
              fontSize="16"
              fontFamily="Georgia, serif"
            >
              FK
            </text>
          </svg>
          <span className="brandName">Faisal Khan</span>
        </a>
        <nav className="nav" aria-label="Portfolio">
          <a href="#about">About</a>
          <a href="#science">Science</a>
          <a href="#leadership">Leadership</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="kicker">Portfolio</p>
            <h1 className="title">Faisal Khan</h1>
            <p className="role">
              Scientist and leader
              <br />
              of a country
            </p>
            <p className="lede">
              I work where careful inquiry meets public responsibility. As a
              scientist, I look for what is true. As a leader of a country, I
              hold that truth in service of the people.
            </p>
          </div>
          <div className="orbit" aria-hidden="true">
            <svg className="orbitSvg" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="148"
                fill="none"
                stroke="rgba(240,215,168,0.28)"
                strokeWidth="1"
              />
              <ellipse
                cx="160"
                cy="160"
                rx="148"
                ry="58"
                fill="none"
                stroke="rgba(198,163,106,0.7)"
                strokeWidth="1"
                transform="rotate(-24 160 160)"
              />
              <ellipse
                cx="160"
                cy="160"
                rx="110"
                ry="148"
                fill="none"
                stroke="rgba(240,215,168,0.35)"
                strokeWidth="1"
                transform="rotate(18 160 160)"
              />
              <circle cx="160" cy="160" r="46" fill="#1a1814" stroke="#c6a36a" />
              <text
                x="160"
                y="156"
                textAnchor="middle"
                fill="#f0d7a8"
                fontSize="13"
                letterSpacing="3"
                fontFamily="Georgia, serif"
              >
                FK
              </text>
              <text
                x="160"
                y="174"
                textAnchor="middle"
                fill="#f4efe6"
                fontSize="8"
                letterSpacing="1.5"
                fontFamily="sans-serif"
              >
                SCIENTIST
              </text>
              <circle cx="292" cy="122" r="4" fill="#f0d7a8" />
              <circle cx="78" cy="214" r="3" fill="#c6a36a" />
              <circle cx="196" cy="28" r="2.5" fill="#f4efe6" />
            </svg>
          </div>
        </section>

        <section className="paper" id="about">
          <div className="statement">
            <p className="statementLabel">In my own words</p>
            <blockquote className="quote">
              I am a scientist, and I am a leader of a country. One vocation
              asks what is true. The other asks what a nation deserves.
            </blockquote>
          </div>

          <div className="chapters">
            <article className="chapter" id="science">
              <span className="index">01 — Science</span>
              <h2>The scientist</h2>
              <p>
                I am a scientist. My work is patient observation, honest
                measurement, and the willingness to revise a belief when the
                evidence changes. Science, for me, is a public good: knowledge
                that belongs to everyone who will use it with care.
              </p>
            </article>
            <article className="chapter" id="leadership">
              <span className="index">02 — Leadership</span>
              <h2>The leader</h2>
              <p>
                I am a leader of a country. Leadership is stewardship — of
                institutions, of trust, and of the future people will inherit.
                I lead by listening first, deciding in the open, and treating
                the nation&apos;s dignity as a daily responsibility.
              </p>
            </article>
          </div>

          <div className="principles">
            <article className="principle">
              <div className="rule" />
              <h3>Inquiry</h3>
              <p>
                Questions before slogans. A country is stronger when its leader
                still thinks like a scientist.
              </p>
            </article>
            <article className="principle">
              <div className="rule" />
              <h3>Stewardship</h3>
              <p>
                Power is borrowed from the people. I hold it to protect their
                welfare, their freedom, and their future.
              </p>
            </article>
            <article className="principle">
              <div className="rule" />
              <h3>Clarity</h3>
              <p>
                Speak plainly. Decide with evidence. Leave the work better than
                it was found.
              </p>
            </article>
          </div>
        </section>

        <section className="close">
          <h2>Science in service of a nation.</h2>
          <p>
            Faisal Khan — scientist, and leader of a country. This portfolio is
            a record of that double calling.
          </p>
        </section>
      </main>

      <footer className="footer">
        <span>Faisal Khan</span>
        <span>Scientist · Leader of a country</span>
      </footer>
    </div>
  );
}
