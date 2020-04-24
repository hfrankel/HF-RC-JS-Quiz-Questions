# JS Quiz Questions

#### 1. What are the primitive types in JavaScript (JS)?

A) String, number, bigint, boolean, undefined, symbol

B) Number, boolean, string, hash, array, symbol

C) Object, array, string, number, boolean, undefined, symbol, null

D) Number, string, bigint, undefined, boolean

Answer: A

Hint: There are 6 primitive types

#### 2. What is the difference between JS and ECMAScript?

A) ECMAScript is the Aussie version of JS. All variable names must be prepended with gDayMate

B) ECMAScript is a standard for scripting languages such as JS, JScript, etc while JS is a language based on ECMAScript

Answer: B

Hint: It's definitely not A

#### 3. What is the convention for naming variables in JS?

A) Snake case e.g. `const snake_says = 'hisss'`

B) Upper case e.g. `const SHAGGYSAYS = 'zoink'`

C) Lower case e.g. `let scoobysays = 'rooby roo'`

D) Camel case e.g. `const camelSays = 'Would you mind turning the volume down please? I've got work tomorrow'`

Answer: D

Hint: Hump

#### 4. What will the following function return?

```
const weather = (temperature) => {
  if (temperature > 20) {
    const wind = 25;
  }

  return `The weather will be warm today with a wind speed of ${wind}km/hr`;
};

weather(22);
```

A) The weather will be warm today with a wind speed of 25km/hr

B) Null

C) 'The weather will be warm today with a wind speed of 25km/hr'

D) An error

Answer: D

Hint: Variable scope

#### 5. What will the following function return?

```
const wind = 25;

const weather = (temperature) => {
  if (temperature > 20) {
    return console.log(
      `The weather will be warm today with a wind speed of ${wind}km/hr`
    );
  }
};

weather(22);
```

A) The weather will be warm today with a wind speed of 25km/hr

B) Null

C) 'The weather will be warm today with a wind speed of 25km/hr'

D) An error

Answer: A

Hint: Scope lookup

#### 6. What will be the outcome from the following?

```
let monty = 'burns';
let homer = 'simpson';

const x = monty;
const y = homer;

monty = 'release the hounds';
homer = 'doh!'

console.log(monty, homer, x, y);
```

A) Undefined

B) release the hounds doh! release the hounds doh!

C) release the hounds doh! burns simpson

D) An error

Answer: C

Hint: Copy vs reference

#### 7. What will be the outcome from the following?

```
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers;

newNumbers[0] = 6;

console.log(newNumbers);
console.log(numbers);
```

A)
\[1, 2, 3, 4, 5]
[6, 1, 2, 3, 4, 5]

B)
[6, 1, 2, 3, 4, 5]
\[1, 2, 3, 4, 5]

C)
[6, 2, 3, 4, 5]
\[6, 2, 3, 4, 5]

D)
[6, 2, 3, 4, 5]
\[1, 2, 3, 4, 5]

Answer: C

Hint: Copy vs reference

#### 8. What will be the outcome from the following?

```
whereAreTheyTakingTheHobbits('Isengard')

(function () {
  console.log("What did you say?");
})();

function whereAreTheyTakingTheHobbits(place) {
  console.log(`They're taking the hobbits to ${place}!`);
}
```

A)
They're taking the hobbits to Isengard!
What did you say?

B) An error

C) They're taking the hobbits to Isengard!

D)
What did you say?
They're taking the hobbits to Isengard!

Answer: A

Hint: Hoisting. Named vs anonymous functions
