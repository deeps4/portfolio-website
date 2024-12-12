import githubImg from '../images/github.svg';
import linkedinImg from '../images/linkedin.svg';
import twitterImg from '../images/twitter.svg';

const socialHandlers = [
    { label: 'Github', url: 'https://github.com/deeps4', icon: 'fa-brands fa-github' },
    { label: 'Twitter', url: 'https://x.com/deepa_sharma_04', icon: 'fa-brands fa-x-twitter' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/deepa-sharma-001591233/', icon: 'fa-brands fa-linkedin' },
]

const Footer = () => {


    return <footer className='py-4 bg-dark'>
        <div className='container d-flex flex-column align-items-center text-white'>
            <p className='font-weight-bold'>Find me on</p>
            <div className="d-flex justify-content-center gap-2">
                {
                    socialHandlers.map((item) => {
                        return <a key={item.label} href={item.url} target='_blank'>
                            <i className={`${item.icon} text-white fs-2 mx-3`} alt={item.label} />
                        </a>
                    })
                }
            </div>
        </div>
    </footer>

}

export default Footer;