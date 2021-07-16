/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(names, event) {
    let newArray = [];
    for(let i=0; i < names.length; i++) {
        let name = names[i]
        console.log[names[i]]
        let message = `Thank you, ${name}, for the wonderful ${event} gift!`;
        newArray = [...newArray, message];
    }
    return newArray;
}

function countDown(start) {
    while(start >= 0) {
        console.log(start);
        start--;
    }
}