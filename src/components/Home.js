import profileImage from '../images/profile-image.jpeg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center p-4">

      <div className="mb-4">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead text-muted fst-italic">
          Crafting solutions, one line of code at a time.
        </p>
      </div>

      <div className="mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-circle shadow-lg"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
      </div>

      <div className="mb-4">
        <h2 className="fw-semibold text-primary">
          🚀 Let’s build something amazing together! 🌟
        </h2>
        <p className="text-muted">
          A junior full-stack developer ready to turn ideas into reality.
        </p>
      </div>

      <div>
        <Link
          to="/work"
          className="btn btn-primary btn-lg mx-2 mb-3"
          role="button"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="btn btn-outline-secondary btn-lg mx-2 mb-3"
          role="button"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

export default Home;