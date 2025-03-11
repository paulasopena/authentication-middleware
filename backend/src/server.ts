import express, { Request, Response, NextFunction } from 'express';
import requestIp from 'request-ip';

const app = express();

const allowedIps: string[] = [
    '127.0.0.1',
    ...Array.from({ length: 256 }, (_, i) => `192.168.1.${i}`)
];

app.use(requestIp.mw());

app.use((req: Request, res: Response, next: NextFunction) => {
  const clientIp = req.clientIp;

  if (allowedIps.includes(clientIp!)) {
    next(); 
  } else {
    res.status(403).send('Forbidden: Access Denied'); 
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, you have access!');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
