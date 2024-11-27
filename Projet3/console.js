const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

// Scores
let playerScore = 0;
let robotScore = 0;

// Fonction pour que le robot choisisse un coup
function getRobotChoice() {
    const choices = ['Pierre', 'Feuille', 'Ciseau'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Fonction pour déterminer le résultat
function getResult(player, robot) {
    if (player === robot) return "Égalité";
    if (
        (player === 'Pierre' && robot === 'Ciseau') ||
        (player === 'Ciseau' && robot === 'Feuille') ||
        (player === 'Feuille' && robot === 'Pierre')
    ) {
        playerScore++;
        return "Bravo ! Tu as gagné 🎉";
    } else {
        robotScore++;
        return "Dommage, tu as perdu 😢";
    }
}

// Gestion des clics sur les boutons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const robotChoice = getRobotChoice();
        const resultMessage = getResult(playerChoice, robotChoice);

        // Affichage du résultat et mise à jour des scores
        resultDiv.innerHTML = `
            <p>Tu as choisi : <strong>${playerChoice}</strong></p>
            <p>Le robot a choisi : <strong>${robotChoice}</strong></p>
            <p>${resultMessage}</p>
            <p style="color: blue;">Ton score : ${playerScore}</p>
            <p style="color: red;">Score du robot : ${robotScore}</p>
        `;
    });
});
