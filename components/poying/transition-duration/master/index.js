'use strict';

var map = {
  s: 1000
};

var ms = function (duration) {
  duration = duration.trim();

  var match = duration.match(/^([\.\d]+)(ms|s)/);

  if (!match) {
    return 0;
  }

  return Number(match[1]) * (map[match[2]] | 0);
};

module.exports = function (el, detail) {
  var computed = window.getComputedStyle(el);
  var duration = computed.transitionDuration || '';

  duration = duration
    .split(',')
    .map(ms)
    .sort(function (a, b) {
      return b - a;
    });

  if (!detail) {
    return duration[0] | 0;
  }

  var transition = {};
  var property = computed.transitionProperty;

  property
    .split(',')
    .forEach(function (name, index) {
      name = name.trim();
      transition[name] = duration[index];
    });

  return transition;
};
