randomCountry = 0;
rndCountryPick = 0;
activeQuestCard = [];
answeredCountries = [];
radio = [];
radioCheck = [];
activeCard = 0;
randomCountryIndex = 0;
radioCheck = [];
errors = [];
okButton = 0;
correctRadio = 0;
ajaxApi = [
 ['Андорра', 'Андорра-ла-Велья'],
 ['ОАЭ', 'Абу-Даби'],
 ['Афганистан', 'Кабул'],
 ['Антигуа и Барбуда', 'Сент-Джонс'],
 ['Ангилья', 'Валли'],
 ['Албания', 'Тирана'],
 /*['Армения', 'Ереван'],
 ['Ангола', 'Луанда'],
 ['Аргентина', 'Буэнос-Айрес'],
 ['Австрия', 'Вена'],
 ['Австралия', 'Канберра'],
 ['Азербайджан', 'Баку'],
 ['Босния', 'Сараево'],
 ['Барбадос', 'Бриджтаун'],
 ['Бангладеш', 'Дакка'],
 ['Бельгия', 'Брюссель'],
 ['Буркина Фасо', 'Уагадугу'],
 ['Болгария', 'София'],
 ['Бахрейн', 'Манама'],
 ['Бурунди', 'Бужумбура'],
 ['Бенин', 'Порто-Ново'],
 ['Бермудские о-ва', 'Гамильтон'],
 ['Бруней', 'Бандар-Сери-Бегаван'],
 ['Боливия', 'Сукре'],
 ['Бразилия', 'Бразилиа'],
 ['Багамы', 'Нассау'],
 ['Бутан', 'Тхимпху'],
 ['Ботсвана', 'Габороне'],
 ['Беларусь', 'Минск'],
 ['Белиз', 'Бельмопан'],
 ['Канада', 'Оттава'],
 ['Демократическая Республика Конго', 'Киншаса'],
 ['Центральная Африканская Республика', 'Банги'],
 ['Швейцария', 'Берн'],
 ["Кот-д'Ивуар", 'Ямусукро'],
 ['Острова Кука', 'Аваруа'],
 ['Чили', 'Сантьяго'],
 ['Камерун', 'Яунде'],
 ['Китай', 'Пекин'],
 ['Колумбия', 'Богота'],
 ['Коста-Рика', 'Сан-Хосе'],
 ['Куба', 'Гавана'],
 ['Острова Зеленого Мыса', 'Прая'],
 ['Кипр', 'Никосия'],
 ['Чешская Республика', 'Прага'],
 ['Германия', 'Берлин'],
 ['Джибути', 'Джибути'],
 ['Дания', 'Копенгаген'],
 ['Доминиканская Республика', 'Санто-Доминго'],
 ['Алжир', 'Алжир'],
 ['Эквадор', 'Кито'],
 ['Эстония', 'Таллин'],
 ['Египет', 'Каир'],
 ['Западная Сахара', 'Эль-Аюн'],
 ['Эритрея', 'Асмэра'],
 ['Испания', 'Мадрид'],
 ['Эфиопия', 'Аддис-Абеба'],
 ['Финляндия', 'Хельсинки'],
 ['Фиджи', 'Сува'],
 ['Франция', 'Париж'],
 ['Габон', 'Либревиль'],
 ['Великобритания', 'Лондон'],
 ['Гренада', 'Сент-Джоржес'],
 ['Грузия', 'Тбилиси'],
 ['Французская Гвиана', 'Кайенна'],
 ['Гана', 'Аккра'],
 ['Гибралтар', 'Гибралтар'],
 ['Гренландия', 'Нуук'],
 ['Гамбия', 'Банжул'],
 ['Гвинея', 'Конакри'],
 ['Гваделупа', 'Бас-Тер'],
 ['Экваториальная Гвинея', 'Малабо'],
 ['Греция', 'Афины'],
 ['Гватемала', 'Гватемала'],
 ['Гуам', 'Аганья'],
 ['Гвинея-Биссау', 'Бисау'],
 ['Гайана', 'Джорджтаун'],
 ['Гонконг', 'Гонконг'],
 ['Гондурас', 'Тегусигальпа'],
 ['Хорватия', 'Загреб'],
 ['Гаити', 'Порт-о-Пренс'],
 ['Венгрия', 'Будапешт'],
 ['Индонезия', 'Джакарта'],
 ['Ирландия', 'Дублин'],
 ['Индия', 'Нью-Дели'],
 ['Ирак', 'Багдад'],
 ['Иран', 'Тегеран'],
 ['Исландия', 'Рейкьявик'],
 ['Италия', 'Рим'],
 ['Ямайка', 'Кингстон'],
 ['Иордания', 'Амман'],
 ['Япония', 'Токио'],
 ['Кения', 'Найроби'],
 ['Кыргызстан', 'Бишкек'],
 ['Камбоджа', 'Пномпень'],
 ['Кирибати', 'Южная Тарава'],
 ['Северная Корея', 'Пхеньян'],
 ['Южная Корея', 'Сеул'],
 ['Кувейт', 'Кувейт'],
 ['Каймановы Острова', 'Джоржтаун'],
 ['Казахстан', 'Астана'],
 ['Лаос', 'Вьентьян'],
 ['Ливан', 'Бейрут'],
 ['Лихтенштейн', 'Вадуц'],
 ['Шри-Ланка', 'Коломбо'],
 ['Либерия', 'Монровия'],
 ['Лесото', 'Масеру'],
 ['Литва', 'ВИЛЬНЮС'],
 ['Люксембург', 'Люксембург'],
 ['Латвия', 'Рига'],
 ['Ливия', 'Триполи'],
 ['Марокко', 'Рабат'],
 ['Монако', 'Монако'],
 ['Молдова', 'Кишинев'],
 ['Черногория', 'Подгорица'],
 ['Мадагаскар', 'Антананариву'],
 ['Македония', 'Скопье'],
 ['Мали', 'Бамако'],
 ['Мьянма', 'Нейпьидо'],
 ['Монголия', 'Улан-Батор'],
 ['Макао', 'Макао'],
 ['Мартиника', 'Форт-де-Франс'],
 ['Мавритания', 'Нуакшот'],
 ['Мальта', 'Валлетта'],
 ['Маврикий', 'Порт-Луи'],
 ['Мальдивские о-ва', 'Мале'],
 ['Малави', 'Лилонгве'],
 ['Мексика', 'Мехико'],
 ['Малайзия', 'Куала-Лумпур'],
 ['Мозамбик', 'Мапуту'],
 ['Намибия', 'Виндхук'],
 ['Новая Каледония', 'Нумеа'],
 ['Нигерия', 'Ниамей'],
 ['Нигерия', 'Абуджа'],
 ['Никарагуа', 'Манагуа'],
 ['Нидерланды', 'Амстердам'],
 ['Норвегия', 'Осло'],
 ['Непал', 'Катманду'],
 ['Новая Зеландия', 'Веллингтон'],
 ['Оман', 'Маскат'],
 ['Панама', 'Панама'],
 ['Перу', 'Лима'],
 ['Папуа – Новая Гвинея', 'Порт-Морсби'],
 ['Филиппины', 'Манила'],
 ['Пакистан', 'Исламабад'],
 ['Польша', 'Варшава'],
 ['Пуэрто-Рико', 'Сан-Хуан'],
 ['Португалия', 'Лиссабон'],
 ['Парагвай', 'Асунсьон'],
 ['Катар', 'Доха'],
 ['Румыния', 'Бухарест'],
 ['Сербия', 'Белград'],
 ['Россия', 'Москва'],
 ['Руанда', 'Кигали'],
 ['Саудовская Аравия', 'Эр-Рияд'],
 ['Соломонские острова', 'Хониара'],
 ['Сейшельские о-ва', 'Виктория'],
 ['Судан', 'Хартум'],
 ['Швеция', 'Стокгольм'],
 ['Сингапур', 'Сингапур'],
 ['Остров Святой Елены', 'Джеймстаун'],
 ['Словения', 'Любляна'],
 ['Словакия', 'Братислава'],
 ['Сьерра-Леоне', 'Фритаун'],
 ['Сан-Марино', 'Сан-Марино'],
 ['Сенегал', 'Дакар'],
 ['Сомали', 'Могадишу'],
 ['Суринам', 'Парамарибо'],
 ['Южный Судан', 'Джуба'],
 ['Сан-Томе и Принсипе', 'Сан-Томе'],
 ['Сальвадор', 'Сан-Сальвадор'],
 ['Сирийская Арабская Респ.', 'Дамаск'],
 ['Свазиленд', 'Мбабане'],
 ['Чад', 'Нджамена'],
 ['Того', 'Ломе'],
 ['Таиланд', 'Бангкок'],
 ['Таджикистан', 'Душанбе'],
 ['Восточный Тимор', 'Дили'],
 ['Туркменистан', 'Ашхабад'],
 ['Тунис', 'Тунис'],
 ['Тонга', 'Нукуалофа'],
 ['Турция', 'Анкара'],
 ['Тринидад и Тобаго', 'Порт-оф-Спейн'],
 ['Тайвань', 'Тайбэй'],
 ['Танзания', 'Додома'],
 ['Украина', 'Киев'],
 ['Уганда', 'Кампала'],
 ['США', 'Вашингтон'],
 ['Уругвай', 'Монтевидео'],
 ['Узбекистан', 'Ташкент'],
 ['Ватикан', 'Ватикан'],
 ['Венесуэла', 'Каракас'],
 ['Вьетнам', 'Ханой'],
 ['Вануату', 'Порт-Вила'],
 ['Самоа', 'Апиа'],
 ['Йемен', 'Сана'],
 ['ЮАР', 'Претория'],
 ['Замбия', 'Лусака'],
 ['Зимбабве', 'Хараре'], */
];

