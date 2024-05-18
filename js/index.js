




function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresults = document.getElementById("diceresults");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];


    for(let i = 0; i < numofdice; i++){
       const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./resources/${value}.jpg" alt="Dice ${value}">`);
    }

    diceresults.textContent = ` Dice: ${values.join(", ")}`;
    diceimages.innerHTML = images.join("");
}

