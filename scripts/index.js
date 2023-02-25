const buttonTel = document.querySelector('.header__tel-order'); //выбираем кнопку вызова звонка
const buttonClose = document.querySelector('.popup__button-close'); // выбираем кнопку закрытия попапа

const popupCall = document.querySelector('.popup__call'); //попап нового места
const popups = document.querySelectorAll('.popup__call'); //попап нового места
const checkbox = document.getElementById("checkbox");
const btnSubmit = document.querySelector(".popup__button");
const maps = document.querySelectorAll('.header__map');
const map = document.querySelector('.header__map-yandex');
const headerAddress = document.querySelector('.header__address'); //блок в меню с адресом
const headerMap = document.querySelector('.header__map'); //блок в меню с картой
const headerCalc = document.querySelector('.header__calc'); //блок в меню с калькулятором
const headerSocial = document.querySelector('.header__social'); //блок в меню с соцсетями
const headerSecond = document.querySelector('.header__second'); //блок меню навигации


// Функция проверки чекбокса
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        btnSubmit.removeAttribute("disabled");
        btnSubmit.classList.add("popup__button_active");
    } else {
        btnSubmit.setAttribute("disabled", true);
        btnSubmit.classList.remove("popup__button_active");
    }
});

//добавляем класс по ховеру к карте
maps.forEach((item) => {
  item.addEventListener('mouseover', () =>{
    map.classList.add('active')
  });
  item.addEventListener('mouseleave', () => {
    function remove() {
      map.classList.remove('active')
    }
    setTimeout(remove, 1500)
  });
});




// //Функция открытия попапа
function openPopups(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escapeHandler);
}

// //функция закрытия попапа
function closePopups(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeHandler);
}


// //Закртыие по клику на overlay
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      overlayHandler(evt, popup)});
})


// //функция отслеживающая нажатие на оверлей и кнопку закрытия
function overlayHandler(evt, popup) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopups(popup);
  } else if (evt.target.classList.contains('popup__button-close')) {
    closePopups(popup);
  }
}

// // //функция закрытия попапа по нажатию Escape
function escapeHandler(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopups(openedPopup);
  }
}

//Добавление классов к блокам при изменении ширины экрана
window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    // 0...768
    headerAddress.classList.add('desktop');
  } else {
    // 769...Inf
    headerAddress.classList.remove('desktop');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    // 0...768
    headerMap.classList.add('desktop');
  } else {
    // 769...Inf
    headerMap.classList.remove('desktop');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    // 0...768
    headerCalc.classList.add('desktop');
  } else {
    // 769...Inf
    headerCalc.classList.remove('desktop');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    // 0...768
    headerSocial.classList.add('desktop');
  } else {
    // 769...Inf
    headerSocial.classList.remove('desktop');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    // 0...768
    headerSecond.classList.add('desktop');
  } else {
    // 769...Inf
    headerSecond.classList.remove('desktop');
  }
});

//Слушатели кнопок открытия и закрытия попапов
buttonTel.addEventListener('click', () => openPopups(popupCall));
btnSubmit.addEventListener('click', () => closePopups(popupCall));

