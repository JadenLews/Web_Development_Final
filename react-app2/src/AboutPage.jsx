import './AboutPage.css'
import Myim from './Myim.jpg';
export default function AboutPage() {
    return (
        <div className="AboutPage">
            <div className='centerr'></div>
            <div className="AboutBack"></div>
            <div className="AboutBackTop"></div>
            <div className="AboutLine"></div>
            <p>‎</p>
            <p>‎</p>
            <p>‎</p>
            <div className='imagetext'>
            <img src={Myim} />
            <p>I am an aspiring software engineer with an interest in computer science and data science.
                Currently, I am working towards my B.S. in Computer Science at Clark University, class of 2026.
                My primary interests are in artificial intelligence, machine learning, and data analysis. My most 
                recent project involved ****. As a consistent high honors Dean's List student with a 3.86 GPA, my 
                academic journey reflects my passion and dedication to this field.
                </p>
            </div>
            <div className='AboutTextTop'>
                <h1>A bit about me.</h1>
            </div>
            <div className='backbottom'></div>
            <div className='Skills'>
                <h1>Skills</h1>
            </div>
            <div className='skillList'>
                <h1>Java • Python • Research</h1>
                <h2>Math • SQL • Database • HTML • Django • Collaboration</h2>
                <h3>Back-End • Front-End • Statistics • LATEX • MatPlotLibrary</h3>
                <h3>Project Management • Organization</h3>
            </div>
            <div className='Me'>
                <h1>Me</h1>
            </div>
            <div className='okl'>
            <div className='line1s'>
                <div className='line1'></div>
                <p><strong>N A M E :</strong> Jaden Lewis</p>
            </div>
            <div className='line2s'>
                <div className='line2'></div>
                <p><strong>P R O N O U N S :</strong> He/Him/His</p>
            </div>
            <div className='line3s'>
                <div className='line3'></div>
                <p><strong>S C H O O L :</strong> Clark University</p>
            </div>
            <div className='line4s'>
                <div className='line4'></div>
                <p><strong>A G E :</strong> 19 Years</p>
            </div>
            <div className='line5s'>
                <div className='line5'></div>
                <p><strong>H O M E T O W N :</strong> Blue Hill,ME</p>
            </div>
            <div className='line6s'>
                <div className='line6'></div>
                <p><strong>M A J O R:</strong> Computer Science</p>
            </div>
            </div>

        </div>
    );
  }