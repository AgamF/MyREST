const express = require('express');
const people = require('./people');
const languages = require('./languages');
const games = require('./games');

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index')
});

app.get("/api/people", (req, res) => {
  res.send(people)
});

app.get('/api/people/:id', (req, res) => {
  const person = people.find(p => p.id === parseInt(req.params.id))
  if (!person) { 
    res.status(404).render('error.ejs')
  } else res.send(person)
});

app.get('/api/languages', (req, res) => {
  res.send(languages)
});

app.get('/api/languages/:id', (req, res) => {
  const language = languages.find(l => l.id === parseInt(req.params.id))
  if (!language) { 
    res.status(404).render('error.ejs')
  } else res.send(language)
});

app.get('/api/games', (req, res) => {
  res.send(games)
});

app.get('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id))
  if (!game) { 
    res.status(404).render('error.ejs')
  } else res.send(game)
});

app.use((req, res) => {
  res.status(404).render('error.ejs')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));