const quotes = [ 
    {
        quote: "A man who does not spend time with his family can never be a real man",
        person: 'Don vito corleone'

    },
    {
        quote: "Where’s Michael?",
        person : 'Don vito corleone'
    },
    {
        quote: "A friend should always underestimate your virtues and an enemy overestimate your faults.",
        person: 'don vito corleone'
    },
    {
        quote: "Only don't tell me that you're innocent. Because it insults my intelligence",
        person: 'Michael corleone'
    },
    {
        quote: "Fredo -- you're my older brother, and I love you. But don't ever take sides with anyone against the Family again. Ever",
        person: 'Michael corleone'
    },
    {
        quote: "Luca Brasi sleeps with the fishes" ,
        person: 'unknown'
    },
    {
        quote: "Leave the gun. Take the cannoli." ,
        person: 'Peter clemenza'
    },
    {
        quote: "I’m gonna make him an offer he can’t refuse",
        person: 'Don vito corleone'
    },
    {
        quote: "Monday, Tuesday, Thursday, Wednesday, Friday, Sunday, Saturday.",
        person: 'Apollonia vitelli'
    },
    {
        quote: "My father assured him that either his brains or his signature would be on the contract",
        person: 'michael corleone'
    }
]
    
const quoteBox = document.querySelector('.quote-display')
const quoteAuthor = document.querySelector('.quote-author')
// console.log(quotes[2].person);


const rotateBtn = document.querySelector('.rotate-btn');

rotateBtn.addEventListener('click' , () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(randomNumber);
    quoteBox.innerText = quotes[randomNumber].quote;
    quoteAuthor.innerText = '-' + quotes[randomNumber].person;
})
