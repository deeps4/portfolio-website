import githubImg from '../images/github.svg';
import linkedinImg from '../images/linkedin.svg';
import twitterImg from '../images/twitter.svg';


const Footer = () => {
    return <footer className='py-4 bg-dark'>
        <div className='container d-flex flex-column align-items-center text-white'>
            <p className='font-weight-bold'>Find me on</p>
            <div className="d-flex justify-content-center gap-2">
                <a href="https://github.com/deeps4" target='_blank'>
                    <img width={30} src={githubImg} alt="Github" />
                </a>
                <a href="#" target='_blank'>
                    <img width={30} src={twitterImg} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/deepa-sharma-001591233/" target='_blank'>
                    <img width={30} src={linkedinImg} alt="LinkedIn" />
                </a>
            </div>
        </div>
    </footer>

}

export default Footer;