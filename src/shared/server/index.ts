import express, { Request, Response } from 'express';
const port = process.env.PORT || 8083;
const app = express();


app.get('/', (request: Request, response: Response)=>{
    return response.status(200).json({message: "Hello World!"});
});

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
});