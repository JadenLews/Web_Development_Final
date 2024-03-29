import './ProjectPage.css'
import one from './square1.png';
import two from './square2.jpeg';
import three from './square3.jpeg';
import four from './square4.jpeg';




export default function ProjectsPage() {
    return (
        <div>
            <div className='centerr'></div>
            <div className="Backp"></div>
            <div className="BackTopp"></div>
            <div className="Linep"></div>
            <div className='project'>
                <h2>Projects</h2>
                <h1>Check Out My Creations</h1>
            </div>
            <img src={one} alt="Github"  className='square1'/>
            <img src={two} alt="Github"  className='square2'/>
            <img src={three} alt="Github"  className='square3'/>
            <img src={four} alt="Github"  className='square4'/>


    </div>
    );
  }