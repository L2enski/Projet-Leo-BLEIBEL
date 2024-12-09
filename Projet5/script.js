const quotes = [
    "Le succès, c'est tomber sept fois, se relever huit. – Proverbe japonais",
    "La meilleure façon de prédire l’avenir, c’est de le créer. – Peter Drucker",
    "N’attendez pas. Le moment parfait n’existe pas. – Napoleon Hill",
    "Le travail acharné bat le talent quand le talent ne travaille pas. – Tim Notke",
    "L'échec est simplement l’opportunité de recommencer, cette fois de manière plus intelligente. – Henry Ford"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
