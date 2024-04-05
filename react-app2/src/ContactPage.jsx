import git from './git.png';
import linked from './linky.png';
import mail from './mail.webp';
import './ContactPage.css'
export default function ContactPage() {
    return (
        <div>
            <div className='centerr'></div>
            <div className="Back"></div>
            <div className="BackTop"></div>
            <div className="Line"></div>
            <div className='contact'>
                <h2>Contact</h2>
                <h1>I'd Love To Connect With You.</h1>
            </div>
            <div className='github'>
            <a href="https://github.com/JadenLews">
                <img src={git} alt="Gmail" />
            </a>
                <h3>Check Out My Github</h3>
            </div>
            <div className='email'>
            <a href="mailto:lewisjaden19@gmail.com">
                <img src={mail} alt="Gmail" />
            </a>
                <h3>Email Me At </h3>
                <p>lewisjaden19@gmail.com</p>
            </div>
            <div className='linkedinl'>
            <a href="https://www.linkedin.com/in/jaden-lewis-5379b7236/">
                <img src={linked} alt="Gmail" />
            </a>
                <h3>Add Me On Linkedin</h3>
            </div>
    </div>
    );
  }