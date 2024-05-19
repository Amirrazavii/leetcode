
var equalPairs = function(grid) {
    const n = grid.length;

    const changerowbycol = convertRowToCol(grid);
    console.log(changerowbycol);

    let count=0
    changerowbycol.forEach((row, index) => {
        // console.log(row);
        grid.forEach((col, index) => {
            const ar=row.toString()
            const ar2=col.toString()
            if(ar===ar2){
                count++;
            }

        })
        
    })
    return count;
    
    

} 

function convertRowToCol(matrix) {
    const n = matrix.length;
    const result = [];

    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        result.push(column);
    }

    return result;
}

// Example usage
const grid = [[3,2,1],[1,7,6],[2,7,7]]

// const convertedMatrix = convertRowToCol(matrix);
// console.log(convertedMatrix);
const a=equalPairs(grid);
console.log(a);
