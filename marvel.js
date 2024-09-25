const rarity = ["common", "rare", "epic", "legendary"];
const sellBtn = document.querySelector(".sell-btn");
const undoBtn = document.querySelector(".undo-btn");
const sellSelectedBtn = document.querySelector(".sell-selected-btn");
  const tradeButton = document.getElementById('trade-btn');
  const undoButton = document.getElementById('undo-trade-btn');
  const confirmButton = document.getElementById('confirm-btn');
let randomCards;
let cardsHome = JSON.parse(localStorage.getItem("cardsHome")) || [];
let cardHomeAmount = localStorage.getItem("card-home") ? parseInt(localStorage.getItem("card-home")) : 0;
let credits = localStorage.getItem("credits") ? parseInt(localStorage.getItem("credits")) : 50000;

document.addEventListener("DOMContentLoaded", function() {
  updateDisplay();
  displayCardsHome(cardsHome);
  getFromMarvel("https://gateway.marvel.com/v1/public/characters").then(results => {
    document.getElementById("copper").querySelector(".buy").addEventListener("click", () => buyPack("copper", results));
    document.getElementById("bronze").querySelector(".buy").addEventListener("click", () => buyPack("bronze", results));
    document.getElementById("silver").querySelector(".buy").addEventListener("click", () => buyPack("silver", results));
    document.getElementById("gold").querySelector(".buy").addEventListener("click", () => buyPack("gold", results));
  });
});

function updateCardsHome() {
  localStorage.setItem("cardsHome", JSON.stringify(cardsHome));
  localStorage.setItem("card-home", cardHomeAmount);
  displayCardsHome(cardsHome);
}

function updateDisplay() {
  localStorage.setItem("credits", credits);
  document.getElementById("credits").innerHTML = credits;
}

