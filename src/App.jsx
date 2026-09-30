import './App.css'

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home">YOUR COMPANY</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="welcome" id="home">
        <div className="welcome-copy">
          <p className="eyebrow">WELCOME</p>
          <h1>Hello, we’re glad you’re here.</h1>
          <p className="intro">
            Welcome to our company. We’re here to help you find the right place
            to start your next project.
          </p>
          <a className="primary-link" href="#about">Get to know us <span aria-hidden="true">→</span></a>
        </div>
        <div className="welcome-mark" aria-hidden="true">
          <span>HELLO</span>
          <span className="mark-dot">.</span>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h2>Good things start with a conversation.</h2>
        <p>Tell us what you have in mind. We’d be happy to hear from you.</p>
      </section>

      <footer id="contact">
        <span>YOUR COMPANY</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
