whereAreTheyTakingTheHobbits('Isengard'); // TypeError: not a function

(function () {
  console.log('What did you say?');
})();

function whereAreTheyTakingTheHobbits(place) {
  console.log(`They're taking the hobbits to ${place}!`);
}
