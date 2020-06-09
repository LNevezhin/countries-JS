rndCountryPick = 0;
activeQuestCard = [];
answeredCountries = [];
randomCountryIndex = 0;
errors = [];
value = 0;
ajaxApi = [
  ['Андорра', 'Андорра-ла-Велья'],
  ['ОАЭ', 'Абу-Даби'],
  ['Афганистан', 'Кабул'],
  ['Антигуа и Барбуда', 'Сент-Джонс'],
  ['Ангилья', 'Валли'],
  ['Албания', 'Тирана'],
  ['Армения', 'Ереван'],
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
  ['Зимбабве', 'Хараре'],
];

country = document.querySelector('#country');
capitals = document.querySelectorAll('.input');
count = document.querySelector('#count')
countCard = 0;
countries = ajaxApi.slice();

correctErrors = function () {
  countCard = 0;
  document.querySelector('#result').style.display = 'none';
  document.querySelector('#main').style.display = 'block';
  countries.splice(0, countries.length);
  answeredCountries.splice(0, answeredCountries.length);
  activeQuestCard.splice(0, activeQuestCard.length);
  let i = 0;
  do {
    countries[i] = ajaxApi[errors[i]];
    i++;
  }
  while (i < errors.length);
  errors.splice(0, errors.length);
  nextButton();
};

nextButton = function () {
  if (answeredCountries.length == countries.length) setTimeout(() => getFinalResult(), 400);
  else startCard();
}

startCard();

function startCard() {
  count.innerHTML = (countCard + 1) + '  из  ' + countries.length;
  countCard++;

  document.querySelector('#next').disabled = true;
  rndCountryPick = Math.round(Math.random() * 3);

  setRandomCountries();

  for (let i = 0; i < 4; i++) {
    setRandomCapitals(i);
    capitals[i].disabled = false;
    capitals[i].className = "form-control input";
    capitals[i].innerHTML = activeQuestCard[i].toUpperCase();
  }
}

function setRandomCountries() {
  randomCountryIndex = (Math.round(Math.random() * (countries.length - 1)));
  if (answeredCountries.includes(ajaxApi.indexOf(countries[randomCountryIndex])) == true) setRandomCountries();
  else country.innerHTML = countries[randomCountryIndex][0];
};

function setRandomCapitals(i) {
  let tempRandomCapital = ajaxApi[Math.round(Math.random() * (ajaxApi.length - 1))][1];
  if (i == rndCountryPick) activeQuestCard[i] = countries[randomCountryIndex][1];
  else {
    if ((activeQuestCard.includes(tempRandomCapital) == true) || (tempRandomCapital == countries[randomCountryIndex][1])) setRandomCapitals(i);
    else activeQuestCard[i] = tempRandomCapital;
  }
}

checkButton = (btn) => {
  value = (btn.value);
  checkInput();
}

function checkInput() {
  document.querySelector('#next').disabled = false;
  answeredCountries.push(ajaxApi.indexOf(countries[randomCountryIndex]));

  for (let i = 0; i < 4; i++)
    capitals[i].disabled = true;

  if (value == rndCountryPick) {
    capitals[value].className = "form-control input is-valid";
  } else {
    capitals[rndCountryPick].className = "form-control input is-valid";
    capitals[value].className = "form-control input is-invalid";
    errors.push(ajaxApi.indexOf(countries[randomCountryIndex]));
  }
}

function getFinalResult() {
  document.querySelector('#next').disabled = true;
  document.querySelector('#result').style.display = 'block';
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#res1').innerHTML = 'Верно:     ' + (countries.length - errors.length);
  document.querySelector('#res2').innerHTML = 'Не верно:  ' + errors.length;
  document.querySelector('#res3').innerHTML = 'Всего:     ' + countries.length;
  if (errors.length == 0) document.querySelector('#correct').style.display = 'none';
}

function startNew() {
  location.reload();
};