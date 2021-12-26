import "reflect-metadata";
import express from 'express';

import './database';

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('🔥 Server running at Port 3000'))