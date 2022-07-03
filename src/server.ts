import express, { Response } from 'express';

const server = express();

server.get('/', (request, response: Response) => {
  return response.send('Hello!');
});

export default server;
