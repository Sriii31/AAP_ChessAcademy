import React from 'react'
import './Courses.css';
// import '../Styles/Navbar.css'; 
// import '../Styles/Home.css'; 
// import '../Styles/BookEvents.css'; 
// import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState} from 'react';
// import Footer from './Footer';
// import EventBox from './EventBox';
function BookEvents() {

  const[open1,setOpen] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }

  const [events, ] = useState([
    // Sample event data
    { id: 1, name: 'Fundamentals of chess', level: 'Beginner', rating: '100 Activities', description: 'Free' },
    { id: 1, name: 'Train your Tactics', level: 'Beginner', rating: '148 Activities', description: 'Free' },
    { id: 1, name: 'Mastering Pieces', level: 'Beginner', rating: '60 Activities', description: 'Free' },
    { id: 1, name: 'Mate in 2', level: 'Beginner', rating: '100 Activities', description: 'Free' },
    { id: 1, name: 'Mate in 1', level: 'Beginner', rating: '100 Activities', description: 'Free' },
    
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
        <h1 className='sed'><center>COURSES</center></h1>
      
        <div className='be-h1'>
            <h2>Select your course</h2>
        </div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form>

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://t3.ftcdn.net/jpg/07/21/14/42/240_F_721144287_Ound3g4UEGLRb6bRrR8mlYV34UqzdxxY.jpg"></img>
        <h3>Oops! No Upcoming Events for Now...</h3>
        <p>Watch this space for upcoming events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid'>
        {filteredEvents.map(event => (
          <div key={event.id} onClick={() => handleOpen(event.name)}>
            <section className="pb-5">
        
            <div className="container text-center" >
            <div className="gallery-wrapper">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://t3.ftcdn.net/jpg/07/21/14/42/240_F_721144287_Ound3g4UEGLRb6bRrR8mlYV34UqzdxxY.jpg" alt="" />
                
                <h2 className="h4">{event.name}</h2>
                <p className="small text-muted font-italic"> {event.level}</p>
                <p className="small text-muted font-italic"> {event.rating}</p>
                <b><p className="small text-muted font-italic"> {event.description}</p></b>
                <Link to="/Form"><button className='vj'>Enroll</button></Link>
                </div>

            </div>
            </div>
        </section> 
       </div>
       ))}
        {/* {open1 && (<EventBox eventName={eventName} />)}  */}
            

        
        </div>
      <br></br>

       {/* <Footer/> */}
        </div>
       
        
    //   </div>
  )
}

export default BookEvents