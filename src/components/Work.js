import meetAppImage from '../images/meet-app-image.png';
import myflixReactAppImage from '../images/myflix-react-image.png';
import myflixAngularAppImage from '../images/myflix-angular-image.png';
import chatterBoxAppImage from '../images/chatter-box-image.png';
import movieApiImage from '../images/movie-api-image.png';

const Work = () => {

  const projects = [
    {
      id: 1,
      image: meetAppImage,
      title: 'Meet App',
      description: 'Meet App is a serverless, progressive web application (PWA) built with React. It connects to the Google Calendar API, allowing users to discover and filter upcoming events',
      github: 'https://github.com/deeps4/meet',
      demo: 'https://deeps4.github.io/meet/'
    },
    {
      id: 2,
      image: myflixReactAppImage,
      title: 'MyFlix App - React',
      description: 'This app provides a seamless experience to explore movies, manage user accounts, and curate personalized favorite movie lists. This application is implemented using React library.',
      github: 'https://github.com/deeps4/myFlix-client',
      demo: 'https://deepa-myflixapp.netlify.app/'
    },
    {
      id: 3,
      image: movieApiImage,
      title: 'MyFlix API Server',
      description: 'The Movie API is a RESTful API designed for movie lovers. It provides detailed information about movies, genres, and directors. Users can register, update their profiles, and manage their list of favorite movies.',
      github: 'https://github.com/deeps4/movie_api',
      demo: 'https://github.com/deeps4/movie_api'
    },
    {
      id: 4,
      image: chatterBoxAppImage,
      title: 'Chatter Box',
      description: 'Chatter-Box is a React Native chat application that allows users to communicate seamlessly through text, images, and shared locations.',
      github: 'https://github.com/deeps4/chatter-box',
      demo: 'https://github.com/deeps4/chatter-box',
      imageObjFit: 'contain'
    },
    {
      id: 5,
      image: myflixAngularAppImage,
      title: 'MyFlix App - Angular',
      description: 'This app provides a seamless experience to explore movies, manage user accounts, and curate personalized favorite movie lists. This application is implemented using Angular framework',
      github: 'https://github.com/deeps4/myFlix-client',
      demo: 'https://deepa-myflixapp.netlify.app/'
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold display-4 text-primary">My Work</h1>
      <p className="text-center mb-4 fs-5 text-muted">
        Take a look at some of my exciting projects that showcase my skills and creativity!
      </p>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card h-100 border-0 shadow-lg rounded-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <img
                  src={project.image}
                  className="card-img-top rounded-top mt-2"
                  alt={project.title}
                  style={{ height: '200px', objectFit: project.imageObjFit || 'cover', backgroundColor: '#f0ffff' }}
                />
              </a>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold text-primary">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {project.title}
                  </a>
                </h5>
                <p className="card-text text-muted flex-grow-1">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                >
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;