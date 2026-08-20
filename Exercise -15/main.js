const people = [
    { name: "Alice", age: 25, city: "wonderland" },
    { name: "Bob", age: 30, city: "Builderland" },
    { name: "Charlie", age: 35, city: "Chocolate factory" },
];
console.log("Properties and values of each person:");

for (let i = 0; i < people.length; i++) {
    console.log("name: ", people[i].name);
    console.log("age: ", people[i].age);
    console.log("city: ", people[i].city);
    console.log("---");
}