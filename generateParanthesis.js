/**
 * @param {number} n
 * @return {string[]}
 */
//  ['((()))', '(()())', '(())()', '()(())', '()()()']
const generateParenthesis = function(n) {
    const sol = [];
    const generateComb = (lpc, rpc, partialString) => {
        if(lpc > rpc) {
            return;
        }
        if(!lpc && !rpc) {
            sol.push(partialString);
        }
        if(lpc > 0) {
            generateComb(lpc-1, rpc, partialString + '(');
            }
        if(rpc > 0) {
        generateComb(lpc, rpc-1, partialString + ')');
        }
    }
    generateComb(n, n, '');
    return sol;
};

generateParenthesis(2)