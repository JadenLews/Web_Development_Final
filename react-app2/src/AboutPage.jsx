import './AboutPage.css'
import yuup from './yuup.jpeg';
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
            <img src={yuup} />
            <p>This is a paragraph about me and my skills and history, and blah blah bah I
                can put a lot here but I haven't yet thought what to put here blah blha blah 
                womp womp here  jdfsdfk. This is a paragraph about me and my skills and history, 
                and blah blah bah I can put a lot here but I haven't yet thought what 
                to put here blah blha blah womp womp here jdfsdfk I haven't yet thought what 
                to put here blah blha blah womp womp here jdfsdfk
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
                <h1>big skill1 big skill2 big skill3</h1>
                <h2>medium skill1 medium skill2 medium skill3 medium skill4</h2>
                <h3>small skill1 small skill2 small skill3 small skill4</h3>
                <h3>small skill5 small skill6 small skill7 small skill8</h3>
            </div>
            <div className='Me'>
                <h1>Me</h1>
            </div>
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
    );
  }