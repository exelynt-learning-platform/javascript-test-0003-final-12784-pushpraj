const TOTAL_ROWS = 6;
// Total number of rows in our Binary pyramid

for(let row = 1; row <= TOTAL_ROWS; row++){ // Outer loop for keeping row count
    let currentRow = "";
    for(let column = 0;  column < row; column++){ // Nested loop for dynamic number of columns
        currentRow += (row+column)%2 + " "; // Concating string for printing once a row. Remainders of row + column when divided by 2 make the correct pattern. 
    }
    console.log(currentRow); // Printing the current row
}
