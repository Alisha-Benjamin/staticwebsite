import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Personalized Website</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center py-5">
        <img src="/path-to-your-image.jpg" alt="Personal" className="hero-image" />
        <h1>Welcome to My Website</h1>
        <p>Hi, I'm Alisha Benjamin, and this is a space where I share my work and ideas. I'm passionate about web development, design, and bringing creative projects to life.</p>
        <a href="#about" className="btn btn-primary mt-3">Learn More</a>
      </div>

      {/* About Section */}
      <section id="about" className="custom-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>Hello! I'm Alisha Benjamin, a web developer and designer. I love crafting beautiful and functional websites that make an impact. When I'm not coding, I enjoy reading and learning about new tech trends.</p>
            </div>
            <div className="col-md-6">
              <h2>My Work</h2>
              <p>Over the years, I've worked on a variety of projects, from simple landing pages to complex web applications. I believe in writing clean, maintainable code and continuously improving my skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Alisha Benjamin. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
