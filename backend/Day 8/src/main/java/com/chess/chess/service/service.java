// package com.chess.chess.service;
// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;

// import com.chess.chess.model.academy;
// import com.chess.chess.model.course;
// import com.chess.chess.model.model;
// import com.chess.chess.model.student;
// import com.chess.chess.repository.academyrepo;
// import com.chess.chess.repository.courserepo;
// import com.chess.chess.repository.repository;
// import com.chess.chess.repository.studentrepo;

// @org.springframework.stereotype.Service
// public class service {
//   @Autowired
//   private repository r;
//   @Autowired
//   private studentrepo sr;
//   @Autowired
//   private academyrepo ar;
//   @Autowired
//   private courserepo cr;

//   //post
//   public boolean createBook(model m) {
//     return r.save(m) != null? true:false;
// }
// public boolean createacademy(academy ac) {
//   return ar.save(ac) != null? true:false;
// }
// public String createstudent(student sc ) {
//   return sr.save(sc) != null? "student added":"student not added";
// }public boolean createcourse(course c) {
//   return cr.save(c) != null? true:false;
// }
  


//   //get
//    public List<model> getAllBookings(){
//     return r.findAll();
//    }
//    public List<academy> getAllacademy(){
//     return ar.findAll();
//    }

//    public List<student> getAllstudent(){
//     return sr.findAll();
//    }

//    public List<course> getAllcourse(){
//     return cr.findAll();
//    }



//    //delete
   
   
// //update
// public academy updateAcademy(String email, academy updatedAcademy) {
//   academy existingAcademy = (academy)ar.findByEmail(email);
//           // .orElseThrow(() -> new RuntimeException("Academy not found with id: " + email));

//   // Update the existing academy attributes with the provided values
//   if(existingAcademy!=null){

//     existingAcademy.setName(updatedAcademy.getName());
//     existingAcademy.setMobile(updatedAcademy.getMobile());
//     existingAcademy.setImageurl(updatedAcademy.getImageurl());
//     existingAcademy.setEmail(updatedAcademy.getEmail());
//     existingAcademy.setLocation(updatedAcademy.getLocation());
//     existingAcademy.setDescription(updatedAcademy.getDescription());
//     return ar.save(existingAcademy);
//   }
//   else{
//     return null;
//   }

//   // Save the updated academy record
// }

// public student updateStudent(String email, student updatedStudent) {
//   student existingStudent = sr.findByEmail(email);
//           // .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

//   // Update the existing student attributes with the provided values
//   if(existingStudent!=null){

//     existingStudent.setFirstname(updatedStudent.getFirstname());
//     existingStudent.setLastname(updatedStudent.getLastname());
//     existingStudent.setFathersname(updatedStudent.getFathersname());
//     existingStudent.setMothersname(updatedStudent.getMothersname());
//     existingStudent.setMobile(updatedStudent.getMobile());
//     existingStudent.setAlternatemobile(updatedStudent.getAlternatemobile());
//     existingStudent.setEmail(updatedStudent.getEmail());
//     existingStudent.setAge(updatedStudent.getAge());
//     existingStudent.setGender(updatedStudent.getGender());
  
//     // Save the updated student record
//     return sr.save(existingStudent);
//   }
//   else{
//     return null;
//   }
// }

// //delete

// }



package com.chess.chess.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.chess.chess.model.academy;
import com.chess.chess.model.course;
import com.chess.chess.model.model;
import com.chess.chess.model.student;
import com.chess.chess.repository.academyrepo;
import com.chess.chess.repository.courserepo;
import com.chess.chess.repository.repository;
import com.chess.chess.repository.studentrepo;

@Service
public class service {
  
  @Autowired
  private repository repository;
  
  @Autowired
  private studentrepo studentRepo;
  
  @Autowired
  private academyrepo academyRepo;
  
  @Autowired
  private courserepo courseRepo;
  
  // Post methods
  public boolean createBook(model m) {
    return repository.save(m) != null;
  }
  
  public boolean createacademy(academy ac) {
    return academyRepo.save(ac) != null ? true:false;
  }
  
  public String createstudent(student sc) {
    return studentRepo.save(sc) != null ? "Student added" : "Student not added";
  }
  
  public boolean createcourse(course c) {
    return courseRepo.save(c) != null;
  }
  
  // Get methods
  public List<model> getAllBookings() {
    return repository.findAll();
  }
  
  public List<academy> getAllacademy() {
    return academyRepo.findAll();
  }
  
  public List<student> getAllStudents() {
    return studentRepo.findAll();
  }
  
  public List<course> getAllCourses() {
    return courseRepo.findAll();
  }
  
  // Update methods
  public academy updateAcademyByEmail(String email, academy updatedAcademy) {
    academy existingAcademy = academyRepo.findByEmail(email);
    if (existingAcademy != null) {
      existingAcademy.setPlace(updatedAcademy.getPlace());
    //   existingAcademy.setMobile(updatedAcademy.getMobile());
    //   existingAcademy.setImageurl(updatedAcademy.getImageurl());
    //   existingAcademy.setEmail(updatedAcademy.getEmail());
    //   existingAcademy.setLocation(updatedAcademy.getLocation());
    //   existingAcademy.setDescription(updatedAcademy.getDescription());
      return academyRepo.save(existingAcademy);
    } else {
      return null;
    }
  }
  
  public student updateStudentByEmail(String email, student updatedStudent) {
    student existingStudent = studentRepo.findByEmailid(email);
    if (existingStudent != null) {
      existingStudent.setFirstname(updatedStudent.getFirstname());
      existingStudent.setLastname(updatedStudent.getLastname());
      existingStudent.setFathersname(updatedStudent.getFathersname());
      existingStudent.setEmailid(updatedStudent.getEmailid());
    //   existingStudent.setMothersname(updatedStudent.getMothersname());
      existingStudent.setMobile(updatedStudent.getMobile());
    //   existingStudent.setAlternatemobile(updatedStudent.getAlternatemobile());
      existingStudent.setAge(updatedStudent.getAge());
      existingStudent.setLevel(updatedStudent.getLevel());
      existingStudent.setAddress(updatedStudent.getAddress());
    //   existingStudent.setGender(updatedStudent.getGender());
      return studentRepo.save(existingStudent);
    } else {
      return null;
    }
  }

  // public List<academy> getAllacademy() {
  //   // TODO Auto-generated method stub
  //   throw new UnsupportedOperationException("Unimplemented method 'getAllacademy'");
  // }

public List<course> getAllcourse() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllcourse'");
}

// public List<student> getAllstudent() {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'getAllstudent'");
// }

// public boolean createcourse(course c) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createcourse'");
// }

// public boolean createBook(model m) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createBook'");
// }

// public boolean createacademy(academy ac) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createacademy'");
// }

// public String createstudent(student sc) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createstudent'");
// }

// public student updateStudent(String email, student updateModel) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'updateStudent'");
// }

public academy updateAcademy(String email, academy updateModel) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateAcademy'");
}

//  public void deleteEntityByEventNameL(String email){
//     courserepo.deleteByEmail(email);
//    }
}
