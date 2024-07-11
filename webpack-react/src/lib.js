// HOF --> takes action function as argument
export default function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

// OCP to get subset
export function filter(elems, predicate) {
    var result = [];
    forEach(elems, elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

// to transform
export function map(elems, transformFn) {
    var result = [];
    forEach(elems, function (elem) {
        result.push(transformFn(elem));
    })
    return result;
}

export function add(x, y) {
    return x + y;
}



