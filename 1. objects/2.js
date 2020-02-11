// Using the different way of accessing and assigning a value to the object using `.` or `[]`


// 1. Define a variable named `user` and assign a blank object to it.
```js 
let user = { }
```

// 2. Add a key of `user name` and a value of `Black Panther` to that object.
```js 
user["username"]= "Black Panther";
```

// 3. Using `console.log` log the value of `user name` key from the user object.
```js 
console.log(user.username);
```
// 4. Add a key of the value of variable `batch` in the object with the value of 10.
var batch = "myBatch";
```js 
user[batch] = 10;
```

// 5. Using the alert function alert the value of the key added above.
```js
alert(user["myBatch"]);
```

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.
```js 
user["42"] ="The answer to the meaning of life 🧸";
```

// 7. Using the function console.log log the value of the key `42`.
```js
console.log( user[42] );

```
// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.
```js
var city = prompt("Enter the city name you visited las time.");

user[city] = true;

```
// 9. Uisng console.log log the value of the key defined above.
```js 
console.log(user[city]);
```
// 10. Can you define a key of `let or var` in any object? Reason.

Yes, we can do it as the key in the object is a string even if we don't define it. 