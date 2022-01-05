
const quoteArray = [
    " 'Hope knows that if great trials are avoided great deeds remain undone and the possibility of growth into greatness of soul is aborted.' --Brennan Manning",
    " 'I remember my dad asking me one time, and it's something that has always stuck with me: 'why not you, Russ?; You know, why not me? Why not me in the Super Bowl?' -Russell Wilson",
    " 'Real knowledge is to know the extent of one's ignorance.'  -Confucious",
    "  “Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” — Plato",
    " 'I am an optimist.  It does not seem too much use to be anything else.' --Winston Churchill",
    "It feels good to be lost in the right direction.  --unknown"
    ]


const changeQuote = () => {
    q=Math.floor(Math.random() * quoteArray.length);
    newQuote=document.getElementById("quote");
    newQuote.innerHTML=quoteArray[q];
   
    }

setInterval(changeQuote, 4500);

const highlightDescription = () => {
    if(document.getElementById("front").classList.contains("highlighted")){
        document.getElementById("front").classList.remove("highlighted");
        document.getElementById("edu").classList.add("highlighted")
        return;
    };
    if(document.getElementById("edu").classList.contains("highlighted")){
        document.getElementById("edu").classList.remove("highlighted");
        document.getElementById("mus").classList.add("highlighted");
        return;
    };
    if(document.getElementById("mus").classList.contains("highlighted")){
        document.getElementById("mus").classList.remove("highlighted");
        document.getElementById("front").classList.add("highlighted");
        return
    };
}

setInterval(highlightDescription, 2200);

console.log('Hello, World!')