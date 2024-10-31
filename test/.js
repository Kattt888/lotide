const titleCase = function(text) {
    // if there is an empty string, return it 
    if (text.length === 0) {
      return "";
    }
  
    // split the text into an array of words
    let words = text.toLowerCase().split(' ');
  
    // create an empty array to hold the title-case words
    let titleCaseWords = [];
  
    // loop through each word
    for (let i = 0; i < words.length; i++) {
      // capitalize the first letter and add the rest of the word in lowercase
      let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      // push the capitalized word into the array
      titleCaseWords.push(capitalizedWord);
    }
  
    // join the capitalized words back into a single string
    return titleCaseWords.join(' ');
  };
  
