function runConcatenation() {
    function concatenateTextAndNumbers(text, numbers) {
        var sortedText = text.split('').sort().join(''); // Rearrange the letters in alphabetical order
        var sortedNumbers = numbers.sort(function(a, b) { return b - a; }); // Rearrange the numbers in descending order
        var result = sortedText + " ";
        for (var i = 0; i < sortedNumbers.length; i++) {
            result += sortedNumbers[i].toString();
            if (i !== sortedNumbers.length - 1) {
                result += ", ";
            }
        }
        return result;
    }

    var args = process.argv.slice(2);
    var text = args[0];
    var numbers = args.slice(1).map(Number);

    console.log(concatenateTextAndNumbers('This is some random text', [1, 3, 7, 4, 8, 0, 10]));
}

runConcatenation();
