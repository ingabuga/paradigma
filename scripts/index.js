const buttonTel = document.querySelector('.header__tel-order'); //выбираем кнопку вызова звонка
const buttonClose = document.querySelector('.popup__button-close'); // выбираем кнопку закрытия попапа

const popupCall = document.querySelector('.popup__call'); //попап нового места
const popups = document.querySelectorAll('.popup__call'); //попап нового места


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


buttonTel.addEventListener('click', () => openPopups(popupCall));
