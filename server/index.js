import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// add a student
app.post('/students', async(req, res) => {
    try {
        const { first_name, last_name, email, enrollment_date } = req.body;
        const newStudent = await pool.query(
            'insert into Students (first_name, last_name, email, enrollment_date) values ($1, $2, $3, $4) returning *',
            [first_name, last_name, email, enrollment_date]
        );
        res.json(newStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all students
app.get('/students', async(req, res) => {
    try {
        const allStudents = await pool.query('select * from Students');
        res.json(allStudents.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// update a student's email address
app.put('/students/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const updateStudent = await pool.query(
            'update Students set email = $1 where student_id = $2',
            [email, id]
        );
        res.json('Student email was updated');
    } catch (err) {
        console.error(err.message);
    }
});

// delete a student
app.delete('/students/:id', async(req, res) => {
    try {
        const { student_id } = req.params;
        const deleteStudent = await pool.query(
            'delete from Students where student_id = $1',
            [student_id]
        );
        res.json('Student was deleted');
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