function getFromMarvel(url, query = "") {
  var MD5 = function(d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0; for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
  var timestamp = Date.now();
  const publicApiKey = "b620e750d0cfcaa8ff3b70679002bd0b"
  const privateApiKey = "afe0fa822ec6013974fe93dcbbee931147b02a24"
  var parameters = `ts=${timestamp}&apikey=${publicApiKey}&hash=${MD5(timestamp + privateApiKey + publicApiKey)}&`

  return fetch(`https://gateway.marvel.com/v1/public/characters?${parameters}${query}`)
    .then(response => response.json())
    .then(data => {
      const results = data.data.results.map(character => ({
        name: character.name,
        description: character.description,
        image: character.thumbnail ? `${character.thumbnail.path}.${character.thumbnail.extension}` : null,
        series: character.series.items.map(item => item.name),
        events: character.events.items.map(item => item.name),
        comics: character.comics.items.map(item => item.name),
      }));
      return results;
    })
    .catch(error => console.log('error', error));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleShow() {
  document.querySelector(".details").classList.toggle("show");
}

function random5(results, minRarity, maxRarity) {
  randomCards = [];
  for (let i = 0; i < 5; i++) {
    let randomRarityIndex = getRandomInt(minRarity, maxRarity);
    let randomCard = results[getRandomInt(0, results.length - 1)];
    randomCard.rarity = rarity[randomRarityIndex];
    randomCards.push(randomCard);
    console.log(randomCards);
  }
  cardsHome = JSON.parse(localStorage.getItem("cardsHome")) || [];
  cardsHome = cardsHome.concat(randomCards);
  localStorage.setItem("cardsHome", JSON.stringify(cardsHome));

  return randomCards;
}

function buyPack(item, results) {
  const rarityRanges = {
    copper: { min: 0, max: 1 },
    bronze: { min: 0, max: 2 },
    silver: { min: 1, max: 3 },
    gold: { min: 2, max: 3 },
  };

  switch (item) {
    case "copper":
      if (credits >= 500) {
        alert("Purchased Successfully");
        credits -= 500;
        updateDisplay();
        random5(results, rarityRanges.copper.min, rarityRanges.copper.max);
        displayCardsPack(randomCards);
      } else {
        alert("Not enough Credits");
      }
      break;
    case "bronze":
      if (credits >= 1000) {
        alert("Purchased Successfully");
        credits -= 1000;
        updateDisplay();
        random5(results, rarityRanges.bronze.min, rarityRanges.bronze.max);
        displayCardsPack(randomCards);
        console.log(randomCards);
      } else {
        alert("Not enough Credits");
      }
      break;
    case "silver":
      if (credits >= 2000) {
        alert("Purchased Successfully");
        credits -= 2000;
        updateDisplay();
        random5(results, rarityRanges.silver.min, rarityRanges.silver.max);
        displayCardsPack(randomCards);
      } else {
        alert("Not enough Credits");
      }
      break;
    case "gold":
      if (credits >= 3000) {
        alert("Purchased Successfully");
        credits -= 3000;
        updateDisplay();
        random5(results, rarityRanges.gold.min, rarityRanges.gold.max);
        displayCardsPack(randomCards);
      } else {
        alert("Not enough Credits");
      }
      break;
  }
}

function buyCredits(item) {
  switch (item) {
    case "copper":
      alert("Purchased Successfully");
      credits += 500;
      updateDisplay();
      break;
    case "bronze":
      alert("Purchased Successfully");
      credits += 1000;
      updateDisplay();
      break;
    case "silver":
      alert("Purchased Successfully");
      credits += 2000;
      updateDisplay();
      break;
    case "gold":
      alert("Purchased Successfully");
      credits += 3000;
      updateDisplay();
      break;
  }
}

function displayCardsPack(randomCards) {
  const container = document.querySelector(".preview-opened");
  container.innerHTML = "";

  randomCards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    switch (card.rarity) {
      case "common":
        cardElement.classList.add("common");
        break;
      case "rare":
        cardElement.classList.add("rare");
        break;
      case "epic":
        cardElement.classList.add("epic");
        break;
      case "legendary":
        cardElement.classList.add("legendary");
        break;
    }
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p>${card.rarity}</p>
      <button class="selection-button d-none" onclick=selected()>x<button>`
    container.appendChild(cardElement);
  });
}

function displayCardsHome(cardsHome) {
  try {
    const container = document.querySelector(".card-home-container");
    container.innerHTML = "";
    cardsHome.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card-home-item", "card");
      switch (card.rarity) {
        case "common":
          cardElement.classList.add("common");
          break;
        case "rare":
          cardElement.classList.add("rare");
          break;
        case "epic":
          cardElement.classList.add("epic");
          break;
        case "legendary":
          cardElement.classList.add("legendary");
          break;
      }
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.name}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-name">${card.name}</h5>
          <a onclick="showCardDetails(${JSON.stringify(card).replace(/"/g, '&quot;')})" class="btn btn-primary info-button">Info</a>
        </div>`;
      container.appendChild(cardElement);
    });

    document.querySelector(".card-home").innerHTML = cardsHome.length ?? 0;
  } catch (error) {
    console.log(error);
    return;
  }
}

