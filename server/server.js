import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // Change the port number as needed

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let field1Value = 0; // Initialize field1 value

app.post('/update', (req, res) => {
  field1Value = req.body.field1; // Update the field1 value with the new data

  console.log('Received data:', field1Value);

  res.sendStatus(200); // Send a response to the ESP8266
});

app.get('/data', (req, res) => {
  res.json({ field1: field1Value }); // Send the field1 value as JSON response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
