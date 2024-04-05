import './App.css'
import git from './git.png';
import linked from './linked.png';
import mail from './mail.webp';
// HomePage.jsx

export default function HomePage() {
    return (
        <div>
            <div className='Image'></div>
            <div class="HomeInfo">
                <h1>Jaden Lewis</h1>
                <h3>Computer Science | Mathematics | Data Science</h3>
            </div>
                <div className='git'>
            <a href="https://github.com/JadenLews">
                <img src={git} alt="Github"  />
            </a>
            </div>
            <div className='linkedin'>
            <a href="https://www.linkedin.com/in/jaden-lewis-5379b7236/">
                <img src={linked} alt="Linkedin"  />
            </a>
            </div>
            <div className='mail'>
            <a href="mailto:lewisjaden19@gmail.com">
                <img src={mail} alt="Gmail" />
            </a>
            </div>
            <div className='backgroundImagePage'></div>
    </div>
    );
  }