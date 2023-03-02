import express, { Request, Response } from 'express';
import 'reflect-metadata';
import '../container'
import { app } from './app';

const port = process.env.PORT || 8083;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
