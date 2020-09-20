'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var FONT_GAP = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var currentBarHeight;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + CLOUD_GAP,
      CLOUD_Y + CLOUD_GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + FONT_GAP, (CLOUD_Y + FONT_GAP) * 2);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - currentBarHeight - FONT_GAP * 3
    );
    ctx.fillStyle = `hsl(` + 240 + `,` +
             (100 * Math.random()) + `%,` +
             (50) + `%)`;
    if (players[i] === `Вы`) {
      ctx.fillStyle = `#ff0000`;
    }
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - currentBarHeight - FONT_GAP * 2,
        BAR_WIDTH,
        currentBarHeight
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - FONT_GAP
    );
  }
};
