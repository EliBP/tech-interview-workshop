type occuranceMap = {
    [key: number]: number
}

function uniqueOccurrences(arr: number[]): boolean {
    
    // Create the occurance map
    let occurances: occuranceMap = {};

    // Fill out the occurance map
    for(const num of arr) {
        occurances[num] = (occurances[num] || 0) + 1;
    }

    // Create a set to store non repeated occurances
    let nonRepeatedOccurances = new Set<number>();

    // Go through the occurance map and see if there are any repeated values
    for( const count of Object.values(occurances)) {

        // If the value is in the set then return false
        if(nonRepeatedOccurances.has(count)) {
            return false;
        }

        // Otherwise, add this count to the set
        nonRepeatedOccurances.add(count);
    }

    // If we get this far, then there were no repeated occurances
    return true;
};
