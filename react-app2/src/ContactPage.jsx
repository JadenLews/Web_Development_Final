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
                <img src={git} alt="Github"  />
                <h3>Check Out My Github</h3>
            </div>
            <div className='email'>
            <img src={mail} alt="Github"  />
                <h3>Email Me At </h3>
                <p>lewisjaden19@gmail.com</p>
            </div>
            <div className='linkedinl'>
                <img src={linked} alt="Github"  />
                <h3>Add Me On Linkedin</h3>
            </div>
    </div>
    );
  }