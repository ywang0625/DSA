/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const origin = init;

    function increment(){
        return ++init;
    };

    function decrement(){
        return --init;
    }

    function reset(){
        return init = origin; 
    };

    return{
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */