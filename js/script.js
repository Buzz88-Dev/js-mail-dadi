// lista di email
let listaMail = ["omar@gmail.com", "silvia@gmail.com", "luca@gmail.com", "roberto@gmail.com"];

let inputMail = document.getElementById("mymail");

let verificaMail = document.getElementById("myButton");

let puoiNonPuoi = document.querySelector(".presenteAssente");

verificaMail.addEventListener("click",
    function(){

        let scrivoMail = inputMail.value;
        console.log(scrivoMail);
        let puoaccedere = false

        for (let i = 0; i < listaMail.length; i++) {   
            console.log(listaMail[i]);

            if (scrivoMail === listaMail[i]) {
                puoaccedere = true
                console.log("Puoi accedere!!!");
            } 
        }  
        
        if (puoaccedere === true){  
            puoiNonPuoi.innerHTML = "Puoi accedere!!!";
        } else {
            puoiNonPuoi.innerHTML = "Non Puoi accedere!!!";
        }
    }

)

// if (listaMail.includes(scrivoMail)){  // controlla se il valore che gli passo è incluso dentro l array
//     puoiNonPuoi.innerHTML = "Puoi accedere!!!";
// } else {
//     puoiNonPuoi.innerHTML = "Non Puoi accedere!!!";
// }
