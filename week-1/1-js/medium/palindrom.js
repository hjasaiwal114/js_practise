function isPalindrome(inputString) {
    const lowercaseString = inputString.toLowerCase();

    const cleanString = lowercaseString.replace(/[^a-z0-9]/g, '');

    const reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
}