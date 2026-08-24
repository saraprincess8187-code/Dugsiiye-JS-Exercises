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

async function displayUserData() {
    try{
    const data = await fetchUserData();
    console.log("User data", data)
    } catch(error) {
        console.log(Error, error)
    }

}

displayUserData();

