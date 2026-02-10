// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {
    return async function (...args) {
        try {
            return await fn(...args);
        } catch (error) {
            try {
                return await fn(...args);
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = retryOnce;
