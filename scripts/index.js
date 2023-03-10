const buttonTel = document.querySelector('.header__tel-order'); //выбираем кнопку вызова звонка
const buttonClose = document.querySelector('.popup__button-close'); // выбираем кнопку закрытия попапа
const buttonMenu = document.querySelector('.header__button-menu'); //кнопка меню в мобильной версии
const btnSubmit = document.querySelector(".popup__button"); //кнопка отправки формы
const buttonMenuMob = document.querySelector('.popup__button-menu'); //кнопка мобильного меню
const buttonMap = document.querySelector('.header__map-button'); //кнопка "смотреть на карте"


const popupCall = document.querySelector('.popup__call'); //попап обратной связи
const popupMenu = document.querySelector('.popup__menu');
const popups = document.querySelectorAll('.popup__call'); //попапы обратной связи
const checkbox = document.getElementById("checkbox");
const maps = document.querySelectorAll('.header__map');
const map = document.querySelector('.header__map-yandex');
const popupYandex = document.querySelector('.popup__yandex'); //попап с картой
const popupFeedback = document.querySelector('.popup__feedback'); //попап успешной отправки телефона

let scrollpos = window.scrollY

const header = document.querySelector("header");
const tel = document.querySelector('.header__tel-call');
const telOrder = document.querySelector('.header__tel-order');
const telLink = document.querySelector('.header__tel-phone-link');


//Функция всплытия меню по скроллу на мобильной версии
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-white")
const remove_class_on_scroll = () => header.classList.remove("bg-white")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    // add_class_on_scroll()
    header.classList.add("bg-white")
    tel.classList.add("txt-black")
    telOrder.classList.add("txt-black")
    telLink.classList.add("txt-black")
    buttonMenu.classList.add("button-black")
  }
  else {
    // remove_class_on_scroll()
    header.classList.remove("bg-white")
    tel.classList.remove("txt-black")
    telOrder.classList.remove("txt-black")
    telLink.classList.remove("txt-black")
    buttonMenu.classList.remove("button-black")
  }

})


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

// Функция маски телефонного номера
const phone = document.getElementById("phone") //поиск инпута ввода телефонного номера

phone.oninput = (e) => {
  e.target.value = autoFormatPhoneNumber(e.target.value)
}

function autoFormatPhoneNumber(phoneNumberString) {
  try {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(7|)?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/);
    var intlCode = match[1] ? "+7 " : "";
    return [intlCode,
            match[2] ? "(": "",
            match[2],
            match[3] ? ") ": "",
            match[3],
            match[4] ? "-": "",
            match[4],
            match[5] ? "-": "",
            match[5]].join("")

  } catch(err) {
    return "";
  }
}

//Слушатели кнопок открытия и закрытия попапов
buttonTel.addEventListener('click', () => openPopups(popupCall));
btnSubmit.addEventListener('click', () => closePopups(popupCall));
btnSubmit.addEventListener('click', () => openPopups(popupFeedback));
buttonMenu.addEventListener('click', () => openPopups(popupMenu));
buttonMenuMob.addEventListener('click', () => closePopups(popupMenu));
buttonMap.addEventListener('click', () => openPopups(popupYandex));
