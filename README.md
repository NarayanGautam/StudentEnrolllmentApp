# COMP3005A Assignment 4 Q1 - Student Enrollment App

Notes:
The initial ddl and dml sql files are used to setup the initial postgres database. We first create a database called Enrollment in pgAdmin4 and then run the ddl and dml files to create the tables and populate them with data.

The ddl and dml files are also used to reset the database to its initial state. We can do this by running the following commands in the terminal:
```
psql -U postgres -d Enrollment -a -f ddl.sql
psql -U postgres -d Enrollment -a -f dml.sql
```

The enrollments app is built using the PERN stack (Postgres, Express, React, Node). 




