// Step 1: Create a JavaScript function called checkVotingEligibility
function checkVotingEligibility(age) {
    // Step 2: Inside the function, use an if statement to check if the age is greater than or equal to 18.
    if (age >= 18) {
        // Step 3: If the age is greater than or equal to 18, return the string "You are eligible to vote!".
        return "You are eligible to vote!";
    } else {
        // Step 4: If the age is less than 18, return the string "Sorry, you are not eligible to vote yet.".
        return "Sorry, you are not eligible to vote yet.";
    }
}

// Step 5: Call the checkVotingEligibility function with different ages as arguments to test eligibility.
console.log(checkVotingEligibility(16));  // Output: Sorry, you are not eligible to vote yet.
console.log(checkVotingEligibility(21));  // Output: You are eligible to vote!
console.log(checkVotingEligibility(18));  // Output: You are eligible to vote!
