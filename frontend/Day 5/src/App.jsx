
import Login from "./Compontents/Login";
import Signup from "./Compontents/Signup";
import Home from "./Compontents/Home";
import ClassSchedule from "./Compontents/ClassSchedule";
import About from "./Compontents/About";
import Levels from "./Compontents/Levels";
import Contact from "./Compontents/Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slider from "./Compontents/Lslider";
import Location from "./Compontents/Location";
import FirstPage from "./Compontents/FirstPage";
import './App.css';
//import Joinus from "./Compontents/Joinus";
import Account from "./Compontents/Account";
import Adminhome from "./Compontents/Adminhome";
import AddStudent from "./Compontents/AddStudent";
import EditCourse2 from "./Compontents/EditCourse2";
import Courses from "./Compontents/Courses";
import AdminCourses from "./Compontents/AdminCourses";
import Form from "./Compontents/Form";
import AdminLogin from "./Compontents/AdminLogin";
import AdminSignup from "./Compontents/AdminSignup";
import EditAcademy from "./Compontents/EditAcademy";
import AdminAcademy from "./Compontents/AdminAcademy";
import Academy from "./Compontents/Academy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/Login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/home" exact component={Home} />
        <Route path="/class" exact component={ClassSchedule} />
        <Route path="/about" exact component={About} />
        <Route path="/level" exact component={Levels} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/slider" exact component={Slider} />
        <Route path="/location" exact component={Location} />
        {/*<Route path="/joinus" exact component={Joinus} />*/}
        <Route path="/account" exact component={Account} />
        {/* <Route path="/feed" exact component={Feedback} /> */}
        <Route path="/adminhome" exact component={Adminhome} />
        <Route path="/EditCourse2" exact component={EditCourse2} />
        <Route path="/AddStudent" exact component={AddStudent} />
        <Route path="/Form" exact component={Form} />
        <Route path="/AdminCourses" exact component={AdminCourses} />
        <Route path="/Courses" exact component={Courses} />
        <Route path="/AdminAcademy" exact component={AdminAcademy} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/Academy" exact component={Academy} />
        <Route path="/AdminSignup" exact component={AdminSignup} />
        <Route path="/EditAcademy" exact component={EditAcademy} />
      </Switch>
    </Router>
  );
}

export default App;


//   import Login from "./Compontents/Login"
//  import Signup from "./Compontents/Signup"
//  import Home from "./Compontents/Home"
//  import ClassSchedule from "./Compontents/ClassSchedule"
//  import About from "./Compontents/About"
//  import Levels from "./Compontents/Levels"
//  import Contact from "./Compontents/Contact"
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//  import Slider from "./Compontents/Lslider"
//  import Location from "./Compontents/Location"

// import FirstPage from "./Compontents/FirstPage";

// import './App.css'
// import Joinus from "./Compontents/Joinus"
// import Feedback from "./Compontents/Feedback"
// import Account from "./Compontents/Account"
// import Adminhome from "./Compontents/Adminhome"
// import AddStudent from "./Compontents/AddStudent"
// import EditCourse2 from "./Compontents/EditCourse2"
// import Courses from "./Compontents/Courses"
// import AdminCourses from "./Compontents/AdminCourses"
// import Form from "./Compontents/Form"
// import AdminLogin from "./Compontents/AdminLogin"
// import AdminSignup from "./Compontents/AdminSignup"
// import EditAcademy from "./Compontents/EditAcademy"
// import AdminAcademy from "./Compontents/AdminAcademy"
// // import { FirstPage } from "@mui/icons-material"
// // import AdminCourses from "./Compontents/AdminCourses"
// // import AddCourses from "./Compontents/AddCourses"
// import Academy from "./Compontents/Academy"
// // import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// function App() {
  
//   return (
//     <>
//       <Router>
//           <Switch>
//               <Route path="/" exact component={FirstPage} />
//               <Route path="/Login" exact component={Login} />
//               <Route path="/signup" exact component={Signup} />
//               <Route path="/home" exact component={Home} />
//               <Route path="/class" exact component={ClassSchedule} />
//               <Route path="/about" exact component={About} />
//               <Route path="/level" exact component={Levels} />
//               <Route path="/contact" exact component={Contact} />
//               <Route path="/slider" exact component={Slider} />
//               <Route path="/location" exact component={Location} />
//               <Route path="/joinus" exact component={Joinus} />
//               <Route path="/account" exact component={Account} />
//               <Route path="/feed" exact component={Feedback} />
//               <Route path="/adminhome" exact component={Adminhome} />
//             <Route path="/EditCourse2" exact component={EditCourse2} />
//             <Route path="/AddStudent" exact component={AddStudent} />
//             <Route path="/Form" exact component={Form} />
//             <Route path="/AdminCourses" exact component={AdminCourses} />
//             <Route path="/Courses" exact component={Courses} />
//             <Route path="/AdminAcademy" exact component={AdminAcademy} />
//             <Route path="/AdminLogin" exact component={AdminLogin} />
//             <Route path="/Academy" exact component={Academy} />
//             <Route path="/AdminSignup" exact component={AdminSignup} />
//             <Route path="/EditAcademy" exact component={EditAcademy} />

//           </Switch>
//       </Router> 
       
//          {/* <Home></Home>  */}
//         {/* <ClassSchedule></ClassSchedule>
//         <About> </About>
//         <Levels></Levels>
//         <Slider/> 
//         <Contact></Contact>
      

//         <Location></Location> */} 
//         {/* <Profile></Profile> */}
//         {/* <Signinpage></Signinpage> */}
//         {/* <Signup></Signup> */}
//         {/* <Login></Login> */}
//         {/* <Joinus></Joinus> */}
//         {/* <Feedback></Feedback> */}
//         {/* <App></App> */}
//         {/* <Account></Account> */}
//         {/* <Adminhome></Adminhome> */}
//         {/* <EditCourse2></EditCourse2> */}
//         {/* <AddStudent></AddStudent> */}
//         {/* <EditCourse></EditCourse> */}
//         {/* <Imay></Imay> */}
//          {/* <Form></Form> */}
//         {/* <AdminCourses></AdminCourses> */}
//         {/* <AddCourses></AddCourses> */}
//         {/* <AdminAcademy></AdminAcademy> */}
//         {/* <EditAcademy></EditAcademy> */}
//         {/* <FirstPage></FirstPage> */}
//         {/* <AddStudent></AddStudent> */}
//         {/* <Academy></Academy> */}
         
//     </>
//   )
// }

// export default App;
