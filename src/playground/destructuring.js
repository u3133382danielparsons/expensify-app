// Object Destructuring
//
// const person = {
//     name: 'Daniel',
//     age: 48,
//     location: {
//         city: 'Canberra',
//         temp: 14
//     }
// };

// const { name, age } = person;
// console.log(`${person.name} is ${person.age} years old.`);

// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-published' } = book.publisher;

// if (publisherName) {
//     console.log(publisherName);
// } else {
//     console.log(publisherName)
// }

//
// Array Destructuring
//

const address = ['44 Wisdom Street,', 'Hughes', 'Canberra', '2605'];

const [ street, suburb, city, postcode ] = address;
console.log(`You are in ${suburb}, ${city}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ beverage, ,med ] = item

console.log(`A medium ${beverage} costs ${med}`);