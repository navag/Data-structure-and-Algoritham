function st(str) {
    if (str.length % 2 !== 0) return false;
    
    const pairs = "(){}[]";
    const stack = [];
    for(const bracket of str) {
        const index = pairs.indexOf(bracket);
        if (index % 2 === 0) { // is opening bracket
            stack.push(index);
        } else {
            if (stack.pop() !== index - 1) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

st('(}{}[][)')