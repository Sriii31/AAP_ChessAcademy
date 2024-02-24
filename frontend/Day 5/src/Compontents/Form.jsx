import  { useState } from 'react';
import {Button,TextField,Select,MenuItem,FormControl,InputLabel,} from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';

const Bookevent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [Address, setAddress] = useState('');
  const [qu, setQu] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [eventName, setEventName] = useState('');
  const [budget, setBudget] = useState('');
  const [eventType, setCourse] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleQuChange = (event) => {
    setQu(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setCourse(event.target.value);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Add your logic for form submission here
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed. Please fill in all required fields.");
    }
  };


  return (
    <>
      <div className='b-e-b-1'>
        <center>
          <div className="book-1">
            <h1 className='h1-book-event'>Form</h1>

            <TextField
              label='First name'
              sx={{ width: '300px' }}
              value={firstName}
              required
               onChange={handleFirstNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="Last name"
              sx={{ width: '300px' }}
              required
              value={lastName}
              onChange={handleLastNameChange}
            />

            <br></br><br></br>

            <TextField
              label="E-mail"
              sx={{ width: '300px' }}
              required
              value={email}
              onChange={handleEmailChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="Father Name"
              sx={{ width: '300px' }}
              required
              value={fatherName}
              onChange={handleFatherNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br>
            <br></br>

            <TextField
              id="outlined-textarea"
              label="Address"
              multiline
              required
              sx={{
                width: '300px',
              }}
              value={Address}
              onChange={handleAddressChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="Mobile Number"
              sx={{ width: '300px' }}
              required
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>

            <TextField
              label="Age"
              sx={{ width: '300px' }}
              value={eventName}
              onChange={handleEventNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="budget-label">Level</InputLabel>
              <Select
                labelId="budget-label"
                id="demo-simple-select"
                value={budget}
                label="Budget"
                onChange={handleBudgetChange}
              >
                <MenuItem value="" disabled>
                  Level
                </MenuItem>
                <MenuItem value={10}>Beginner</MenuItem>
                <MenuItem value={20}>Intermediate</MenuItem>
                <MenuItem value={30}>Advance</MenuItem>
                <MenuItem value={30}>Expert</MenuItem>
              </Select>
            </FormControl>

            <br></br>
            <br></br>

            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="event-type-label">Gender</InputLabel>
              <Select
                labelId="event-type-label"
                id="demo-simple-select"
                value={eventType}
                label="Type of Event"
                onChange={handleEventTypeChange}
                sx={{
                  width:"650px"
                }}
              >
                <MenuItem value="" disabled>
                  Gender
                </MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                {/* <MenuItem value={30}>Train your Tactics</MenuItem>
                <MenuItem value={30}>Mate in 1</MenuItem>
                <MenuItem value={30}>Mate in 2</MenuItem> */}
              </Select>
            </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>

            {/* <TextField
              label="Is contains any game in this Event(YES?NO)"
              sx={{
                width:"650px"
              }}
            /> */}


            {/* <TextField
              label="Is any Food arrange in this Event(YES?NO)"
              sx={{
                width:"650px"
              }}
            /> */}

           

            <TextField
              id="outlined-textarea"
              label="Add Queries "
              multiline
              required
              sx={{
                width:"650px",
              
              }}
              value={qu}
              onChange={handleQuChange}
            />

            <br></br><br></br>

            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={handleSubmit}
            >
               <Link to="Courses">Submit</Link>
            </Button>
          </div>
        </center>
      </div>
    </>
  );
};

export default Bookevent;