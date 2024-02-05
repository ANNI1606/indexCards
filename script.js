document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("app-container");

  const cardsArray = [];
  const preferCards = [];

  function createInput(id, label) {
    const inputContainer = document.createElement("div");
    inputContainer.innerHTML = `<label>${label}</label><input type="text" id="${id}" placeholder="Inserisci ${label.toLowerCase()}">`;
    return inputContainer;
  }

  function createCard(cardData) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.innerHTML = `<img src="${cardData.imageUrl}" alt="${cardData.title}"><h2>${cardData.title}</h2><p>${cardData.description}</p>`;

    // Aggiungi il bottone "Preferito"
    const preferBTN = document.createElement("button");
    preferBTN.textContent = "Aggiungi ai Preferiti";
    preferBTN.addEventListener("click", () => addPreferito(cardData));
    cardContainer.appendChild(preferBTN);
    container.appendChild(cardContainer);
  }

  function addPreferito(cardData) {
    preferCards.push(cardData);
    console.log("Carta aggiunta ai Preferiti:", cardData);
    showPrefers();
  }

  function addCardtoArray() {
    const imageUrl = document.getElementById("imageUrl").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (imageUrl && title && description) {
      const cardObject = {
        imageUrl: imageUrl,
        title: title,
        description: description,
      };

      cardsArray.push(cardObject);
      createCard(cardObject);

      // Reset input
      document.getElementById("imageUrl").value = "";
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    } else {
      alert("Svuota i campi.");
    }
  }

  container.appendChild(createInput("imageUrl", "URL Immagine"));
  container.appendChild(createInput("title", "Titolo"));
  container.appendChild(createInput("description", "Descrizione"));

  const createButton = document.createElement("button");
  createButton.textContent = "Crea Card";
  createButton.addEventListener("click", addCardtoArray);
  container.appendChild(createButton);

  // Bottone "Mostra Preferiti"
  const showPreferBtn = document.createElement("button");
  showPreferBtn.textContent = "Mostra Preferiti";
  showPreferBtn.addEventListener("click", showPrefers);
  container.appendChild(showPreferBtn);

  // Contenitore per le carte preferite
  const prefersContainer = document.createElement("div");
  prefersContainer.id = "preferiti-container";
  container.appendChild(prefersContainer);

  // Funzione per mostrare le carte preferite
  function showPrefers() {
    prefersContainer.innerHTML = ""; // Pulisce il contenitore prima di visualizzare le carte preferite

    preferCards.forEach((preferito) => {
      const preferitoCard = document.createElement("div");
      preferitoCard.className = "preferito-card";
      preferitoCard.innerHTML = `<img src="${preferito.imageUrl}" alt="${preferito.title}"><h2>${preferito.title}</h2><p>${preferito.description}</p>`;
      prefersContainer.appendChild(preferitoCard);
    });

    prefersContainer.style.display = "block"; // Mostra il contenitore dei preferiti
  }

  // Esempio di utilizzo dell'array cardsArray (ad esempio, stampare le carte nella console)
  console.log("Carte create:", cardsArray);
});
