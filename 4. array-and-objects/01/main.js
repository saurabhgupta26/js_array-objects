//Output
//1
myPenguin.favouriteFoods = [
     "fish", "grains", "worms"
 ];

 //2
console.log(myPenguin.favouriteFoods[1]);
 //3
 let firstFavFood = myPenguin.favouriteFoods[0];
//4
myPenguin.favouriteFoods.push("seeds");
//5
console.log(myPenguin.favouriteFoods.length);
//6
myPenguin.favouriteFoods.push("pineapple");
//7
let lastFavFood = myPenguin.favouriteFoods[(myPenguin.favouriteFoods.length-1) ]; 
//8
for (let m of myPenguin.favouriteFoods) {
    console.log(m);
  }