function numberToWords(num: number): string {
    //lets use 1234567 = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven" as walking example

    if (num === 0) return "Zero";

       const belowTwenty = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
        "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", 
        "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];  //the 0th index is empty string so the numbers match their indexes

    const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", 
        "Sixty", "Seventy", "Eighty", "Ninety"
    ]; //the singles, and tens are empty strings so you can match indexes

    const thousands = ["", "Thousand", "Million", "Billion"]; //the hundreds is empty string so you can match indexes


    // the answer will be built right most to left, meaning you will get the 'smaller' digit places first then iterate and build, so hundreds place, then thousands, then millions
    //function to call recursively, for numbers 0-999 - we will use this by giving it groups of 3-digit numbers which will then be paired with the thousands mapper
    function helperForNumbersBelow1000(n: number): string {
        //1234'567'
        if (n === 0 ) {
            return "";
        } else if (n < 20) {
            //3rd iter - has 7 - just get Seven from the mapping
            return belowTwenty[n] + " ";
        } else if (n < 100) {
            //2nd iter - 67 - tens place is 6 so Sixty + then mods 10 to get final rightmost 7 
            return tens[Math.floor(n/10)] + " " + helperForNumbersBelow1000(n % 10);
        } else {
            // so it will do 567/100 which is 5 so 5 Hundred then recursive call again with the 2 right most digits - so next iter is 67...
            return belowTwenty[Math.floor(n/100)] + " Hundred " + helperForNumbersBelow1000(n % 100);
        }
    }

    let result = ""
    let groupIndex = 0;

    while (num > 0) {
        //get the last 3 digits
        const currentGroup = num % 1000;  //mod is remainder - so it will leave the last 3 digits leftover
        //example -- 1234 % 1000 means you have 1 + remainder of 234 
        //example -- 12345 % 1000 means you have 12 thousands + 345 remainder

        if (currentGroup != 0) {
            const groupWords = helperForNumbersBelow1000(currentGroup);
            const scale = thousands[groupIndex]; //start with less than a thousand, then thousand, then million, then billion, for each iteration

            // scale is thousand or million or billion...
            result = groupWords + (scale ? scale + " " : "") + result;
        }

        //move to the next 3 digits - every iteration we dived by 3 places using mod 1000 - we already processed 3 digits so remove them
        num = Math.floor(num / 1000); //this will add a decimal point 3 places to the right then math floor removes those 3 right numbers, so you have 3 numbers left
        groupIndex++;
    }


    //clean up trailing spaces
    return result.trim();
}

// Test cases
console.log(numberToWords(0));           // "Zero"
console.log(numberToWords(123));         // "One Hundred Twenty Three"
console.log(numberToWords(12345));       // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567));     // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(1000000));     // "One Million"
console.log(numberToWords(50868));       // "Fifty Thousand Eight Hundred Sixty Eight"
console.log(numberToWords(2147483647));  // "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven"


// Visual Flow for 1234567:
// Iteration 1: Process 567 (rightmost)
// result = "Five Hundred Sixty Seven "

// Iteration 2: Process 234 (middle)
// result = "Two Hundred Thirty Four Thousand " + "Five Hundred Sixty Seven "
//          ↑ prepend to the front

// Iteration 3: Process 1 (leftmost)
// result = "One Million " + "Two Hundred Thirty Four Thousand Five Hundred Sixty Seven "
//          ↑ prepend to the front