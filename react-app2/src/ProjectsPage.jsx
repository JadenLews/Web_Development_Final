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
            <a href="/calculator">
                <img src={one} alt="Gmail" className='square1'/>
            </a>
            <p className='proj1d'>Calculator</p>
            <img src={two} alt="Github"  className='square2'/>
            <p className='proj2d'>Proj</p>
            <img src={three} alt="Github"  className='square3'/>
            <p className='proj3d'>Proj</p>
            <img src={four} alt="Github"  className='square4'/>
            <p className='proj4d'>Proj</p>


    </div>
    );
  }