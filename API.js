// Define the API endpoint for retrieving all doctor information
app.get('/doctors', function(req, res) {
    // Use your database client library to query the database
    // for all the doctor information
    db.query('SELECT * FROM doctors', function(error, results, fields) {
        if (error) throw error;
        // Return the results as a JSON object
        res.json(results);
    });
});
