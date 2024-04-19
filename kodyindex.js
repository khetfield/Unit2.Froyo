// function to count flavor quantities
function countFlavors(flavorList) {
        // split the list of flavors into an array
        const flavors = flavorList.split(',');
  
        // Object for # of each flavor
        const flavorCounts = {};

        // Count the quantity of each flavor
        flavors.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
         } else {
            flavorCounts[flavor] = 1;
      }
    });
    // Print in console
    console.table(flavorCounts);
}
  // Call function
  const inputFlavors = prompt("Please enter a list of froyo flavors you would like to order.");
  countFlavors(inputFlavors);