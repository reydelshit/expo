import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let valueFromArduino = 0;

app.post('/update', (req, res) => {
  valueFromArduino = req.body.field1;

  console.log('Received data:', valueFromArduino);

  res.sendStatus(200); // Send a response to the ESP8266
});

app.get('/data', (req, res) => {
  res.json({ valueMoist: valueFromArduino });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
