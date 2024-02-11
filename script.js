"use strict";

const mainBtn = document.querySelector('.mobile-nav-btn');
const header = document.querySelector('.header-content')
  
mainBtn.addEventListener('click', () => {
    header.classList.toggle('active')
})