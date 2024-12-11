import { Link } from 'react-router';
import profileImage from '../images/profile-image.jpeg'

const skills = [
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'Git/GitHub', icon: 'fab fa-git-alt' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
]

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 text-center my-5">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle shadow-lg"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-8">
          <div className="mb-5 text-center">
            <h1 className="display-4 fw-bold">About Me</h1>
            <p className="text-muted lead">My journey from teaching to technology 🚀</p>
          </div>
          <p className="fs-5">
            I'm a passionate Junior full-stack developer who began the professional journey as a <i>school teacher</i>.
            Switching careers has been an exciting adventure, fueled by my love for learning and creativity.
          </p>

          <p className="fs-5">
            My developer journey started with a comprehensive program at <strong>CareerFoundry</strong>, where I gained
            hands-on experience in web development technologies like JavaScript, TypeScript, React, Angular, NodeJS,
            MongoDB, and more.
            I also developed essential non-technical skills such as problem-solving, time management, and collaboration.
          </p>

          <p className="fs-5">
            Beyond coding, I have a creative side! 🎨 I love DIY projects, crafting, and art, and I run a YouTube
            channel <Link className='text-dark' href="https://www.youtube.com/@creativedeck" target='_blank'>@creativedeck</Link> where I share my projects with a growing community. These hobbies keep my creative energy alive
            and inspire me in my work as a developer.
          </p>

          <div className="my-5">
            <h2 className="fw-bold text-center text-decoration-underline mb-4">My Technical Toolkit</h2>
            <div className="row g-4">
              {skills.map((skill, index) => (
                <div className="col-md-3 col-sm-4 col-6 text-center" key={index}>
                  <div
                    className="card shadow-sm border-0 p-3"
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#f8f9fa',
                    }}
                  >
                    <i
                      className={`${skill.icon} text-primary mb-2`}
                      style={{ fontSize: '2rem' }}
                    ></i>
                    <h6 className="text-dark">{skill.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="fw-bold mb-3">What's Next? 🌟</h2>
            <p className="fs-5">
              I'm excited to keep growing, learning, and contributing as a full-stack developer. While I may not have
              extensive industry experience yet,
              I bring a strong work ethic, adaptability, and a passion for building impactful solutions.
            </p>
            <p className="fs-5">
              If you'd like to collaborate or just say hi, feel free to <Link to="/contact" className="text-dark">reach
                out</Link>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;