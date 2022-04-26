"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('how many films have you already watched?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many films have you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр ${i + 1}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('what was the last movie you watched?', '');
        const b = prompt('his score?', '');
        personalMovieDB.movies[a] = b;
        if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы классический пользователь')
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('произошла ошибка');
    }
}

detectPersonalLevel();


console.log(personalMovieDB);

console.log('fff')

