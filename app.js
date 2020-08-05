function openSlideMenu() {

    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';

}

function closeSlideMenu() {

    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';

}

// // Js code loaded
// document.addEventListener('DOMContentLoaded', ()=>{

// })

/**Box javascrip */

const reviews = [{
        id: 1,
        job: " Oscar Wilde",
        text: "Be yourself; everyone else is already taken.",
    },
    {
        id: 2,
        job: "Claude Brasseur",
        text: "Je fais une énorme différence entre la popularité et la célébrité. Pourquoi je n'aime pas la popularité ? Parce que ce n'est pas un critère de qualité",
    },
    {
        id: 3,
        job: "George Gordon",
        text: "L'amour, la gloire, l'ambition, l'avarice - rêves ! - Rêves inutiles et mauvais, et dont pas un n'est meilleur ni pire, car ce n'est toujours qu'un même météore sous des noms différents, et la mort est la sombre fumée où va s'éteindre sa flamme.",
    },
    {
        id: 4,
        job: "Blaise Pascal",
        text: "Qu'une vie est heureuse quand elle commence par l'amour et qu'elle finit par l'ambition !",
    },
];

//select

const Author = document.querySelector('.authorName');
const Quote = document.querySelector('.info')

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set

let currentItem = 0;

//load item
// const button = document.querySelector('.next-btn')
async function quoteNew() {
    const response = await fetch('https://api.quotable.io/random')
    console.log(response)

    const data = await response.json()
    //tcheke si repons lan mache
    if (response.ok) {
        //console.log(data)
        Author.textContent = data.author
        Quote.textContent = data.content
    }
    // console.log(data.content)
    // console.log(data.author)
}
window.addEventListener("DOMContentLoaded", function () {


    quoteNew();
    //showPerson(currentItem);
});

//show

// function showPerson() {
//     const item = reviews[currentItem];
//     textOffices.textContent = item.job;
//     textOffice.textContent = item.text;
// }

//Show next person

nextBtn.addEventListener('click', function () {
    // currentItem++
    // if (currentItem > reviews.length) {
    //     currentItem = 0;
    // }
    // showPerson(currentItem);
    quoteNew()
});
prevBtn.addEventListener('click', function () {
    // currentItem--;
    // if (currentItem < 0) {
    //     currentItem = reviews.length - 1;
    // }
    // showPerson(currentItem);
    quoteNew()
})

//randombtn

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)

    quoteNew()
});

//api

// const whabtn = document.querySelector('.wha-btn');
// const facebtn = document.querySelector('.face-btn');

// function init() {
//     let postUrl = encodeURI(document.location.href);
//     console.log(postUrl)
//     console.log(document.location.href)
//     let posTitle = encodeURI("This quote is provide by MaxQuotes.com");


//     facebtn.setAttribute("href", "https://www.facebook.com/sharer.php?u=${postUrl}");
//     whabtn.setAttribute("href", "https://api.whatsapp.com/send?text=${posTitle} ${postUrl}");
// }

// init();