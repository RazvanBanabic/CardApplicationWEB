async function getCard(){

    let response = await fetch("http://localhost:8080/oneCard");
    let card = await response.json();

    const cardType = document.getElementById("Type");
    const cardValue = document.getElementById("Value");
    cardType.value = card.cardType;
    cardValue.value = card.cardValue;

}

async function getCards(){
    let response = await fetch("http://localhost:8080/getSomeCards");
    let cardList = await response.json();

    GenerateCardTable(cardList);
}


function GenerateCardTable(cardList){
    const table = document.getElementById("cardsTable");
    for(const card of cardList){
        const row = document.createElement("tr");
        const typeTd = document.createElement("td");
        typeTd.innerHTML = card.cardType;
        const valueTd = document.createElement("td");
        valueTd.innerHTML = card.cardValue;
        row.appendChild(typeTd);
        row.appendChild(valueTd);
        table.appendChild(row);
    }
}

function initPage(){
    const cardButton = document.getElementById("getCardButton");
    cardButton.addEventListener("click", getCard);
    const someCardsButton = document.getElementById("getSomeCardsButton");
    someCardsButton.addEventListener("click", getCards);
}

window.onload = (event) => {
    initPage();
};