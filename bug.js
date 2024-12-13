const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a successful response
      res.send('Success!');
    } else {
      // Simulate an error by throwing an exception. 
      // In a real application, this might be a database error or an external API failure.
      throw new Error('Something went wrong!');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));