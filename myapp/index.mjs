import express from 'express';
import pool from './users_db.js';

const app = express();
const port = 3031;

app.set('view engine', 'pug'); 

app.get('/api/customers', async (req, res) => {
    try {
        const query = 'SELECT CustomerID FROM Customers'; // Simplified query

        console.log('Executing query:', query);

        const [rows] = await pool.query(query);

        console.log('Database query result:', rows);

        res.json(rows); // Return the result as JSON
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});


app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});

// app.set('view engine', 'pug');
// app.use(express.urlencoded({ extended: true }));

// function checkData(req, res, next) {
//     const { name, email, notes } = req.body;
//     if (!name || !email || !notes) {
//         return res.render('contact');
//     }
//     next();
// }

// app.get('/contact', (req, res) => {
//     res.render('contact');
// });

// app.post('/thankyou', checkData, (req, res) => {
//     const { name, email, notes } = req.body;
//     res.render('thankyou', { name, email, notes }); // Pass the data to the template
// });

// app.listen(port, () => {
//     console.log('Server is running at http://localhost:' + port);
// });
