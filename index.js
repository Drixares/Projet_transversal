import dotenv from 'dotenv';
import express from 'express';
import router from './routes/route.js';
dotenv.config();

const app =  express();

app.use(express.json())
app.use('/' , router)
app.use(express.static('public'));
// app.use(bodyParser.json());

const initializeApp = () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Site connecté au backend sur http://localhost:3000`);
  })
}

initializeApp();
