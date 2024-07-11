// HOF --> takes action function as argument
function forEach(elems, action) {
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

// OCP to get subset
function filter(elems, predicate) {
    var result = [];
    forEach(elems, elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

// to transform
function map(elems, transformFn) {
    var result = [];
    forEach(elems, function (elem) {
        result.push(transformFn(elem));
    })
    return result;
}

function add(x, y) {
    return x + y;
}

module.exports = {
    add,
    filter,
    forEach
}

