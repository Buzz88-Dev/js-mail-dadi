let clicca = document.getElementById("clicca");
let giocatore = document.getElementById("numeroGiocatore");
let pc = document.getElementById("numeroPc");
let vincitore = document.getElementById("vincitore");


clicca.addEventListener("click",

    function(){
        let numPlayer = Math.floor(Math.random() * 6) + 1;
        console.log(numPlayer);
        giocatore.innerHTML = numPlayer;

        let numPc = Math.floor(Math.random() * 6) + 1;
        console.log(numPc);
        pc.innerHTML = numPc;


        if (numPlayer > numPc) {
            console.log("Vince il giocatore!!")
            vincitore.innerHTML = ("Vince il giocatore");
        } else if (numPlayer < numPc) {
            vincitore.innerHTML = ("Vince il PC!!!");
        } else {
            vincitore.innerHTML = ("I numeri sono uguali");
        }
    }
)



