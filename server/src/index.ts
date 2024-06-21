import express from 'express';
import cors from "cors";
import morgan from 'morgan'
import router from './route'

import dotenv from 'dotenv'
import dbconnction from './Databse/db'
dotenv.config()

const app = express();



app.use(express.json());
app.use(cors());

app.use(morgan('dev'));


dbconnction()

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/kl',router)


// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

export default app;
// export { server }; // Export the server for testing purposes
