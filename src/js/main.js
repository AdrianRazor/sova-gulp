document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.documentElement;

  // Header
  const header = document.querySelector(".header");
  const burger = header.querySelector(".burger");

  if (header && burger) {
    burger.addEventListener("click", () => {
      header.classList.toggle("open");
      burger.classList.toggle("open");
      root.classList.toggle("lock");
    });
  }

  // Accordion
  const accordion = document.querySelectorAll(".accordion__item");
  if (accordion) {
    accordion.forEach((acc) => {
      acc.addEventListener("click", () => {
        acc.classList.toggle("open");
      });
    });
  }

  // --------- Calculator ---------
  let coinSellChosen = "ada";
  let coinGetChosen = "ada";

  // Rate
  const rate = {
    ada: 0.25,
    algo: 1.05,
    ark: 0.532322,
    atom: 3.8,
    btc: 26563,
    btg: 12.51,
    dash: 26.69,
    doge: 0.062,
    dgb: 0.0064,
    eth: 1591.88,
    ltc: 64.57,
    rvn: 0.0151,
    sol: 0.27,
    trx: 0.084,
    usdt: 1.000057,
    vet: 0.017,
    xlm: 0.11,
    xmr: 143.24,
    xtz: 0.660894,
    zec: 26.47,
  };

  // Coins buy/sell
  const coinSellBtn = document.querySelectorAll(".btn--small.sell");
  const coinSellItem = document.querySelectorAll(".start__item.sell");
  const coinGetBtn = document.querySelectorAll(".btn--small.get");
  const coinGetItem = document.querySelectorAll(".start__item.get");

  if (coinSellBtn && coinSellItem && coinGetBtn && coinGetItem) {
    coinSellBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        coinBtnClick(coinSellItem, coinSellBtn, index);
        coinSellChosen = btn.innerHTML.toLowerCase();
        calculatingSell();
      });
    });

    coinSellItem.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        coinBtnClick(coinSellItem, coinSellBtn, index);
        coinSellChosen = btn.innerHTML.toLowerCase();
        calculatingSell();
      });
    });

    coinGetBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        coinBtnClick(coinGetBtn, coinGetItem, index);
        coinGetChosen = btn.innerHTML.toLowerCase();
        calculatingGet();
      });
    });

    coinGetItem.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        coinBtnClick(coinGetBtn, coinGetItem, index);
        coinGetChosen = btn.innerHTML.toLowerCase();
        calculatingGet();
      });
    });
  }

  function coinBtnClick(arrayTop, arrayBottom, i) {
    arrayTop.forEach((el) => el.classList.remove("active"));
    arrayTop[i].classList.add("active");

    arrayBottom.forEach((el) => el.classList.remove("active"));
    arrayBottom[i].classList.add("active");
  }

  // Input binding
  const inputOut = document.querySelector("#moneyOut");
  const inputIn = document.querySelector("#moneyIn");

  if (inputOut) {
    inputOut.addEventListener("input", () => {
      calculatingSell();
    });
  }

  if (inputIn) {
    inputIn.addEventListener("input", () => {
      calculatingGet();
    });
  }

  function calculatingSell() {
    let sum = (rate[coinSellChosen] / rate[coinGetChosen]) * inputOut.value;
    inputIn.value = Math.round((sum + Number.EPSILON) * 10000) / 10000;
  }

  function calculatingGet() {
    let sum = (rate[coinGetChosen] / rate[coinSellChosen]) * inputIn.value;
    inputOut.value = Math.round((sum + Number.EPSILON) * 10000) / 10000;
  }

  console.log("DOM fully loaded and parsed");
});
