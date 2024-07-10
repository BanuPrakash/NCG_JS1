// HOF --> takes action function as argument
function forEach(elems, action) {
    for(i = 0 ; i < elems.length; i++) {
        action(elems[i]);
    }
}

// OCP to get subset
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function(elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

// to transform
function map(elems, transformFn) {
    var result = [];
    forEach(elems, function(elem) {
            result.push(transformFn(elem));
    })
    return result;
}