// lista di email
let listaMail = ["omar@gmail.com", "silvia@gmail.com", "luca@gmail.com", "roberto@gmail.com"];

let inputMail = document.getElementById("mymail");

let verificaMail = document.getElementById("myButton");

let puoiNonPuoi = document.querySelector(".presenteAssente");

verificaMail.addEventListener("click",
    function(){

        let scrivoMail = inputMail.value;
        console.log(scrivoMail);

        for (let i = 0; i < listaMail.length; i++) {   
            console.log(listaMail[i]);

            if (scrivoMail === listaMail[i]) {
                puoiNonPuoi.innerHTML = "Puoi accedere!!!";
                console.log("Puoi accedere!!!");
            } else {
                puoiNonPuoi.innerHTML = "Non puoi!!!";
                console.log("Non puoi");
            }
        }        
    }
)
