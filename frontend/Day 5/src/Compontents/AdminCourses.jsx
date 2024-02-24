import React from 'react'
// import '../Styles/Navbar.css'; 
// import '../Styles/Home.css'; 
// import '../Styles/BookEvents.css'; 
// import '../Styles/AdEvents.css'; 
// import logo1 from '../Assets/Logo1.png'
import './AdminCourses.css';
// import AddCourses from './AddCourses';

import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout, AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState} from 'react';
// import Footer from './Footer';
// import EventBox from './EventBox';
// import AdEventsBox from './AdEventsBox';
// import AdUpEventBox from './AdUpEventBox';
// import AdDelEventBox from './AdDelEvent';

function AdEvents() {

//   const[open1,setOpen] = useState('');
//   const[open3,setOpen3] = useState('');
  const[open2,setOpen2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
//   const [eventName, setEventName] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }
  const handleOpen2 = () => {
      setOpen2(true);
  }
  const handleOpen3 = () => {
      setOpen3(true);
  }

  const [events, setEvents] = useState([
    // Sample event data
    { id: 1, name: 'Chess Fundamentals', themeCost: 'Beginner', rating: '100 Activicties', description: 'Free' },
    { id: 1, name: 'Train your Tactics', themeCost: 'Beginner', rating: '100 Activicties', description: 'Free'},
    { id: 1, name: 'Mastering Piece Movements', themeCost: 'Beginner', rating: '100 Activicties', description: 'Free' },
    { id: 1, name: 'Mate in 1', themeCost: 'Beginner', rating: '100 Activicties', description: 'Free'},
    { id: 1, name: 'Mate in 2', themeCost: 'Beginner', rating: '100 Activicties', description: 'Free' },
    // Add more events as needed
  ]);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="be-overall">
     
        <div className='ad-h1'>
            <h2>Manage your Courses:</h2>
        </div>
        <form className="ad-search-form" onSubmit={handleSearchSubmit}>
        <input
          className="searc-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="searc-button" type="submit">
          <b>Search</b>
        </button>
      </form>
      <div className='ad-add'>
        <Link to="EditCourse2">
            <div className="ad-pointer" onClick={handleOpen2}>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Courses</h2>
      </div> 
      </Link>
      </div>    
        {/* {open2 && (<AddCourses />)} */}

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Events for Now...</h3>
        <p>Use this space for managing your events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid1'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <section className="pb-51">
        
            <div className="container text-center" >
            <div className="gallery-wrapper1">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item1 mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-1.png" alt="" />
                <h2 className="h4">{event.name}</h2>
                <p className="small text-muted font-italic"> {event.themeCost}</p>
                <p className="small text-muted font-italic"> {event.rating}</p>
                <p className="small text-muted font-italic">{event.description}</p>
                <button onClick={handleOpen3} className='ab-up'>Update</button><button onClick={() => handleOpen(event.name)} className='ab-del'>Delete</button>
                </div>

            </div>
            </div>
        </section> 
       </div>
       ))}
       {/* {open1 && (<AdDelEventBox eventName={eventName} />)} 
        {open3 && (<AdUpEventBox/>)} 
        {open2 && (<AdEventsBox />)}
             */}

        
        </div>
      <br></br>

       {/* <Footer/> */}
        </div>
       
        
     
  )
}

export default AdEvents