const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./server');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
