'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var names = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

shuffleArray(WIZARD_NAMES);
shuffleArray(WIZARD_SURNAMES);
shuffleArray(COAT_COLOR);
shuffleArray(EYE_COLOR);

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  names[i] = WIZARD_NAMES[i] + ` ` + WIZARD_SURNAMES[i];
}

var wizards = [
  {
    name: names[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYE_COLOR[0]
  },
  {
    name: names[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYE_COLOR[1]
  },
  {
    name: names[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYE_COLOR[2]
  },
  {
    name: names[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYE_COLOR[3]
  }
];

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
