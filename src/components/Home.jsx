import React from 'react';
import '../styles/home.scss';
import chatbot from '../assets/chatbot.png';
import {AiFillInstagram,AiFillFacebook, AiFillTwitterCircle, AiFillMail} from 'react-icons/ai';
const Home = () => {
  return (
      <>
        <div className="home" id='home'>
        <main>
        <h1>CodeNatix</h1>
        <p>Solution to all your Problems</p>
        </main>
      </div>
    <div className='home2' id=''>
      <img src={chatbot} alt="pic1" />
    <div>
        <p>
            We Provide Best Services for you.
            We are leading tech company to solve all the Problems of Users.
        </p>
    </div>
    </div>
    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>We are Professional Developers.We managing all kinds of Projects and
          give better advice to non-tech clients and solve all her/him Problems the he/she face
          in real life.We build many kind of Projects like E-Commerce Websites,Bloging Sites,Point of Sale
          Softwares.Our Goal is to Provide Better solution to our clients.
        </p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Available on</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillMail />
            <p>Gmail</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillFacebook />
            <p>Facebook</p>
          </div>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"0.1s"
          }}>
            <AiFillTwitterCircle />
            <p>Twitter</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;