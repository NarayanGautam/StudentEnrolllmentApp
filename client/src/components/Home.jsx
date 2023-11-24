import React from 'react'

const Home = () => {
  return (
    <>
        <h1 className="text-center font-medium text-2xl">
            Welcome to the Student Enrollment App
        </h1>
        <br />
        <p className="text-center">
            Please select an option from the navigation bar to get started.
        </p>
        <br />

        <h1 className="text-center font-medium text-2xl">
            About the Application
        </h1>
        <br />
        <p className="text-center">
            The application allows you to add, update, delete and get students.
            <br />
            The application is built using React, Tailwind CSS, and Vite for the front-end.
            <br />
            The back-end is built using Node.js, Express.js, and connects to a local PostgreSQL database.
        </p>

    </>

  )
}

export default Home