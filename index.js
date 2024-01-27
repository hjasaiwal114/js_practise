String.prototype.sub_String = function() {
    // Create an empty array to store the substrings
    var subset = [];
  
    // Outer loop: iterate over each character in the string
    for (var m = 0; m < this.length; m++) {
      // Inner loop: iterate over substrings starting from the current character
      for (var n = m + 1; n < this.length + 1; n++) {
        // Use the slice method to extract a substring from index m to n
        // and push it to the 'subset' array
        subset.push(this.slice(m, n));
      }
    }
  
    // Return the array containing all the substrings
    return subset;
  };
  
  // Example usage: call the sub_String method on the string "dog"
  console.log("dog".sub_String());
  