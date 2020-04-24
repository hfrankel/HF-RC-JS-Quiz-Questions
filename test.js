whereAreTheyTakingTheHobbits('Isengard'); // TypeError: not a function

(function () {
  console.log('What did you say?');
})();

function whereAreTheyTakingTheHobbits(place) {
  console.log(`They're taking the hobbits to ${place}!`);
}

// var whoIsTheChosenOne = (name) => {
//   console.log(name + ' Potter!');
// };

// whoIsTheBoyWhoLived('Harry'); // Harry Potter!

// IIFE (Immediately Invokable Function Expression)

// (function () {
//   console.log('lumos'); // lumos
// })();
