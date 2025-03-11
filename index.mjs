import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML files from the 'views' directory
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/geos', (req, res) => {
  res.render('geos');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Route for the root path
app.get('/', (req, res) => {
  res.render('index'); // or res.redirect('/index') if you want to redirect
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
