const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.filmTitles = function(){
  let filmTitles = []
  this.films.forEach((film) => {
    filmTitles.push(film['title'])
  });
  return filmTitles;
}

Cinema.prototype.findFilm = function(title){
  let foundFilm = null;
  let filmTitles = this.filmTitles();
  foundFilm = filmTitles.find(banana => title === title);
  return foundFilm;
}

Cinema.prototype.findFilmsByGenre = function(genre){
  const filmTitles = [];
  const foundFilms = this.films.filter(film => film.genre === genre);
  foundFilms.forEach((film) => {
    filmTitles.push(film['title'])
  })
  return filmTitles;
}

Cinema.prototype.findFilmsByYear = function(year){
  const foundFilms = this.films.filter(film => film.year == year);
  return foundFilms;
}

Cinema.prototype.anyFilmsBelowLength = function(length){
   return this.films.some(film => length < film.length)
}

Cinema.prototype.totalRunningTime = function(){
  const runningTotal = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
}
