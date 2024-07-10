// HOF --> takes action function as argument
function forEach(elems, action) {
    for(i = 0 ; i < elems.length; i++) {
        action(elems[i]);
    }
}

// OCP
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function(elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

function map(elems, transformFn) {

}