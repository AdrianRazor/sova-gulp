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

  // Coins buy/sell
  const coinBox = document.querySelectorAll(".start__coins");
  const coinListBox = document.querySelectorAll(".start__list");

  if (coinBox && coinListBox) {
    coinBox.forEach((box, boxIndex) => {
      const coinBtn = box.querySelectorAll(".btn--small");

      if (coinBtn) {
        coinBtn.forEach((btn, btnIndex) => {
          btn.addEventListener("click", () => {
            const itemsList =
              coinListBox[boxIndex].querySelectorAll(".start__item");

            itemsList.forEach((el) => el.classList.remove("active"));
            coinBtn.forEach((el) => el.classList.remove("active"));

            btn.classList.add("active");
            itemsList[btnIndex].classList.add("active");
          });
        });
      }
    });
    coinListBox.forEach((box, boxIndex) => {
      const coinItem = box.querySelectorAll(".start__item");

      if (coinItem) {
        coinItem.forEach((btn, btnIndex) => {
          btn.addEventListener("click", () => {
            const coinBtn = coinBox[boxIndex].querySelectorAll(".btn--small");

            coinBtn.forEach((el) => el.classList.remove("active"));
            coinItem.forEach((el) => el.classList.remove("active"));

            btn.classList.add("active");
            coinBtn[btnIndex].classList.add("active");
          });
        });
      }
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

  console.log("DOM fully loaded and parsed");
});
