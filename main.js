const allApps = [
    {
        name: 'Dino Game',
        img: 'images/dino.jpg',
        link: 'All JavaScript Apps/dino-game'
    },
    {
        name: 'Translator',
        img: 'images/translator.jpg',
        link: 'All JavaScript Apps/translator'
    },
    {
        name: 'Movie Info',
        img: 'images/movieInfo.jpg',
        link: 'All JavaScript Apps/movie info'
     },
    {
        name: 'To do App',
        img: 'images/todo.png',
        link: 'All JavaScript Apps/ToDo app'
      },

    {
        name: 'Weather',
        img: 'images/weather.png',
        link: 'All JavaScript Apps/weather'
      },

    {
        name: 'Password',
        img: 'images/password.png',
        link: 'All JavaScript Apps/random password'
      },
    {
        name: 'QR CODE',
        img: 'images/qr.jpg',
        link: 'All JavaScript Apps/qr code'
      },
    {
        name: 'Dynamic Data',
        img: 'images/dynamic.png',
        link: 'All JavaScript Apps/Dynamic Data'
    },

    {
        name: 'Guessing Game',
        img: 'images/guessinggame.png',
        link: 'All JavaScript Apps/Guessing game'
    },

    {
        name: 'Slide Show',
        img: 'images/slideshow.png',
        link: 'All JavaScript Apps/SlideShow'
    },

    {
        name: 'Storage',
        img: 'images/storage.png',
        link: 'All JavaScript Apps/storage'
    }
];

allApps.map((app) => {
    var overDiv = document.querySelector('.over');

    var createAppDiv = document.createElement('div');
    createAppDiv.classList.add('app');

    var createAppImg = document.createElement('img');
    createAppImg.src = app.img;
    var createAppPtag = document.createElement('p');
    createAppPtag.innerText = app.name;
    createAppDiv.appendChild(createAppImg);
    createAppDiv.appendChild(createAppPtag);
    overDiv.appendChild(createAppDiv);

    createAppDiv.addEventListener('click', () => {
        location.assign(app.link);
    })
})