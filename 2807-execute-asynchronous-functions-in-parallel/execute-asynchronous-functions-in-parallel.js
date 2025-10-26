/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise( (resolve, reject) => {
        if(functions.length === 0){
            return ([]);
        }

        var results = new Array(functions.length).fill(null);
        let resolvedCount = 0;

        functions.forEach( async(promise, index) => {
            try{
                var subResult = await promise();
                results[index] = subResult;
                resolvedCount++;

                if(resolvedCount == functions.length){
                    resolve(results);
                }
            }catch(err){
                reject(err);
            } 
        })  
    }) 
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */