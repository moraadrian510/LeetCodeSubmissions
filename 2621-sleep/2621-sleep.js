/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("wake up!")
        }, millis)
    })
}

async function run(){
    console.log("start");
    const result = await sleep(100);
    console.log(result);
    console.log("End");
}

run();

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */