import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import passport from 'passport';
import passportMiddleware from './middleware/passport';

import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

//Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});

app.use('/auth', authRoutes);
app.use('/special', specialRoutes);

export default app;
