// import React from 'react'
import './Footer.css'
import { FaTwitter,FaYoutube,FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='FooterLogo'>
            <a href='https://x.com/Sri_31_?t=iP-ERe4EgpFU7pr59fJsCw&s=08'><FaTwitter/></a>
            <a href='https://youtube.com/@ChessBaseIndiachannel?si=TQ5ujhE-qP4UJFLm'><FaYoutube/></a>
            <a href='https://www.instagram.com/sri_._31?igsh=dDVxZDI0dzhuNGVw'><FaInstagram/></a>
            <a href='https://www.facebook.com/profile.php?id=100031176306926&mibextid=ZbWKwL'><FaFacebook/></a>
            <a href='https://www.linkedin.com/in/sripathi-m-8b1703258'><FaLinkedin/></a>
        </div>
        <div className='FooterContent'>
            <span className='footeritems'>Bookings</span>
            <span className='footeritems'>Privacy Statements</span>
            <span className='footeritems'>Terms and Conditions</span>
        </div>
        <p className='rights'>This website uses cookies. By continuing to browse this site you are agreeing to our use of cookies.</p>
    </div>
  )
}

export default Footer

// // import React from 'react'
// import './Footer.css'
// import { FaTwitter,FaYoutube,FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa'


// const  Footer= () => {
//   return (
//     <div className='Footer'>
//         <div className='FooterLogo'>
//             <a href=''><FaTwitter/></a>
//             <a href=''><FaYoutube/></a>
//             <a href=''><FaInstagram/></a>
//             <a href=''><FaFacebook/></a>
//             <a href=''><FaLinkedin/></a>
//         </div>
//         <div className='FooterContent'>
//             <span className='footeritems'>Bookings</span>
//             <span className='footeritems'>Privacy Statements</span>
//             <span className='footeritems'>Terms and Conditions</span>
//         </div>
//         <p className='rights'>By using this site you agree that we can place cookies on your device. See Privacy Statement for details.
// © 2024 Festivease. All Rights Reserved.</p>
//     </div>
//   )
// }

// export default Footer