function showCardDetails(card) {
  document.querySelector(".details").classList.add("show");
  document.getElementById("name").innerText = card.name;
  document.getElementById("description").innerText = card.description || "No description available.";
  document.getElementById("series").innerText = card.series.length ? `Series: ${card.series.join(', ')}` : "No series information.";
  document.getElementById("events").innerText = card.events.length ? `Events: ${card.events.join(', ')}` : "No events information.";
  document.getElementById("comics").innerText = card.comics.length ? `Comics: ${card.comics.join(', ')}` : "No comics information.";
  document.getElementById("img").src = card.image || "default_image_url";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sell() {
  const cards = document.querySelectorAll('.card-home-item');
  cards.forEach(card => {
    if (!card.querySelector('.button-sell')) {
      card.classList.add("selected");
      sellBtn.classList.add("d-none");
      undoBtn.classList.add("d-flex");
      undoBtn.classList.remove("d-none");
      sellSelectedBtn.classList.add("d-flex");
      sellSelectedBtn.classList.remove("d-none");
      card.innerHTML += '<a onclick="selected(this.parentNode)" class="btn btn-secondary button-sell">X</a>';
    }
  });
}

function selected(card) {
  const selector = card.querySelector('a.button-sell');
  selector.classList.toggle("button-sell-selected");
  card.classList.toggle("selected");
}

function undo() {
  const cards = document.querySelectorAll('.card-home-item');
  cards.forEach(card => {
    card.classList.remove("selected");
    sellBtn.classList.remove("d-none");
    sellBtn.classList.add("d-flex");
    undoBtn.classList.add("d-none");
    sellSelectedBtn.classList.add("d-none");
    const selector = card.querySelector('a.button-sell');
    if (selector) {
      card.removeChild(selector);
    }
  });
}

function sellSelected() {
  const selectedButtons = document.querySelectorAll('a.button-sell-selected');
  selectedButtons.forEach(button => {
    const card = button.closest('.card-home-item');
    if (card) {
      const cardName = card.querySelector('.card-name').innerText;
      if (card.classList.contains('common')) {
        credits += 100;
      } else if (card.classList.contains('rare')) {
        credits += 200;
      } else if (card.classList.contains('epic')) {
        credits += 600;
      } else if (card.classList.contains('legendary')) {
        credits += 1000;
      }
      card.remove();
            cardsHome = cardsHome.filter(c => c.name !== cardName);
    }
  });
  updateDisplay();
  updateCardsHome();
  sellBtn.classList.remove("d-none");
  sellBtn.classList.add("d-flex");
  undoBtn.classList.add("d-none");
  sellSelectedBtn.classList.add("d-none");
}

//registrazione

document.getElementById('indexBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  if (name  && password) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userPassword', password);

    alert('Registrazione completata con successo!');
    window.location.href = "home.html";
  } else {
    alert('Compila tutti i campi!');
  }
});

function checkUserRegistration() {
  const userName = localStorage.getItem('userName');
  const userPassword = localStorage.getItem('userPassword');

  const indexBtn = document.getElementById('indexBtn');

  if (userName && userPassword) {
    indexBtn.innerText = 'Login';
    indexBtn.addEventListener('click', function() {
      window.location.href = "home.html";
    });
  } else {
    indexBtn.innerText = 'Registrati';
    indexBtn.addEventListener('click', function() {
      window.location.href = "home.html";
    });

  }
}

window.onload = checkUserRegistration;



//scambia

function trade() {
  const commonCount = selectedCards.filter(card => card.classList.contains("common")).length; 
  const rareCount = selectedCards.filter(card => card.classList.contains("rare")).length;
  const epicCount = selectedCards.filter(card => card.classList.contains("epic")).length;
  const legendaryCount = selectedCards.filter(card => card.classList.contains("legendary")).length;
 
  tradeButton.classList.remove('d-flex');
  tradeButton.classList.add('d-none');
  undoButton.classList.remove('d-none');
  undoButton.classList.add('d-flex');
  tradeSelectedButton.classList.remove('d-none');
  tradeSelectedButton.classList.add('d-flex');


  const cards = document.querySelectorAll('.card-home-item');

  cards.forEach(card => {

    if (!card.querySelector('.button-trade')) {

      card.innerHTML += '<a onclick="selectCard(this.parentNode)" class="btn btn-secondary button-trade">X</a>';

    }

  });

  if (selectedCards.length === 1 && selectedCards[0].classList.contains("rare")) {

    if (commonCount >= 2) {
      confirmTrade("rare", "common", 2);
    } else if (rareCount >= 1) {
      confirmTrade("rare", "rare", 1);
    } else {
      alert('Non hai inserito sufficienti carte per effettuare lo scambio')
    }
  }
  if (selectedCards.length === 1 && selectedCards[0].classList.contains("epic")) {
    if (rareCount >= 2) {
      confirmTrade("epic", "rare", 2);
    } else if (rareCount >= 1 && commonCount >= 2) {
      confirmTrade("epic", "rare_common", { rare: 1, common: 2 });
    } else if (commonCount >= 4) {
      confirmTrade("epic", "common", 4);
    } else {
      alert('Non hai inserito sufficienti carte per effettuare lo scambio')
    }
  }
  if (selectedCards.length === 1 && selectedCards[0].classList.contains("legendary")) {
    if (epicCount >= 2) {
      confirmTrade("legendary", "epic", 2);
    } else if (rareCount >= 4) {
      confirmTrade("legendary", "rare", 4);
    } else if (commonCount >= 10) {
      confirmTrade("legendary", "common", 10);
    } else {
      alert('Non hai inserito sufficienti carte per effettuare lo scambio')
    }
  }
  if (selectedCards.length === 1 && selectedCards[0].classList.contains("legendary")) {
    if (legendaryCount == 1) {
      confirmTrade("legendary", "legendary", 1)
    } else {
      alert('Non hai inserito sufficienti carte per effettuare lo scambio')
    }
  }
  const tradeCards = random5trade(results, 1, 3);
  console.log('Generated trade cards:', tradeCards); 
  displayCardstrade(tradeCards);

}

