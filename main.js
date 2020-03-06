'use strict'
//Получить случайно число от 0 до size-1
let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

//Вычислить расстояние от клика (event) до клада (target)
let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

//Получить для расстояния строку подсказки
let getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Обожжешься!";
  } else if (distance < 20) {
    return "Очень горячо";
  } else if (distance < 40) {
    return "Горячо";
  } else if (distance < 80) {
    return "Тепло";
  } else if (distance < 160) {
    return "Холодно";
  } else if (distance < 320) {
    return "Очень холодно";
  } else if (distance < 640) {
    return "Очень-очень холодно"
  } else {
    return "Замерзнешь";
  }
};

//Создаем переменные
let width = $("#map").attr("width");
let height = $("#map").attr("height");
let clicks = 0;

//Случайная позиция клада
let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

/*Добавляем элементу img обработчик клика
  Получаем расстояние от места клика до клада
  Преобразуем расстояние в подсказку
  Записываем элемент #distance в новую подсказку
  Если клик был достаточно близко, поздравляем с победой
*/
$("#map").click(function (event) {
  clicks++;
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  let remainingTry = 25 - clicks;
  $("#distance").text(distanceHint);
  $("#remainingTry").text("Осталось попыток: " + remainingTry);
  if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
  };
  if (clicks === 25) {
    alert("Конец игры!")
  };
});
