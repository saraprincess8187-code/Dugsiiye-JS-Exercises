function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success) {
                resolve({name: "sacdia", id: "C1250204"})
            }else{
                reject("Failed")
            }

        }, 2000)
    })
} 

fetchUserData()
    .then((data) => console.log("User data", data))
    .catch((error) => console.log("Error", error))