'use strict'

function toggleMenu() {
      var menuOpen = document.body.classList.toggle('menu-open')
      if (menuOpen) {
            document.querySelector('.menu-btn').innerText = 'X';
      } else {
            document.querySelector('.menu-btn').innerText = '☰';
      }
}


function openReadModal() {
      document.body.classList.add('modal-open')

}


function closeReadModal(ev) {
      ev.stopPropagation()
      // ev.preventDefault()
      document.body.classList.remove('modal-open')
      // document.querySelector('body').classList.remove('modal-open')
      // document.body.classList.remove('modal-open');
}


function onJornalClick(ev) {
      ev.preventDefault()
      var menuJornal = document.querySelector('.jornal-drop-down').classList.toggle('openJornal')
      
}

