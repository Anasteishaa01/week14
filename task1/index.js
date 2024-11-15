const divElement = document.querySelector('.paragraph');

const grades = [];
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 100) + 1);
}
const text = `Оценки студентов: ${grades}`;
const newText = document.createElement('p');
newText.className = 'paragraph';
newText.textContent = text;
divElement.append(newText);

const sum = grades.reduce((a,b) => a + b);
const avg = Math.floor(sum / grades.length);
const text_two = `Средний балл студентов: ${avg}`;
const newTextTwo = document.createElement('p');
newTextTwo.className = 'paragraph';
newTextTwo.textContent = text_two;
divElement.append(newTextTwo);

const maxNumbers = Math.max(...grades);
const text_three = `Максимальный балл студентов: ${maxNumbers}`;
const newTextThree = document.createElement('p');
newTextThree.className = 'paragraph';
newTextThree.textContent = text_three;
divElement.append(newTextThree);


const minNumbers = Math.min(...grades);
const text_four = `Минимальный балл студентов: ${minNumbers}`;
const newTextFour = document.createElement('p');
newTextFour.className = 'paragraph';
newTextFour.textContent = text_four;
divElement.append(newTextFour);

const filter = grades.filter(function(num) {
    return num >= 60
})
const text_five = `Количество студентов, получивших положительную оценку: ${filter.length}`;
const newTextFive = document.createElement('p');
newTextFive.className = 'paragraph';
newTextFive.textContent = text_five;
divElement.append(newTextFive);

const filter_two = grades.filter(function(num) {
    return num <= 60
})
const text_six = `Количество студентов, получивших отрицательную оценку: ${filter_two.length}`;
const newTextSix = document.createElement('p');
newTextSix.className = 'paragraph';
newTextSix.textContent = text_six;
divElement.append(newTextSix);

const newGrade = grades.map((num) => {
    return num >= 80 && num <= 100
    ? 'A'
    : num >= 60 && num <= 79
    ? 'B'
    : num >= 40 && num <= 59
    ? 'C'
    : num >= 20 && num <= 39
    ? 'D'
    : 'E';
})
const text_seven = `Оценки студентов: ${newGrade}`;
const newTextSeven = document.createElement('p');
newTextSeven.className = 'paragraph';
newTextSeven.textContent = text_seven;
divElement.append(newTextSeven);