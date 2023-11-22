-- create our database
create database Enrollment;

-- create students table
create table Students (
    student_id serial primary key,
    first_name text not null,
    last_name text not null,
    email text not null,
    enrollment_date date
)

-- insert default data
insert into students (first_name, last_name, email, enrollment_date) values
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');

select * from students;