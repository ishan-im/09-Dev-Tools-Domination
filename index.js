const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    // function makeGreen() {
    // //   const p = document.querySelector('p');
    //   p.style.color = '#BADA55';
    //   p.style.fontSize = '50px';
    // }

    // Regular
console.log("hello");
    // Interpolated
console.log("hello , I am a %s string","js");
let text = "js";
console.log(`hello I am a ${text} string`)
    // Styled
console.log("%c I am big red text","font-size: 40px; color:red")

    // warning!
console.warn("This is ...");
    // Error :|
console.error("shit!");
    // Info
console.info("survival of the fittest");
    // Testing
const doc = document.querySelector("p");

console.assert(doc.classList.contains("hex"), "you selected wrong class")
    // clearing
// console.clear();
    // Viewing DOM Elements
console.log(doc);
console.dir(doc);
    // Grouping together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.name} , ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})
    // counting
console.count("huu");
console.count("huu");
console.count("huu");
console.count("huu");
console.count("fuu");
console.count("huu");
console.count("fuu");
console.count("fuu");
    // timing

    console.time("fetching data");
    fetch("https://api.github.com/users/wesbos")
    .then(data => data.json()
    .then(data => {
     console.timeEnd("fetching data");
     console.log(data);
    }))