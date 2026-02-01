// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
    return new Promise((resolve, reject)=>{

        if(promises.length === 0) {
            reject(new AggregateError([], "Empty iterable"));
            return;
        }

        let rejectcount = 0;
        let err = [];

        promises.forEach((ele, i) => {
            Promise.resolve(ele)
            .then((val)=>{
                resolve(val);
            })
            .catch(e =>{
                err[i] = e;
                rejectcount++;

                if(rejectcount === promises.length) {
                    reject(new AggregateError(err, 'All promises were rejected'));
                }
            })
        });
    })
}

module.exports = promiseAny;