country = document.querySelector('h1');
capitals = document.querySelectorAll('.input');
radio = document.querySelectorAll('.form-control');
okButton = document.querySelector('#OK')
nextButton = document.querySelector('#next')
countries = ajaxApi.slice();
answeredCountries = [];

function correctErrors() {
 document.querySelector('#result').style.display = 'none'
 document.querySelector('#main').style.display = 'block'
 countries = [];
 answeredCountries = [];
 activeQuestCard = [];

 for (i = 0; i < errors.length; i++) {
  countries[i] = ajaxApi[errors[i]];
 }
 console.log(errors);
 console.log(countries);
 errors = [];
 nextButton();
}

nextButton = function () {
 if (answeredCountries.length == countries.length) setTimeout(() => getFinalResult(), 500);
 else startCard();
}

startCard();

function startCard() {
 document.querySelector('#OK').disabled = false;
 document.querySelector('#next').disabled = true;
 country.style.color = 'rgb(0, 0, 0)'
 rndCountryPick = Math.round(Math.random() * 3);

 setRandomCountries();
 country.innerHTML = countries[randomCountryIndex][0];

 for (let i = 0; i < 4; i++) {
  radio[i].checked = false;
  radioCheck[i] = '';
  setRandomCapitals(i)
  capitals[i].innerHTML = activeQuestCard[i].toUpperCase();
 }
}

