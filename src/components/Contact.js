import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="text-center py-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="fs-5 mt-3">
          Got questions or want to collaborate? I’d love to hear from you!
        </p>
      </div>

      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4">
            <div class="card text-center shadow-sm h-100">
              <div class="card-body">
                <i class="fas fa-envelope fa-3x mb-3 text-secondary"></i>
                <h5 class="card-title">Email</h5>
                <p class="card-text">Feel free to send me an email anytime!</p>
                <Link to="mailto:deepasharma04@yahoo.com" class="btn btn-primary">
                  Drop an email
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center shadow-sm h-100">
              <div class="card-body">
                <i class="fab fa-github fa-3x mb-3 text-primary"></i>
                <h5 class="card-title">GitHub</h5>
                <p class="card-text">Check out my projects on GitHub.</p>
                <Link to="https://github.com/deeps4" target="_blank" class="btn btn-primary">
                  Check my code
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center shadow-sm h-100">
              <div class="card-body">
                <i class="fab fa-linkedin fa-3x mb-3 text-info"></i>
                <h5 class="card-title">LinkedIn</h5>
                <p class="card-text">Connect with me on LinkedIn.</p>
                <Link href="https://www.linkedin.com/in/deepa-sharma-001591233/" target="_blank" class="btn btn-primary">
                  Let's connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;