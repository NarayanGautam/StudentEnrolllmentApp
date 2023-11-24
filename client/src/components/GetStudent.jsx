import React, { useState, useEffect } from 'react'

// GetStudent component gets all the students from the database
const GetStudent = () => {
  // useState hook to set the state of the students data
  const [students, setStudents] = useState([]);

  // getStudents function that attempts to get all the students from the database
  const getStudents = async () => {
    try {
      const response = await fetch('http://localhost:3000/students');
      const jsonData = await response.json();
      setStudents(jsonData); 
    } catch (error) {
      console.error(error.message);
    }
  };

// useEffect hook to get all the students from the database
  useEffect(() => {
    getStudents();
  }, []);



  // return the GetStudent component
  // a table that displays all the students in the database
  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-center font-medium text-2xl"> 
          Get Students
        </h1>        
        <p className="text-center">
          Here are all the students in the database:
        </p>

        <table className="table-auto text-center mx-auto my-8">
          <thead>
            <tr>
              <th className="px-4 py-2">Student ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.student_id}>
                <td className="border px-4 py-2">{student.student_id}</td>
                <td className="border px-4 py-2">{student.first_name}</td>
                <td className="border px-4 py-2">{student.last_name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.enrollment_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>      
    </>

  )
}

export default GetStudent