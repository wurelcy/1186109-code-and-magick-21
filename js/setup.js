'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var names = [];
var wizards = new Array(4);
var wizardNames = WIZARD_NAMES;
var wizardSurames = WIZARD_SURNAMES;
var coatColors = COAT_COLORS;
var eyesColors = EYE_COLORS;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomNumber = function (randomNumber) {
  return Math.floor(Math.random() * (randomNumber + 1));
};

var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = getRandomNumber(i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

shuffleArray(wizardNames);
shuffleArray(wizardSurames);
shuffleArray(coatColors);
shuffleArray(eyesColors);

for (var i = 0; i < wizardNames.length; i++) {
  names[i] = wizardNames[i] + ` ` + wizardSurames[i];
}

for (var k = 0; k < wizards.length; k++) {
  wizards[k] = {name: names[k], coatColor: coatColors[k], eyesColor: eyesColors[k]};
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
