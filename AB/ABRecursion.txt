// Q. The problem is to count all the possible paths from top left to bottom right of a MxN matrix with the 
// constraints that from each cell you can either move to right or down.

        const nop = (m,n) => {
            if(m === 1 || n === 1) return 1;
        return nop(m,n-1) + nop(m-1,n);
        }

//Q. Print the powerset of given string
//Q Number of Icelands
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let count = 0;
    for(rowInd in grid) {
        for(colInd in grid[rowInd]) {
            if(grid[rowInd][colInd] === '1') {
                count++;
                helper(grid, parseInt(rowInd), parseInt(colInd));
            }
        }
    }
    return count;
};

const helper = (grid, rowInd, colInd) => {
    if(!grid[rowInd] || !grid[rowInd][colInd] || grid[rowInd][colInd] === '0') return;
    grid[rowInd][colInd] = '0';
    helper(grid,rowInd + 1, colInd);
    helper(grid,rowInd - 1, colInd);
    helper(grid,rowInd, colInd + 1);
    helper(grid,rowInd, colInd -1);
}

console.log(numIslands(
[["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","1"]]
));

 console.log(nop(3,3))