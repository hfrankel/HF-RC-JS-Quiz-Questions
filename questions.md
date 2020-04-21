# JS Quiz Questions

#### 1. What are the primitive types in JavaScript (JS)?

A) String, number, bigint, boolean, undefined, symbol

B) Number, boolean, string, hash, array, symbol

C) Object, array, string, number, boolean, undefined, symbol, null

D) Number, string, bigint, undefined, boolean

Answer: A

#### 2. What is the difference between JS and ECMAScript?

A) ECMAScript is the Aussie version of JS. All variable names must be prepended with gDayMate

B) ECMAScript is a standard for scripting languages such as JS, JScript, etc while JS is a language based on ECMAScript

Answer: B

#### 3. What is the convention for naming variables in JS?

A) Snake case e.g. `const snake_says = 'hisss'`

B) Upper case e.g. `const SHAGGYSAYS = 'zoink'`

C) Lower case e.g. `let scoobysays = 'rooby roo'`

D) Camel case e.g. `const camelSays = 'Would you mind turning the volume down please? I've got work tomorrow'`

Answer: D

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