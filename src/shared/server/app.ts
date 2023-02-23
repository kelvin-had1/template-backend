import express, { json, Request, Response } from 'express';
import { router } from './routes';
import cors from 'cors';


const app = express();

app.use(cors({  
  credentials: true,
  
}))
app.use(json());

app.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'Hello World!' });
})

app.use(router);

export { app };