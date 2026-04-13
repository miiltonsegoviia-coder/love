let messageIndex = 0;
const messages = ["¿Seguro? 🥺", "¡Pénsalo!", "Nadie te obliga", "Última oportunidad", "😭"];

function handleNoClick() {
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.25}px`;
}

function handleYesClick() {
    const mainContainer = document.getElementById("main-container");
    const surprise = document.getElementById("surprise");
    const starWarsText = document.getElementById("star-wars-text");

    // 1. Desvanecer pregunta
    mainContainer.classList.add("fade-out");

    setTimeout(() => {
        mainContainer.classList.add("hidden");
        
        // 2. Iniciar cambio de fondo y posición del body
        // Esto tarda 2.5s según tu CSS
        document.body.classList.add("night-mode");
        surprise.classList.remove("hidden");

        // 3. Activar las animaciones internas
        // Aumentamos de 500 a 1200ms para que el body ya esté casi 
        // abajo del todo antes de que las flores empiecen a brotar.
        setTimeout(() => {
            surprise.classList.remove("not-loaded");
            
            // 4. Mostrar el texto Star Wars al final
            setTimeout(() => {
                starWarsText.classList.remove("opacity-0");
                starWarsText.classList.add("opacity-1");
            }, 1500);

        }, 1200); // <-- ESTE ES EL CAMBIO CLAVE

    }, 1000);
}
