function giveCompliment () {
    const randomNo = Math.floor(Math.random() * 5); 
    switch (randomNo){
        case 0:
            return "You are doing great!";
            break;
        case 1:
            return "Fancy pants!";
            break;
        case 2:
            return "Nice work";
            break;
        case 3:
            return "Heads up!";
            break;
        default:
            return "Impressive";
            break;
    }
}

giveCompliment()
console.log(giveCompliment());