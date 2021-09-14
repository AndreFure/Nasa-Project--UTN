const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();


const viewsPath = path.join(__dirname, 'templates/views');
const partialPath = path.join(__dirname, 'templates/partials');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.get('', (req, res) => {
  res.render('index');
});
app.get('/contacto', (req, res) => {
  res.render('contacto');

});
app.listen(3000, () => { console.log('La conexión fue exitosa') });

app.get('', (req, res) => {
  posts.getPosts((err, response) => {
    if (err) {
      return res.send(err);
    }
    res.render('index', {
      response,
    });
  })
});

