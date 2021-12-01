const express = require('express');
const morgan = require ('morgan'); 
const app = express();

let topMovies = [
    {
    title: '10 Things I Hate About You',
    director: 'Gil Junger',
    genre: ['Teen', 'High School', 'Shakespeare', 'Comedy', 'Wagering'],
    releaseYear: 1999
    }, 
    {
    title: 'Legally Blonde',
    director: 'Robert Luketic',
    genre: ['Legal', 'Comedy'],
    releaseYear: 2001
        }, 
    {
    title: 'How to Lose a Guy in 10 Days',
    director: 'Donald Petrie',
    genre: ['Comedy', 'New York', 'Wagering', 'Magazine'],
    releaseYear: 2003
    },
    {
    title: 'Juno',
    director: 'Jason Reitman',
    genre: ['Teen', 'High School', 'Comedy', 'Best Friend'],
    releaseYear: 2008 
    },
    {
    title: 'Maid in Manhattan',
    director: 'Wayne Wang',
    genre: ['New York', 'Mistaken Idenity', 'Makeover', 'Politics'],
    releaseYear: 2002
    },
    {
    title: 'She\'s Out of My League',
    director: 'Jim Field Smith',
    genre: ['Comedy', 'Raunchy'],
    releaseYear: 2010
    },
    {
    title: 'Maid of Honor',
    director: 'Paul Weiland',
    genre: ['Weddings', 'Best Friend', 'Comedy'],
    releaseYear: 2008
    },
    {
    title: 'She\'s All That',
    director: 'Robert Iscove',
    genre: ['Teen', 'High School', 'Makeover', 'Wagering'],
    releaseYear: 1999
    },
    {
    title: 'Sweethome Alabama',
    director: 'Andy Tennant',
    genre: ['Long Lost Love', 'Weddings', 'Comedy', 'Politics', 'New York'],
    releaseYear: 2002
    },
    {
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
  
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });
  
//middleware 
app.use (morgan('common')); 
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