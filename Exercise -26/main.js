// // Synchoronous //
// function fetchUserDataSync(){
//     alert("Fetching user data");
//     return {id: 1, name: "Sacdia"}
// }

// console.log("Starting fetching user data");

// const user = fetchUserDataSync();

// console.log("User data", user);

// console.log("This message is blocked until user data is fetched")

// // Asynchronous //



// function getUserData(callback) {
//     setTimeout(() => {
//         const user = {id: 1, name: "Sacdia"}
//         callback(user);
//     }, 3000);
// }

// console.log("Starting to fetch user data");

// getUserData(function (user) {
//     console.log(user)
// });

// console.log("This message shows up immediately")


// EXERCISE  26//

function blocking () {
    alert("Click ok to Continue");
    console.log("Blocking message - after alert")
}

blocking()
console.log("You will see this after You accept the alert.")

// NON BLOCKING  //

function nonBlocking (){
    setTimeout(() => {
        console.log("Non-blocking message - after 2 seconds.")
    }, 2000)
} 
nonBlocking()
console.log("You will see this IMMEDIATELY, Ma Sugaayo setTimeout ka.")