const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//console.log(marvel_heros.concat(dc_heros));
//const new1 = marvel_heros.concat(dc_heros)
//console.log(new1);

marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const new2 = [...marvel_heros,...dc_heros]
//console.log(new2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//console.log(another_array);
const real_another_array = another_array.flat();
//console.log(real_another_array);

// console.log(Array.isArray("sanjay"));
// console.log(Array.from("sanjay"));
// console.log(Array.from({name:"sanjay"}));

let sc1 =100;
let sc2 =200;
let sc3 =300;

console.log(Array.of(sc1,sc2,sc3));



