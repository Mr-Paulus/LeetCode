/**
 * Problem: https://leetcode.com/problems/integer-to-roman/description/
 * This script transforms a regular number into a roman numeral
*/

//Transform singe digit into a roman numeral
function romanTrans(val:string,low:string,mid:string,high:string):string{

    let valNumb:number = +val;

    if (valNumb == 4){
        return low+mid;
    }

    else if (valNumb == 9){
        return low+high;
    }
    
    else if (valNumb > 4){
        return mid+ low.repeat(valNumb-5);
    }

    return low.repeat(valNumb);

}

//Go's trough number and returns roman numeral 
function intToRoman(num: number) {

    const romanNumb = ['I','V','X','L','C','D','M'];
    const numString:string = num.toString();
    let indexNumb = numString.length-1;
    let indexCheck = 0;
    let retunVal:string = '';

    while (indexNumb > -1){
        
        const add = romanTrans(numString[indexNumb],romanNumb[0+indexCheck],romanNumb[1+indexCheck],romanNumb[2+indexCheck])
        indexCheck += 2;
        indexNumb -= 1;

        retunVal = add+retunVal;
    }

    return(retunVal);
    
};