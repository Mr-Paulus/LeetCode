/**
 * Problem: https://leetcode.com/problems/longest-palindromic-substring/description/
 * Given a string s, return the longest palindromic substring  in s.
*/

function isPal(pal:string): boolean{
    
    let begin:number = 0;
    let end:number = pal.length-1

    while (begin < end){
        
        if (pal[begin] !== pal[end]){
            return false;
        }

        begin += 1;
        end -= 1;
    }

    return true;
}


function maxPal(word:string,minSize:number){

    let end:number = word.length;

    for (let x = end; end > 0 && end > minSize; -- x){

        const checkWord = word.slice(0,end);
        
        if (isPal(checkWord)){
            return checkWord;
        }
        end -= 1;
    }

    return ''

}


function longestPalindrome(s: string) {

    let maxPalWord:string = '';
    let maxPalNumb:number = 0;

    let end:number = s.length;

    for (let x = 0; x < end; ++ x ){
        
        const res = maxPal(s.slice(x,end),maxPalNumb)

        if (res.length > maxPalNumb){
            maxPalNumb = res.length
            maxPalWord = res
        }

    }

    return maxPalWord
    
};