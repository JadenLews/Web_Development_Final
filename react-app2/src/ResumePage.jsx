import './ResumePage.css'
import college from './college.webp';

export default function ResumePage() {
    return (
        <div className="ResumePage">
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
                <p>This is gonna be a paragraph about my time at clark
                    i think and how i did a good job here blha blah blah
                    blah blah
                </p>
            </div>
            <div className='Dotline'></div>
            <span class="clarkdot"></span>
            <img src={college} alt="college" className='college'/>
            <div className='clark'>
                <h3>Clark University</h3>
                <h2>GPA: 0.01</h2>
                <div className='list1clark1'>
                    <ul>
                        <li>List of classes i took</li>
                        <li>List of classes i took</li>
                        <li>List of classes i took</li>
                    </ul>
                </div>
                <div className='list1clark2'>
                    <ul>
                        <li>List of classes i took</li>
                        <li>List of classes i took</li>
                        <li>List of classes i took</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }