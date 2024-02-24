// AboutPage.jsx
import './About.css';
import user from './Chessboardanim.png'
const AboutPage = () => {
  return (
    <div className='top'>
      <div className='bod'>  
      <img src={user} className='abi' height={500} width={500} />
      </div>
      <div className="about-container">
      <h1>About Us</h1>
      <p>
     
      "Welcome to our online chess academy, where strategy meets opportunity! We're thrilled to have you join our community of passionate chess enthusiasts. Get ready to embark on an exciting journey of learning, improvement, and strategic mastery. Let's unlock the secrets of the game together and pave the way to becoming a formidable player. Welcome aboard!"
<br></br>

<b>Age of Entry :</b>The entry age of online training is 12 years and   The entry age of onboard – training is 6 Years
<br></br>

<b>Our Recommendation :</b>We recommend weekly 2 classes / Monthly 8 classes.
<br></br>
<b>Training Method :</b> Training through ETE website
<br></br>

<b>Students :</b> ETE having students across US, UK, NZ etc.,
<br></br>
  </p>
    </div>
    </div>
    
  );
};

export default AboutPage;
