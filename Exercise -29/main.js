// const user = {
//     name: "Sacdia",
//     id: "C1250204",
//     city: "Mogadishy"
// };
// console.log(user);

// const jsonString = JSON.stringify(user)
// console.log(jsonString)

// const parsedData = JSON.parse(jsonString)
// console.log(parsedData)

async function fetchData() {
    console.log("Starting to Fetch Data");

    const response = await fetch('./data.json')
    const data = await response.json();
    console.log("Response:", data)
}
fetchData()