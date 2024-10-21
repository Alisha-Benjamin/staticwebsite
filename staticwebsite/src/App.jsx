import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Alisha's Website</a>
          <div>
            <a className="nav-link d-inline-block mx-3" href="#home">Home</a>
            <a className="nav-link d-inline-block mx-3" href="#about">About</a>
            <a className="nav-link d-inline-block mx-3" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="hero-section text-center py-5">
        <img src="../silhouette.jpg" alt="Personal" className="hero-image mb-4" />
        <h1 className="display-4">Welcome to My Website</h1>
        <p className="lead">Hi, I'm Alisha Benjamin, a web developer and a full-time student who is taking Internet Programming at the University of North Texas. </p>
        <a href="#about" className="btn btn-primary mt-3">Learn More</a>
      </div>

      {/* About Section */}
      <section id="about" className="custom-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p className="lead">Hello! I'm Alisha Benjamin. I am currently a student at the University of North Texas who is majoring in Computer Science. I like frontend to create client side applications for the users to enjoy. </p>
              <p className="lead">I love working on creative projects that challenge me to think outside the box and push the boundaries of design and code.</p>
            </div>
            <div className="col-md-6">
              <h2>My Work</h2>
              <p className="lead">As a student, I've had the opportunity to work on a variety of projects, ranging from simple websites to complex web applications. My focus is always on creating a great user experience and writing clean, maintainable code.</p>
              <p className="lead">I'm constantly learning and improving my skills to keep up with the latest trends and technologies in the web development world. I graduate in Spring 2024.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5 bg-light">
        <div className="container-fluid text-center">
          <h2>Contact Me</h2>
          <p className="lead">If you'd like to get in touch, feel free to reach out!</p>
          <a href="mailto:alishabenjamin9@gmail.com" className="btn btn-outline-primary mt-3">Send an Email</a>
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
