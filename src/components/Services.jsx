import React from 'react'
import mirza from '../assets/provider/mirza.png';
import safi from '../assets/provider/safi.png';
import mam from '../assets/provider/mam.png';
import hamid from '../assets/provider/hamid.png';
import haram from '../assets/provider/haram.png';
import salman from '../assets/provider/salman.png';
import umar from '../assets/provider/umar.png';
import faseeh from '../assets/provider/faseeh.png'
import "../styles/provider.scss";
const Services = () => {
  return (
    <>    
     <div className='shape'>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={hamid} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Hamid Ashraf</h3>
            <h3>Software Engineer</h3>
          </div>
          <div className="body">
          Working as Front-end Enginer & Backend Engineer with 2 years of experience.
          Cloud Engineer,MERN,MEAN,Android,IOS Expert.
          </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={salman} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
          <h3>Salman Saif</h3>
            <h3>.Net Developer</h3>
          </div>
          <div className="body">
          Working as front-end,backend developer with 3 years of experience.
            Dot-net Developer.
          </div>
          <div className="btn">
            <button className='setbtn'><a href="/#about">View More</a></button>
          </div>
          </div>
          
    </div>
    </div>
    </div>
    <div className='shape'>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={mam} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Hoor fatima</h3>
            <h3>Software Engineer</h3>
          </div>
          <div className="body">
          Working as Software Designer & technical Writter with 10 years of experience.
            Figma,Adobe,Office Expert.
          </div> 
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={haram} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Haram Sajjad</h3>
            <h3>Front-End Engineer</h3>
          </div>
          <div className="body">
          Working as front-end developer with 1 years of experience.
            React-Js,Angular-JS,Vue-JS Expert.
          </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
          
    </div>
    </div>
    </div>

    <div className='shape'>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={mirza} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Mirza Sumair</h3>
            <h3>Front-end Developer</h3>
          </div>
          <div className="body">
          Working as Front-end Enginer with 5 years of experience.
            Angular-JS,Vue-Js,React-JS expert.
          </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={safi} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Safi</h3>
            <h3>E-Commerce</h3>
          </div>
          <div className="body">
          Working as E-Commerce Virtual assistant with 3 years of experience.
            Etsy,Shopify,Ali-Baba.
          </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    </div>
    <div className='shape'>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={umar} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Umar Raza</h3>
            <h3>Game Developer</h3>
          </div>
          <div className="body">
          Working as Game Developer & Designer with 3 years of experience.
            Unity-3D,Unreal-Engine-5.          
            </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    <div className='wraper'>
    <div className='main-div'>
          <div className='img-container'>
            <img src={faseeh} alt="" />
          </div>
          <div className="card-content">
          <div className='title'>
            <h3>Mian Faseeh-ur-Rehman</h3>
            <h3>Game Developer</h3>
          </div>
          <div className="body">
          Working as Game Developer & Designer with 3 years of experience.
            Unity-3D,Unreal-Engine-5.
          </div>
          <div className="btn">
            <button><a href="/#about">View More</a></button>
          </div>
          </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Services;