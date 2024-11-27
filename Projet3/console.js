const buttons = document.querySelectorAll('button')
let joueur = ""
let robot = ""
let victory = ""

for(let i =0; i <=buttons.length; i++){
    buttons[i].addEventListener('click',() => {
        joueur = buttons[i].textContent
        if(joueur.textContent === robot.textContent) {
            victory = "égalité"
        }
        else if (joueur.textContent === "pierre" && robot.textContent === "ciseau"
            || joueur.textContent === "ciseau" && robot.textContent === "feuille"
        ||joueur.textContent === "feuille" && robot.textContent === "pierre"
    ){
            victory = "victoire"        
        }else {
            victory = "defaite"
        }

        resultat.innerHTML = `j'ai joué : ${joueur} <br> Le Robot a joué : ${robot} <br> c'est une ${victory}`
    })
}