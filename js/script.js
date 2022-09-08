


//--- DIRECTORY --- //
const requestURL = "js/kwords.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const kWords = jsonObject["kWords"];
    let sortedWords = kWords.sort(function () {
        return 0.5 - Math.random();
      });
      sortedWords.forEach(displayWords);
  });

function displayWords(word) {
  // Create elements to add to the document
  const hangul = document.querySelector("#hangul")
  const koreanWord = document.querySelector("#koreanWord")
  const wotdDesc = document.querySelector(".wotd-desc")
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // Change the textContent property of the elements to contain company info
  hangul.textContent = `${word.hangul}`;
  koreanWord.textContent = `${word.ph_korean}`;
  wotdDesc.textContent = `${word.english}`;
  }
