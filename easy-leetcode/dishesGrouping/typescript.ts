function groupDishes(dishes: string[][]): string[][] {
    // Step 1: Create a map to store ingredient -> list of dishes
    const ingredientMap: Map<string, string[]> = new Map(); // key is the ingredient, value is a string list
    
    // We'll build this up as we go through each dish
    for (let dish of dishes) { 
        const dishName = dish[0];  //we are now iterating through the flat dish array ["Cheese" -> name,"Pasta" -> ing1,"Pizza" -> ing2,"Sandwich" -> ing3]
        for (let i = 1; i < dish.length; i++ ) {  //start at 1 because 0 is already the dishname
            const ingredient = dish[i]

            //check if next ingredient is new - which means we dont have the key yet, then create a new array of values for that key
            if (!ingredientMap.has(ingredient)) {
                ingredientMap.set(ingredient, []); //
            }

            const dishList = ingredientMap.get(ingredient); //does this new ingredient we are looping on have a key, then lets add it as the value into the map
            dishList.push(dishName);
        }
    }

    const result: string[][] = [] //now we are going to make the result double array which we will convert the map to
    for (let [ingredientKey, dishesListInMap] of ingredientMap) { //iterate by getting the key and the values
        if (dishesListInMap.length >= 2) {
            //add ingredient to our result
            dishesListInMap.sort();  //sort by values so ingredients name starts with 'a'

            result.push([ingredientKey, ...dishesListInMap])
        }
    }

    //sort by ingredient name?
    result.sort((a, b) => a[0].localeCompare(b[0]));  //now sort by the dishname

    return result;
}


//Time and Space complexity

//TIME
// so we do double loop - so its n squared -- though its really n * m with m being average size of ingredients - so really its O(n * m)
//map operations are quick for accessing -- so has(), get(), set(), push() are all quick at O(1)
// but then we do another for and sort - which means you do N * log N for sorting -- so its now O(n * m) + O(n * log n) - which means its O(n*m*nlogn)  or n^2*mlogn


//SORTS
// good sorts - merge sort/ quick sort/ heap sort --- theres are about nlogn
// javascript .sort() uses 'tim sort' which is nlogn for worst case or best case n if already sorted
// bad sorts - bubble sort, insertion sort, selection sort


//SIZE
// map stores all ingredients - so O(n*m)
// the result array is O(n*m)
// so total is n*m because drop the constants


//edge cases
// empty input, single dish, two dishes with no shared ingredients
// all dishes share all the ingredients
// dish with only a name and no ingredients?  invalid
// dedupe dish names?
// case sensitivity 
// questions for interview - can input be case sensitive? can duplicated ingredients show up in the same dish list?  can you have duplicate dish names?


// Optimizations

// sort at the end - not within the loop
// Sort everything at once
result.sort((a, b) => {
    // First sort by ingredient name
    const ingredientCompare = a[0].localeCompare(b[0]);
    if (ingredientCompare !== 0) return ingredientCompare;
    
    // If ingredients are same (shouldn't happen), compare dishes
    return 0;
});

// Then sort the dishes within each ingredient
result.forEach(group => {
    const dishes = group.slice(1);  // Get all except ingredient name
    dishes.sort();
    // Replace back
    for (let i = 1; i < group.length; i++) {
        group[i] = dishes[i - 1];
    }
});


// BETTER?
//use a sorted data structure - treeMap or sortedMap - java has treeMap which sorts as items are added
// could use binarySearchInput to calculate a sorted index then dishList.splice to recreate that list? - actually worse 

//Minor space optimization?
// avoid spreading - for each item in row push and then push the whole row 
// or even use unshift to append to the front of the list                                   


Interview Answer
Interviewer: "Could we use better data structures to optimize this?"
You:

"In theory, if JavaScript had a TreeMap or SortedMap data structure like Java, we could maintain sorted order as we insert, avoiding the explicit sorting step at the end. This would give us O(log K) insertion per ingredient instead of sorting all at once.
However:

JavaScript doesn't have these natively - we'd need external libraries
The asymptotic complexity would be similar: O(N × M log M) vs our current O(N × M log M)
The constant factors might actually be worse with a balanced tree structure
Our current solution is clean, readable, and uses only built-in data structures

For a LeetCode problem or production code in JavaScript, I think our current approach with Map and sorting is the most practical solution. If this were Java, I might consider using TreeMap and TreeSet."


//Maps/HashMaps are fast: O(1) average lookup/insert
// map.entries() → Returns both keys AND values as pairs [key, value]
// map.values() → Returns only the values, no keys
