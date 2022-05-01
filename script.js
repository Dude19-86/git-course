"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('how many films have you already watched?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('how many films have you already watched?', '');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классический пользователь')
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('произошла ошибка');
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваши любимые жанры через запятую ${i}`).toLowerCase();
            if (genres === '' || genres === null) {
                console.log('wrong data');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        })
        // return personalMovieDB.genres;
    }
};

// console.log(personalMovieDB.start());
// console.log(personalMovieDB.writeYourGenres());
// console.log(personalMovieDB.toggleVisibleMyDB());


