var pigLatin = function(word){
  console.log(word);
  var firstLetter = word.slice(0,1);
  console.log(firstLetter);
  if ((firstLetter !== "a") && (firstLetter !== "e") && (firstLetter !== "i") && (firstLetter !== "o") && (firstLetter !== "u")) {
    return false;
  } else {
    return true;
  }
};