function confirmTrade(cardType, cardTypeToTrade, cardCount) {
  const newCard = generateNewCard();
  cardsHome.push(newCard);
  tradeSelected();
  updateCardsHome();
  const tradeButton = document.getElementById('trade-btn');
  tradeButton.classList.remove('d-none');
  tradeButton.classList.add('d-flex');
  const undoButton = document.getElementById('undo-trade-btn');
  undoButton.classList.add('d-none');
  undoButton.classList.remove('d-flex');
  const confirmButton = document.getElementById('confirm-btn');
  confirmButton.classList.add('d-none');
  confirmButton.classList.remove('d-flex');


  const cards = document.querySelectorAll('.card-home-item');

  cards.forEach(card => {
    const tradeButton = card.querySelector('.button-trade');
    if (tradeButton) {
   card.removeChild(tradeButton);
    }
  });
}

function getSelectedCards() {
  const selectedCards = [];
  const cards = document.querySelectorAll('.card-home-item');
  cards.forEach(card => {
    if (card.querySelector('.button-trade-selected')) {
      selectedCards.push(card);
    }
  });
  return selectedCards;
}

function selectCard(card) {
  const selector = card.querySelector('.button-trade');
  selector.classList.toggle("button-trade-selected");
  card.classList.toggle("selected");
}

function displayCardstrade(tradeCards) {
  const tradeContainer = document.getElementById('trade-cards-container');
  tradeContainer.innerHTML = "";
  tradeCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    switch (card.rarity) {
      case "common":
        cardElement.classList.add("common");
        break;
      case "rare":
        cardElement.classList.add("rare");
        break;
      case "epic":
        cardElement.classList.add("epic");
        break;
      case "legendary":
        cardElement.classList.add("legendary");
        break;
    }
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p>${card.rarity}</p>
    `;
    tradeContainer.appendChild(cardElement);
  });
}

function random5trade(results, minRarity, maxRarity) {
  const tradeCards = [];
  for (let i = 0; i < 5; i++) {
    const randomRarityIndex = getRandomInt(minRarity, maxRarity);
    const randomCard = results[getRandomInt(0, results.length - 1)];
    randomCard.rarity = rarity[randomRarityIndex];
    tradeCards.push(randomCard);
  }
  return tradeCards;
}
function undoTrade() {
  tradeButton.classList.remove('d-none');
  tradeButton.classList.add('d-flex');
  undoButton.classList.add('d-none');
  undoButton.classList.remove('d-flex');
  confirmButton.classList.add('d-none');
  confirmButton.classList.remove('d-flex');
  const cards = document.querySelectorAll('.card-home-item');
  cards.forEach(card => {
    const tradeButton = card.querySelector('.button-trade');
    if (tradeButton) {
   card.removeChild(tradeButton);
    }

  });

}
function tradeSelected() {
  const selectedCards = getSelectedCards();
  selectedCards.forEach(card => {
 const cardName = card.querySelector('.card-name').innerText;
 cardsHome = cardsHome.filter(c => c.name !== cardName);

  });

}