function setRandomCountries() {

 randomCountryIndex = (Math.round(Math.random() * (countries.length - 1)));

 if (answeredCountries.includes(randomCountryIndex) == true) {


  setRandomCountries();
 } else randomCountry = (countries[randomCountryIndex][0]);
}

function setRandomCapitals(i) {
 let tempRandomCapital = ajaxApi[Math.round(Math.random() * (ajaxApi.length - 1))][1];
 if (i == rndCountryPick) {
  console.log('rndCountryPick: ', rndCountryPick);
  activeQuestCard[i] = countries[randomCountryIndex][1];

  console.log('randomCountryIndex: ', randomCountryIndex);
  console.log('ajaxApi[randomCountryIndex][0]: ', ajaxApi[randomCountryIndex][0]);
  console.log('ajaxApi[randomCountryIndex][1]: ', ajaxApi[randomCountryIndex][1]);
  console.log('activeQuestCard[i]: ', activeQuestCard[i]);

 } else {
  if ((activeQuestCard.includes(tempRandomCapital) == true) || (tempRandomCapital == countries[randomCountryIndex][1])) setRandomCapitals(i);
  else activeQuestCard[i] = tempRandomCapital;

 }
}

function checkInput() {
 document.querySelector('#OK').disabled = true;
 document.querySelector('#next').disabled = false;
 answeredCountries.push([randomCountryIndex][0]);

 for (let i = 0; i < 4; i++) {
  radioCheck[i] = radio[i].checked;
  if (radioCheck[i] == true) correctRadio = i;
 }
 if (activeQuestCard[correctRadio] == activeQuestCard[rndCountryPick])
  country.style.color = 'rgb(0, 255, 0)';
 else {
  country.style.color = 'rgb(255, 0, 0)';
  errors.push([randomCountryIndex][0]);
 }
}

function getFinalResult() {
 document.querySelector('#OK').disabled = true;
 document.querySelector('#next').disabled = true;
 document.querySelector('#result').style.display = 'block'
 document.querySelector('#main').style.display = 'none'
 document.querySelector('#res1').innerHTML = 'Всего: ' + countries.length;
 document.querySelector('#res2').innerHTML = 'Верно: ' + (countries.length - errors.length);
 document.querySelector('#res3').innerHTML = 'Не верно: ' + errors.length;
 if (errors.length == 0) document.querySelector('#correctErrors').style.display = 'none'
}

function startNew() {
 location.reload();
};