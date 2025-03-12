import express, { Request, Response, NextFunction } from 'express';
import requestIp from 'request-ip';
import cors from 'cors';

const app = express();
const allowedOrigins = ['https://webserver.acme.se', 'https://backend.acme.se'];

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (allowedOrigins.includes(origin!)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

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
