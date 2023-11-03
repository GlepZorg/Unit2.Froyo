// Function to count frequencies of elements in an array
function countFlavors(flavorsArray) {
    const flavorCounts = {};
    for(let i = 0; i < flavorsArray.length; i++){
        // Current flavor in the array
        const flavor = flavorsArray[i]; 
        // If the flavor is already in the object, increment the count
        if(flavorCounts[flavor]){
            flavorCounts[flavor]++;
        }
        // Otherwise, add the flavor to the object with a count of 1
        else{
            flavorCounts[flavor] = 1;
        }
    }
    return flavorCounts;
}

// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,orange,vanilla,strawberry,lime,coffee"
);

// Split into an array of strings.
const stringArray = userInputString.split(",");

// Count each flavor
const flavorsCounts = countFlavors(stringArray);

// Log the final counts
console.log(flavorsCounts);
