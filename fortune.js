const teller = {
    guess: function (){
        const millions = Math.floor(Math.random()*10);
        console.log(millions);
        const message = `you will earn a ${millions} million euro's this year`;
        return message;
    } 
}

console.log(teller.guess());