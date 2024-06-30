/**
 * Problem: https://leetcode.com/problems/valid-parentheses/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/
function isValid(s: string): boolean {

    function remove(input:string,index:number) :string{

        input = input.slice(0,index) + input.slice(index+2)

        return input;

    }

    function findPar(s:string) :number {

        const check: string[] = ['()','[]','{}'];

        for (let x = 0; x < s.length; ++ x){

            if (check.includes(s.slice(x,x+2))){
                return x
            }
            
        }
        return -1;
    }

    if (s.length % 2 != 0){
        return false;
    }

    while (s != ''){

        let check:number = findPar(s);

        if (check < 0){
            return false
        }

        s = remove(s,check);



    }

    return true

};