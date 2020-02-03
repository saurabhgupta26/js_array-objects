//Output

//1
myPenguin.outfit = {
 hat : "baseball hat",
 shirt : "hawaiian shirt",
 pants : "cargo shorts",
 shoes : "joker shoes"
};

//2
let penguinHatType = myPenguin.outfit.hat;

//3
myPenguin.outfit.accessory = "pocket watch";
//4
myPenguin.outfit.hat = "Top Hat";
//5
delete myPenguin.outfit.pants;
//6
for (let m in myPenguin.outfit) {
    console.log(m);
}
