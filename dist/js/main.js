document.addEventListener("DOMContentLoaded",function(e){const t=document.documentElement,c=document.querySelector(".header"),l=c.querySelector(".burger"),a=(c&&l&&l.addEventListener("click",()=>{c.classList.toggle("open"),l.classList.toggle("open"),t.classList.toggle("lock")}),document.querySelectorAll(".start__coins")),o=document.querySelectorAll(".start__list");a&&o&&(a.forEach((e,l)=>{const s=e.querySelectorAll(".btn--small");s&&s.forEach((t,c)=>{t.addEventListener("click",()=>{var e=o[l].querySelectorAll(".start__item");e.forEach(e=>e.classList.remove("active")),s.forEach(e=>e.classList.remove("active")),t.classList.add("active"),e[c].classList.add("active")})})}),o.forEach((e,l)=>{const s=e.querySelectorAll(".start__item");s&&s.forEach((t,c)=>{t.addEventListener("click",()=>{var e=a[l].querySelectorAll(".btn--small");e.forEach(e=>e.classList.remove("active")),s.forEach(e=>e.classList.remove("active")),t.classList.add("active"),e[c].classList.add("active")})})}));var s=document.querySelectorAll(".accordion__item");s&&s.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("open")})}),console.log("DOM fully loaded and parsed")});