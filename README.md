# COMP3005A Assignment 4 Q1 - Student Enrollment App
Shuva Gautam - 101223315

Friday, November 23, 2023

## How to run the program
## Step 1: Setup the database in PostgreSQL
Create the Enrollments database in PostgreSQL by running the following commands in psql or pgAdmin4
```sql
create database Enrollment;
```
Create the student table in the Enrollments database
```sql
create table Students (
    student_id serial primary key,
    first_name text not null,
    last_name text not null,
    email text not null,
    enrollment_date date
)
```
Insert the default data into the Students table
```sql
insert into students (first_name, last_name, email, enrollment_date) values
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');
```

## Step 2: Setup and Run the program
Clone the repository or download it. 

cd into the client folder and run the following commands to download the dependencies and run the client side of the program
```bash
npm install
npm run dev
```
cd into the server folder and run the following commands to download the dependencies and run the server side of the program
```bash
npm install
npm start
```
You will also need to create a .env file in the server folder and add the following to it, so that the server can connect to the database securely
```bash
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD= #your password
DB_PORT=5432
DB_NAME=Enrollment
```

## Step 3: Use the program
Open the browser and go to http://localhost:5173/ to use the client side of the program

Use the navigation bar to navigate to the different pages of the program, each page performs a different function on the database.










