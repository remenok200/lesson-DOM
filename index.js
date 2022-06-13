// ВСПОМИНАЕМ перед этим
window // глобальный объект браузера
window.document // DOM (объектная модель документа)
document // тоже DOM, синоним
console.log(document.getElementsByTagName('p'))
console.log(document.getElementById('user-picture'))
document.getElementsByClassName
document.getElementsByName
console.log(document.querySelector('p'))
console.log(document.querySelectorAll('p'))

// 1
const userPicture = document.querySelector('#user-picture')
console.log(userPicture)

// 2
const userSiteName = document.getElementById('user-site-name')
console.log(userSiteName)

// 3
const userCaption = document.querySelector('#user-caption')
console.log(userCaption)

// 4
const userGratitude = document.querySelector('#user-gratitude')
console.log(userGratitude)

// 5
const paragraphs_TAKOE = document.getElementsByTagName('p')
console.log(paragraphs_TAKOE)

// 5.1
const [...paragraphs] = document.getElementsByTagName('p') // оператор расширения - spread
console.log(paragraphs)

// 6
paragraphs.map(p => p.setAttribute('style', 'width: 70%; text-align: justify'))

// 7
const userChangeButton = document.querySelector('#user-change-button')
userChangeButton.addEventListener('click', () => {
  let name = ''
  name = prompt('Hi! What is your name?')
  console.log(name)

  userSiteName.textContent = `${name} biography`
  userCaption.textContent = `${name} / Bio...`
  userGratitude.textContent = `Thank you for your attention, ${name}!`
  userPicture.setAttribute('src', `https://robohash.org/${name}?set=set4`)
  userPicture.setAttribute('alt', `${name} picture`)
})

// 8
userPicture.addEventListener('click', () => {
  const newTitle = document.createElement('h1')
  newTitle.textContent = 'There must be some original text here!'
  document.body.append(newTitle)
})

/*
Вариант № 1.
Реализовать счетчик.
Состояние (значение) счетчика выводить в абзаце (параграфе).
2 кнопки, одна декрементирует значение счетчика, вторая инкрементирует.
Переменная, в которой будет хранится значение счетчика может быть глобальной.
Если есть желание, можно реализовать настройку шага (шаг настраивается через input, 
при инкременте/декременте счетчика оперируете не единицей (1), а тем шагом, что лежит в input).
Если с input будут проблемы, можно настраивать шаг через prompt.


Вариант № 2.
Реализовать минимальный функционал TODO.
TODO - приложение для управления задачами.
Есть input, в который вы вводите текст задачи.
Есть список (ul), в котором хранятся задачи (li).
Есть кнопка (button), которая будет добавлять задачу (li) в список задач (ul).
Добавлять задачу без текста ("пустую задачу") - запрещено.
Предусмотреть, чтобы "пустые задачи" не попали в список ul.
*/

// Вариант № 1
let step = 1
let counter = 0

const counterState = document.getElementById('counter')
counterState.textContent = `Состояние счетчика: ${counter}`
const counterValue = document.querySelector('#counter-value')
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')

counterValue.addEventListener('change', changeHandler)
function changeHandler ({ target: { value } }) {
  step = Number(value)
  counterState.textContent = `Состояние счетчика: ${counter}`
}

incrementBtn.addEventListener('click', () => {
  counter += step
  counterState.textContent = `Состояние счетчика: ${counter}`
})
decrementBtn.addEventListener('click', () => {
  counter -= step
  counterState.textContent = `Состояние счетчика: ${counter}`
})
