// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if ( promises.length === 0) {
            return resolve([]);
        }

        const results = [];
        let completed = 0;

        promises.forEach((ele, i) => {
            Promise.resolve(ele)
                .then(val => {
                    results[i] = val;
                    completed++
                    
                    if(completed === promises.length) {
                        resolve(results);
                    };
                })
                .catch(err =>{
                    reject(err)
                })
        });
    } )
}

module.exports = promiseAll;
