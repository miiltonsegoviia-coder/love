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
        
        // 2. Iniciar cambio de fondo y mostrar jardín (pero invisible por CSS)
        document.body.classList.add("night-mode");
        surprise.classList.remove("hidden");

        // 3. Activar las animaciones internas y el desvanecimiento de las flores
        setTimeout(() => {
            surprise.classList.remove("not-loaded");
            
            // 4. Mostrar el texto Star Wars al final
            setTimeout(() => {
                starWarsText.classList.remove("opacity-0");
                starWarsText.classList.add("opacity-1");
            }, 1500);

        }, 500); // Pequeña espera para que el fondo negro empiece primero

    }, 1000);
}