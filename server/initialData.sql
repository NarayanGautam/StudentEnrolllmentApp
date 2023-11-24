-- create our database
create database enrollment;

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

-- other useful sql queries for testing

select * from students;

drop database Enrollment;

delete from students;

-- reset the serial id
alter sequence students_student_id_seq restart with 1;

drop table students;



