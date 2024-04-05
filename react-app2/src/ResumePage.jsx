import './ResumePage.css'
import college from './college.webp';
import work from './work.png';


export default function ResumePage() {
    return (
        <div>
            <div className="ResumeBack"></div>
            <div className="AboutBackTop"></div>
            <div className="AboutLine"></div>
            <div className='ResumeTextTop'>
                <h1>My Resume</h1>
            </div>
            <div className='ResumeTextSecond'>
            <h1>Work Experience And Education</h1>
            </div>
            <div className='LeftClark'>
                <h1>Bachelor Degree</h1>
                <h3>September 2022 - Current</h3>
                <p>I am currently studying at Clark University, where I'm pursuing courses in computer science, 
                    data science, and mathematics. I've taken an array of CS classes that have challenged me and honed 
                    my problem-solving skills. I have consistently achieved high honors throughout my time here.
                </p>
            </div>
            <div className='Dotline'></div>
            <span class="clarkdot"></span>
            <img src={college} alt="college" className='college'/>
            <div className='clark'>
                <h3>Clark University</h3>
                <h2>GPA: 3.86</h2>
                <div className='list1clark1'>
                    <p className='first1'>Algorithms • Database Management & System Design</p>
                    <p className='first2'>Intro to Data Science • Data Structures</p>
                    <p className='first3'>Web Development • Distributed Systems</p>
                    <p className='first4'>Linear Algebra • Discrete Math • Honors Calculus</p>
                    <p className='first5'>Intro to Computer Science</p>
                </div>
            </div>
            <span class="workdot1"></span>
            <img src={work} alt="work" className='work1'/>
            <div className='LeftPug'>
                <h1>Pugnuts Gelato</h1>
                <h3>3 Years</h3>
                <p>This is gonna be about my time on the job and the skills that 
                    I have gained from this experience here
                </p>
            </div>
            <div className='pugwork'>
                <div className='listpug'>
                <h2>Skills</h2>
                    <p className='first1p'>Skills from my job</p>
                    <p className='first2p'>Skills from my job</p>
                </div>
            </div>
        </div>
    );
  }