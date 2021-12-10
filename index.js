const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());

let movies = [
  {
    id: 1,
    title: '10 Things I Hate About You',
    director: 'Gil Junger',
    genre: ['Teen', 'High School', 'Shakespeare', 'Comedy', 'Wagering'],
    releaseYear: 1999
  },
  {
    id: 2,
    title: 'Legally Blonde',
    director: 'Robert Luketic',
    genre: ['Legal', 'Comedy'],
    releaseYear: 2001
  },
  {
    id: 3,
    title: 'How to Lose a Guy in 10 Days',
    director: 'Donald Petrie',
    genre: ['Comedy', 'New York', 'Wagering', 'Magazine'],
    releaseYear: 2003
  },
  {
    id: 4,
    title: 'Juno',
    director: 'Jason Reitman',
    genre: ['Teen', 'High School', 'Comedy', 'Best Friend'],
    releaseYear: 2008
  },
  {
    id: 5,
    title: 'Maid in Manhattan',
    director: 'Wayne Wang',
    genre: ['New York', 'Mistaken Idenity', 'Makeover', 'Politics'],
    releaseYear: 2002
  },
  {
    id: 6,
    title: 'She\'s Out of My League',
    director: 'Jim Field Smith',
    genre: ['Comedy', 'Raunchy'],
    releaseYear: 2010
  },
  {
    id: 7,
    title: 'Maid of Honor',
    director: 'Paul Weiland',
    genre: ['Weddings', 'Best Friend', 'Comedy'],
    releaseYear: 2008
  },
  {
    id: 8,
    title: 'She\'s All That',
    director: 'Robert Iscove',
    genre: ['Teen', 'High School', 'Makeover', 'Wagering'],
    releaseYear: 1999
  },
  {
    id: 9,
    title: 'Sweethome Alabama',
    director: 'Andy Tennant',
    genre: ['Long Lost Love', 'Weddings', 'Comedy', 'Politics', 'New York'],
    releaseYear: 2002
  },
  {
    id: 10, 
    title: '13 Going on 30',
    director: 'Gary Winick',
    genre: ['Time Travel', 'Teen', 'Best Friend', 'Long Lost Love', 'Magazine'],
    releaseYear: 2004
  },

];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie page!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

//Gets all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

//Gets info about a specific movie
app.get('/movies/:id', (req, res) => {
  res.json(movies.find((movie) => { return movie.title === req.params.name }));
});


//Add new user
app.post('/users', (req, res) => {
  let newUser = req.body;
  if (!newUser.name) {
    const message = 'Missing username in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

//Delete user account
app.delete('/users/:id', (req, res) => {
  let user = user.find((user) => { return user.id === req.params.id });
  if (user) {
    user = user.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('user ' + req.params.id + ' was deleted.');
  }
});

//add favorite
app.put('users/:id/favorites', (req, res) => {
  res.send('Successfully added to Favorites');
});

//remove favorite
app.delete('users/:id/favorites', (req, res) => {
  res.send('Successfully deleted favorite');
});

//get genre info
app.get('/movies/:genre', (req, res) => {
  res.json(movies.find((genre) => { return genre.title === req.params.name }));
});

//get director info
app.get('/movies/:director', (req, res) => {
  res.json(movies.find((director) => { return director.info === req.params.name }));
});


//middleware 
app.use(morgan('common'));
app.use(express.static('public'));


app.use((err, req, res, next) => {
  console.error(err.stack); //logs errors
  res.status(500).send('An error has been found!');
  next();
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});