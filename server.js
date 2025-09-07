const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  store: new SQLiteStore(),
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true }
}));

app.use('/api/auth', authRoutes);

app.get('/api/dashboard', (req, res) => {
  if(!req.session.user) return res.status(401).json({ error: 'Unauthorized' });
  res.json({ message: 'Welcome to the dashboard!' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
