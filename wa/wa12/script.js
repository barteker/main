const triviaBtn = document
  .querySelector("#js-new-quote")
  .addEventListener("click", getImage);

const questionTxt = document.querySelector("#js-quote-text");

// this is the endpoint for the API that we want to get a reponse from
const endpoint = "https://official-joke-api.appspot.com/random_joke";

async function getImage() {
  if (document.getElementById("shibe").checked === true) {
    try {
      const response = await fetch("https://shibe.online/api/shibes");
      // if !response.ok is "if the response ISN'T okay (status code 200)"
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();

      console.log(json);
      // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
      displayImage(json);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch new quote");
    }
  } else {
    // try -> tries something; if it returns an error, it puts us into the catch block
    try {
      const response = await fetch("https://random.dog/woof.json");
      // if !response.ok is "if the response ISN'T okay (status code 200)"
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();

      console.log(json);
      // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
      displayImage(json.url);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch new quote");
    }
  }
}

// this function shows the question
function displayImage(url) {
  document.querySelector("#js-quote-text").src = url;
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getImage();
