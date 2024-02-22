// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import LandingPage from './components/pages/LandingPage';
// import LoginPage from './components/pages/LoginPage';
// import RegisterPage from './components/pages/RegisterPage';
// import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
// import HomePage from './components/pages/HomePage';
// import Navbar from './components/pages/Navbar';
// import AcademyDetailPage from './components/pages/AcademyDetailPage'; // Import the AcademyDetailPage component

// import './App.css';

// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <Navbar /> {/* Navbar component can be displayed on every page */}
//                 <Switch>
//                     <Route exact path="/" component={LandingPage} />
//                     <Route path="/login" component={LoginPage} />
//                     <Route path="/register" component={RegisterPage} />
//                     <Route path="/forget-password" component={ForgetPasswordPage} />
//                     <Route path="/home" component={HomePage} />
//                     <Route path="/academy/:academyId" component={AcademyDetailPage} /> {/* Route for AcademyDetailPage with dynamic academyId parameter */}
//                 </Switch>
//                 <Footer />
//             </div>
//         </Router>
//     );
// }

// const Footer = () => {
//     return (
//         <p className="text-center" style={FooterStyle}>Designed & coded by <a href="https://github.com/Sriii31" target="_blank" rel="noopener noreferrer">Chaturangas</a></p>
//     );
// };

// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// };

// AcademyDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AcademyDetailPage = () => {
  const { academyId } = useParams();
  const [academy, setAcademy] = useState(null);

  useEffect(() => {
    // Fetch academy details using the academyId parameter
    // Replace this with your actual API call to fetch academy details
    // For demonstration purposes, I'm just setting a dummy academy object
    const fetchAcademyDetails = async () => {
      // Assuming your API endpoint is something like `/api/academies/:academyId`
      const response = await fetch(`/api/academies/${academyId}`);
      const data = await response.json();
      setAcademy(data); // Update the academy state with fetched data
    };

    fetchAcademyDetails();
  }, [academyId]);

  if (!academy) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  return (
    <div>
      <h2>Academy Details</h2>
      <p>Academy ID: {academy.id}</p>
      <p>Name: {academy.name}</p>
      <p>Description: {academy.description}</p>
      {/* Render other details of the academy */}
    </div>
  );
};

export default AcademyDetailPage;

