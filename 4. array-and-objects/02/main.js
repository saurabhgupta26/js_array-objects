var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
//Output
  //1 
  let penguins = [gunter, ramon, fred];
  //2
  console.log(penguins[0]);
  //3
  let secondPenguin = penguins[1];
  //4
  let last = penguins[penguins.length-1];
  console.log(last);
  //5
  penguins.push = myPenguin;
  //6
  console.log(penguins.length);
  //7
  penguins[0].canFly = true;
  //8
  console.log(penguins[0].sayHello());
  //9
  for (let x of penguins) {
    console.log(x.name);
  }
  //10
  for(let x of penguins) {
    console.log(x.sayHello());
  }
  //11
  for(let x of penguins) {
    x.numberOfFeet = 2;
  }
  //12
  for(let x of penguins) {
    if( x.canFly === true ) {
    	{
      	console.log(x.name + " can fly");
      }    
    }
  }



