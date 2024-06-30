/**
 * Problem: https://leetcode.com/problems/valid-sudoku/
 * Determine if a 9 x 9 Sudoku board is valid.
*/
function isValidSudoku(board: string[][]): boolean {

    let horBoard = [
        ['.','.','.','.','.','.','.','.','.'],//1   
        ['.','.','.','.','.','.','.','.','.'],//2   
        ['.','.','.','.','.','.','.','.','.'],//3
        ['.','.','.','.','.','.','.','.','.'],//4
        ['.','.','.','.','.','.','.','.','.'],//5
        ['.','.','.','.','.','.','.','.','.'],//6
        ['.','.','.','.','.','.','.','.','.'],//7
        ['.','.','.','.','.','.','.','.','.'],//8
        ['.','.','.','.','.','.','.','.','.'],//9
    ];

    let verBoard = [
        ['.','.','.','.','.','.','.','.','.'],//1   
        ['.','.','.','.','.','.','.','.','.'],//2   
        ['.','.','.','.','.','.','.','.','.'],//3
        ['.','.','.','.','.','.','.','.','.'],//4
        ['.','.','.','.','.','.','.','.','.'],//5
        ['.','.','.','.','.','.','.','.','.'],//6
        ['.','.','.','.','.','.','.','.','.'],//7
        ['.','.','.','.','.','.','.','.','.'],//8
        ['.','.','.','.','.','.','.','.','.'],//9
    ];

    let  squereBoard = [
        ['.'],//1   
        ['.'],//2   
        ['.'],//3
        ['.'],//4
        ['.'],//5
        ['.'],//6
        ['.'],//7
        ['.'],//8
        ['.'],//9
    ];

    let blocks = 0;

    for (let x = 0; x < 9; ++ x){
       
        if (x === 6){
            blocks += 3
        }

        else if(x === 3){
            blocks += 3
        }


        for (let y = 0; y < 9; ++ y ){

        
            if  (y < 3){

                if (squereBoard[0+blocks].includes(board[x][y]) && board[x][y] != '.'){
                    return false
                }
                squereBoard[0+blocks].push(board[x][y]);

            }

            else if (y < 6){
                
                if (squereBoard[1+blocks].includes(board[x][y]) && board[x][y] != '.'){
                    return false
                }
                squereBoard[1+blocks].push(board[x][y]);
                
            }

            else {
                
                if (squereBoard[2+blocks].includes(board[x][y]) && board[x][y] != '.'){
                    return false
                }
                squereBoard[2+blocks].push(board[x][y]);
                
            }

            if (
                
                (horBoard[x].includes(board[x][y]) && board[x][y] != '.') ||
                (verBoard[x].includes(board[y][x]) && board[y][x] != '.')

            ){

                return false;

            }

            horBoard[x][y] = board[x][y];
            verBoard[x][y] = board[y][x];        
        }
    }

    return true
};