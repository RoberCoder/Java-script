const quotes = [{
    quotes: "Make the plan and stick to it. Start with little things"
    ,author: "Jordan Peterson"
},
{   quotes: "Yes,, but that damn Hierarchy is necessary."
    ,author: "Jordan Peterson"},
{
    quotes: "10hours a day to work is needed if you really want to succeed or just give up your challenge"
    ,author: "Jordan Peterson"
},
{
    quotes: "Pencil cannot be a eraser though you want to call it eraser. Don't do such a XXXX"
    ,author: "Ven Sapiro"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText= todayQuote.quotes;
author.innerText= todayQuote.author;

  const hidden =   document.getElementsByClassName(".hidden")

  console.log(hidden)