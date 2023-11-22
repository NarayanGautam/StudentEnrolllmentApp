import Pool from 'pg-pool';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '3005',
    port: 5432,
    database: 'Enrollment'
});

export default pool;

