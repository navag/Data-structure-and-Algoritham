const deepClone = (currentObj) => {
    if(typeof currentObj === 'object') {
        let newObj = Array.isArray(currentObj) ? [] : {};
        for(const key in currentObj) {
            newObj[key] = deepClone(currentObj[key]);
        }
        return newObj;
    } else {
        return currentObj;
    }
}

console.log(deepClone({a:[1,2,3], b: false, c: {x: true}}));